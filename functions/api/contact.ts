interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      default: return '&#39;';
    }
  });
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    });
    const result = (await res.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context;

  let body: { name?: unknown; email?: unknown; message?: unknown; company?: unknown; token?: unknown };
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  const { name, email, message, company, token } = body;

  // Honeypot: real visitors never see this field, so pretend it worked and drop it.
  if (typeof company === 'string' && company.trim()) {
    return jsonResponse({ success: true }, 200);
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  if (trimmedName.length > 200 || trimmedEmail.length > 200 || trimmedMessage.length > 5000) {
    return jsonResponse({ error: 'Input too long' }, 400);
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return jsonResponse({ error: 'Invalid email address' }, 400);
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const ip = request.headers.get('CF-Connecting-IP');
    if (typeof token !== 'string' || !token || !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip))) {
      return jsonResponse({ error: 'Verification failed' }, 403);
    }
  }

  const toEmail = env.CONTACT_TO_EMAIL || 'berkay.aslan@vafaill.co.uk';

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Vafaill Website <website@vafaill.co.uk>',
      to: [toEmail],
      reply_to: trimmedEmail,
      subject: `New project inquiry from ${trimmedName}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend error:', await resendResponse.text());
    return jsonResponse({ error: 'Failed to send message' }, 502);
  }

  return jsonResponse({ success: true }, 200);
};
