<section id="about">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">About Vafaill</p>
      <h2>A small studio, built for careful software</h2>
      <p>
        Vafaill Ltd is a private limited company incorporated in England and
        Wales in July 2023, headquartered in London. We work as a compact,
        senior team — which means fewer handoffs, more ownership, and
        software that's actually maintained after launch.
      </p>
    </div>
    <p class="body">
      Our registered activities cover software publishing, interactive
      and entertainment software, business and domestic applications, and
      web portal development — giving us range across product types
      without losing depth in any of them.
    </p>

    <div class="facts">
      <div class="fact">
        <span class="fact-label">Registered office</span>
        <span class="fact-value">Office 403, Screenworks<br />22 Highbury Grove, London N5 2ER</span>
      </div>
      <div class="fact">
        <span class="fact-label">Company number</span>
        <span class="fact-value">15031213</span>
      </div>
      <div class="fact">
        <span class="fact-label">Incorporated</span>
        <span class="fact-value">26 July 2023</span>
      </div>
      <div class="fact">
        <span class="fact-label">Jurisdiction</span>
        <span class="fact-value">England &amp; Wales</span>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: var(--bg-alt);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .body {
    max-width: 640px;
    margin-top: -32px;
    margin-bottom: 40px;
    font-size: 16px;
    color: var(--text);
  }

  .facts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
  }

  .fact {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .fact-label {
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .fact-value {
    font-size: 15px;
    color: var(--text-h);
    font-weight: 500;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .facts {
      grid-template-columns: 1fr;
    }
  }
</style>
