<script lang="ts">
  const services = [
    {
      icon: 'M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-6 3 3-3 3m5 0h4',
      title: 'Software publishing',
      desc: 'End-to-end product development — from concept and architecture to shipping and maintaining polished software products.',
    },
    {
      icon: 'M9 18V6l10 6-10 6Z M5 4v16',
      title: 'Interactive & entertainment software',
      desc: 'Design and development of interactive, leisure and entertainment applications built for engagement and performance.',
    },
    {
      icon: 'M4 4h16v4H4zM4 12h10v8H4zM17 12h3v8h-3z',
      title: 'Business & domestic software',
      desc: 'Custom software for businesses and individuals — internal tools, automation, and applications tailored to real workflows.',
    },
    {
      icon: 'M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12a9 9 0 0 0 18 0 9 9 0 0 0-18 0Z',
      title: 'Web portals',
      desc: 'Robust, scalable web portals and platforms that bring services, content and users together in one place.',
    },
  ];
</script>

<section id="services">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">What we do</p>
      <h2>Focused engineering, four disciplines deep</h2>
      <p>
        Vafaill's registered activities span the full life cycle of a
        digital product — we design, build and publish software across web,
        business and interactive domains.
      </p>
    </div>

    <div class="grid">
      {#each services as s}
        <div class="card">
          <div class="icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d={s.icon} />
            </svg>
          </div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background: var(--bg-alt);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card {
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

  .icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: var(--accent-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--accent-2);
  }

  .icon-wrap svg {
    width: 24px;
    height: 24px;
  }

  h3 {
    font-size: 19px;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 15px;
    color: var(--text);
  }

  @media (max-width: 760px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
