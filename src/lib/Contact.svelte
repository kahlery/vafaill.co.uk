<script lang="ts">
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let sent = $state(false);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    sent = true;
  }
</script>

<section id="contact">
  <div class="container contact-grid">
    <div class="copy">
      <p class="eyebrow">Get in touch</p>
      <h2>Tell us about your project</h2>
      <p class="lead">
        Whether it's a web portal, a business tool, or an interactive
        product, we'd like to hear what you're building. Send a few details
        and we'll get back to you.
      </p>

      <div class="detail">
        <span class="label">Email</span>
        <a href="mailto:hello@vafaill.co.uk">hello@vafaill.co.uk</a>
      </div>
      <div class="detail">
        <span class="label">Registered office</span>
        <span>Office 403, Screenworks, 22 Highbury Grove, London, N5 2ER</span>
      </div>
      <div class="detail">
        <span class="label">Company number</span>
        <span>15031213</span>
      </div>
    </div>

    <form class="panel" onsubmit={submit}>
      {#if sent}
        <div class="success">
          <div class="check" aria-hidden="true">✓</div>
          <h3>Message received</h3>
          <p>Thanks — we'll be in touch shortly.</p>
        </div>
      {:else}
        <div class="field">
          <label for="name">Name</label>
          <input id="name" type="text" bind:value={name} placeholder="Jane Doe" required />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" bind:value={email} placeholder="jane@company.com" required />
        </div>
        <div class="field">
          <label for="message">Project details</label>
          <textarea id="message" rows="5" bind:value={message} placeholder="Tell us a little about what you're looking to build..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary submit">Send message</button>
      {/if}
    </form>
  </div>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 64px;
  }

  .lead {
    margin-top: 18px;
    font-size: 17px;
    color: var(--text);
    max-width: 460px;
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 28px;
    font-size: 15px;
  }

  .detail .label {
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .detail a {
    color: var(--text-h);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: var(--border-hover);
    text-underline-offset: 3px;
  }

  .detail span:not(.label) {
    color: var(--text-h);
  }

  .panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-h);
  }

  input,
  textarea {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 14px;
    font-family: inherit;
    font-size: 15px;
    color: var(--text-h);
    resize: vertical;
    transition: border-color 0.2s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent);
  }

  .submit {
    margin-top: 4px;
    width: 100%;
  }

  .success {
    text-align: center;
    padding: 40px 0;
  }

  .check {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--gradient);
    color: #fdfdfc;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }

  .success h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .success p {
    color: var(--text);
    font-size: 15px;
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
</style>
