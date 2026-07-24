<section id="about">
  <div class="container about-grid">
    <div class="copy">
      <p class="eyebrow">About Vafaill</p>
      <h2>A small studio, built for careful software</h2>
      <p class="body">
        Vafaill Ltd is a private limited company incorporated in England and
        Wales in July 2023, headquartered in London. We work as a compact,
        senior team — which means fewer handoffs, more ownership, and
        software that's actually maintained after launch.
      </p>
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

    <div id="work" class="panel">
      <h3>How we work</h3>
      <ol>
        <li>
          <span class="num">01</span>
          <div>
            <strong>Discovery</strong>
            <p>We start by understanding the problem, the users, and the constraints — before touching a design tool or an editor.</p>
          </div>
        </li>
        <li>
          <span class="num">02</span>
          <div>
            <strong>Design & build</strong>
            <p>Small, iterative cycles. You see working software early and often, not a big reveal at the end.</p>
          </div>
        </li>
        <li>
          <span class="num">03</span>
          <div>
            <strong>Ship & support</strong>
            <p>We deploy, monitor, and stay involved after launch — software is a product, not a one-off delivery.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: start;
  }

  .body {
    margin-top: 18px;
    font-size: 16px;
    color: var(--text);
  }

  .facts {
    margin-top: 40px;
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

  .panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 40px;
    position: sticky;
    top: 100px;
  }

  .panel h3 {
    font-size: 20px;
    margin-bottom: 28px;
  }

  .panel ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .panel li {
    display: flex;
    gap: 18px;
  }

  .num {
    font-family: var(--heading);
    font-weight: 700;
    font-size: 14px;
    color: var(--accent-2);
    flex-shrink: 0;
    padding-top: 2px;
  }

  .panel strong {
    color: var(--text-h);
    font-size: 15px;
    display: block;
    margin-bottom: 6px;
  }

  .panel p {
    font-size: 14px;
    color: var(--text);
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    .panel {
      position: static;
    }
    .facts {
      grid-template-columns: 1fr;
    }
  }
</style>
