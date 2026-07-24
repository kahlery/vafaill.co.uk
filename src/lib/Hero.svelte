<section id="top" class="hero">
  <div class="glow" aria-hidden="true"></div>
  <div class="container hero-inner">
    <p class="eyebrow">Software studio · London, UK</p>
    <h1>
      We build <span class="gradient-text">software, platforms &amp; interactive products</span> that people enjoy using.
    </h1>
    <p class="lead">
      Vafaill Ltd is a UK-registered software house designing and engineering
      web portals, business systems, and interactive applications — from first
      sketch through to production.
    </p>
    <div class="hero-actions">
      <a href="#contact" class="btn btn-primary">Start a project</a>
      <a href="#services" class="btn btn-ghost">See what we do</a>
    </div>

    <dl class="stats">
      <div>
        <dt>Est.</dt>
        <dd>2023</dd>
      </div>
      <div>
        <dt>Based in</dt>
        <dd>London, UK</dd>
      </div>
      <div>
        <dt>Company no.</dt>
        <dd>15031213</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>Active</dd>
      </div>
    </dl>
  </div>
</section>

<style>
  .hero {
    padding-top: 120px;
    padding-bottom: 100px;
    overflow: hidden;
  }

  .glow {
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(600px 400px at 20% 0%, rgba(32, 31, 28, 0.06), transparent 60%),
      radial-gradient(500px 380px at 85% 20%, rgba(32, 31, 28, 0.05), transparent 60%);
    pointer-events: none;
  }

  .hero-inner {
    max-width: 880px;
  }

  h1 {
    font-size: 60px;
    max-width: 820px;
  }

  .lead {
    margin-top: 24px;
    font-size: 19px;
    color: var(--text);
    max-width: 600px;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 40px;
    margin: 72px 0 0;
    padding-top: 32px;
    border-top: 1px solid var(--border);
    max-width: 640px;
  }

  .stats dt {
    font-size: 13px;
    color: var(--text-dim);
    margin-bottom: 6px;
  }

  .stats dd {
    margin: 0;
    font-family: var(--heading);
    font-weight: 600;
    font-size: 20px;
    color: var(--text-h);
  }

  @media (max-width: 760px) {
    .hero {
      padding-top: 56px;
    }
    h1 {
      font-size: 38px;
    }
    .lead {
      font-size: 17px;
    }
    .stats {
      grid-template-columns: repeat(2, auto);
      gap: 28px 40px;
    }
  }
</style>
