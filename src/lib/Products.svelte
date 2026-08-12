<section id="products">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we've built</p>
      <h2>Products from the studio</h2>
      <p>
        Alongside client work, we build and run our own products end to end —
        starting with Shiftra.
      </p>
    </div>

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
  </div>
</section>

<style>
  section {
    background: var(--bg);
  }

  .card {
    display: flex;
    align-items: center;
    gap: 28px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .card:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
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

  .body {
    flex: 1;
    min-width: 0;
  }

  .body h3 {
    font-size: 19px;
    margin-bottom: 6px;
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

  .card:hover .link svg {
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
  }
</style>
