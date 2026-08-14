<section id="products">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we've built</p>
      <h2>Products from the studio</h2>
      <p>
        Alongside client work, we build and run our own products end to end.
      </p>
    </div>

    <div class="list">
      <a class="card" href="https://shiftra.one" target="_blank" rel="noopener noreferrer">
        <div class="mark">
          <img src="/logo/products/shiftra.png" alt="" width="56" height="56" />
        </div>
        <div class="body">
          <h3>Shiftra</h3>
          <p class="tagline">Workforce management for shift-based teams.</p>
          <p class="desc">
            Schedule shifts, track attendance, and manage your team from one
            place.
          </p>
        </div>
        <span class="link">
          Visit Shiftra
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <div class="card muted">
        <div class="mark placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 12h4m-2-2v4M15 11h.01M18 13h.01M8 7h8a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1l-2 2-2-2H8a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z" />
          </svg>
        </div>
        <div class="body">
          <div class="title-row">
            <h3>Realm Hero: Kingdom Survival</h3>
            <span class="badge">Coming soon</span>
          </div>
          <p class="tagline">A survival strategy game, currently in development.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: var(--bg);
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 28px;
    min-height: 142px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  a.card:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }

  .card.muted {
    background: var(--bg-alt);
  }

  .mark {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    overflow: hidden;
  }

  .mark img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mark.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-soft);
    color: var(--text-dim);
  }

  .mark.placeholder svg {
    width: 26px;
    height: 26px;
  }

  .body {
    flex: 1;
    min-width: 0;
  }

  .body h3 {
    font-size: 19px;
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
  }

  .badge {
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text-dim);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 3px 10px;
  }

  .tagline {
    font-size: 15px;
    color: var(--text-h);
    font-weight: 500;
    margin-bottom: 6px;
  }

  .desc {
    font-size: 15px;
    color: var(--text);
  }

  .link {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 15px;
    color: var(--text-h);
  }

  .link svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }

  a.card:hover .link svg {
    transform: translateX(3px);
  }

  @media (max-width: 640px) {
    .card {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .link {
      align-self: flex-start;
    }

    .title-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }
  }
</style>
