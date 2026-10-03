<script lang="ts">
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    status = 'sending';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      status = 'sent';
    } catch {
      status = 'error';
    }
  }
</script>

<section id="contact" class="section rule min-h-0 bg-white pb-16">
  <div class="wrap grid grid-cols-[0.9fr_1.1fr] gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
    <div>
      <p class="eyebrow">Get in touch</p>
      <h2 class="text-[32px] max-[600px]:text-[26px]">Say hello</h2>
      <p class="mt-[18px] max-w-[460px] text-[13px] text-body">
        Questions about our products, press or partnerships? Send us a
        message and we'll get back to you.
      </p>

      <div class="mt-7 flex flex-col gap-1 text-[13px]">
        <span class="font-mono text-[11px] uppercase tracking-[0.04em] text-dim">Email</span>
        <a class="font-medium text-ink underline decoration-dim underline-offset-3" href="mailto:berkay.aslan@vafaill.co.uk">berkay.aslan@vafaill.co.uk</a>
      </div>
    </div>

    <form class="flex flex-col gap-5 rounded-[20px] bg-alt p-10" onsubmit={submit}>
      {#if status === 'sent'}
        <div class="py-10 text-center">
          <div class="mx-auto mb-5 flex size-[52px] items-center justify-center rounded-full bg-primary text-[22px] font-bold text-bg" aria-hidden="true">✓</div>
          <h3 class="mb-2 text-[20px]">Message received</h3>
          <p class="text-[13px] text-body">Thanks — we'll be in touch shortly.</p>
        </div>
      {:else}
        <div class="flex flex-col gap-2">
          <label class="text-[12px] font-medium text-ink" for="name">Name</label>
          <input class="field" id="name" type="text" bind:value={name} placeholder="Jane Doe" required />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[12px] font-medium text-ink" for="email">Email</label>
          <input class="field" id="email" type="email" bind:value={email} placeholder="jane@company.com" required />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-[12px] font-medium text-ink" for="message">Message</label>
          <textarea class="field resize-y" id="message" rows="5" bind:value={message} placeholder="How can we help?" required></textarea>
        </div>
        {#if status === 'error'}
          <p class="text-[13px] text-danger">
            Something went wrong sending your message. Please try again, or email us directly at
            <a class="underline" href="mailto:berkay.aslan@vafaill.co.uk">berkay.aslan@vafaill.co.uk</a>.
          </p>
        {/if}
        <button type="submit" class="btn btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      {/if}
    </form>
  </div>
</section>
