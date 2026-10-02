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
      desc: 'Software for businesses and individuals — productivity tools, automation and everyday applications, published as our own products.',
    },
    {
      icon: 'M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12a9 9 0 0 0 18 0 9 9 0 0 0-18 0Z',
      title: 'Web portals',
      desc: 'Robust, scalable web portals and platforms that bring services, content and users together in one place.',
    },
  ];
</script>

<section id="services" class="section bg-white">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">What we do</p>
      <h2>Focused engineering, four disciplines deep</h2>
      <p>
        Vafaill's registered activities span the full life cycle of a
        digital product — we design, build and publish software across web,
        business and interactive domains.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
      {#each services as s}
        <div class="rounded-2xl bg-alt p-8 transition-transform duration-200 hover:-translate-y-0.5">
          <div class="mb-5 flex size-[46px] items-center justify-center rounded-xl bg-soft text-ink">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <path d={s.icon} />
            </svg>
          </div>
          <h3 class="mb-2.5 text-[17px]">{s.title}</h3>
          <p class="text-[13px] text-body">{s.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
