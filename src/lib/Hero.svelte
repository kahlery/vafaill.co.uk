<script lang="ts">
  type Segment = [text: string, style: string];

  const stats: [key: string, value: string | number][] = [
    ['products_live', 2],
    ['in_development', 1],
    ['years_building', 3],
  ];

  const punct = 'text-dim';
  const lines: Segment[][] = [
    [['{', punct]],
    ...stats.map(([key, value], i): Segment[] => [
      ['  ', ''],
      [`"${key}"`, 'text-sky-300'],
      [': ', punct],
      typeof value === 'number' ? [String(value), 'text-amber-300'] : [`"${value}"`, 'text-emerald-300'],
      [i < stats.length - 1 ? ',' : '', punct],
    ]),
    [['}', punct]],
  ];
  const lengths = lines.map((line) => line.reduce((sum, [text]) => sum + text.length, 0));

  let counts = $state(lines.map(() => 0));
  let active = $state(0);
  let done = $state(false);

  function visible(line: Segment[], count: number): Segment[] {
    const out: Segment[] = [];
    let left = count;
    for (const [text, style] of line) {
      if (left <= 0) break;
      out.push([text.slice(0, left), style]);
      left -= text.length;
    }
    return out;
  }

  $effect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counts = [...lengths];
      active = lines.length - 1;
      done = true;
      return;
    }

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    let t = 500;
    lines.forEach((_, i) => {
      at(t, () => (active = i));
      for (let c = 1; c <= lengths[i]; c++) {
        at((t += 14), () => (counts[i] = c));
      }
      t += 60;
    });
    at(t, () => (done = true));

    return () => timers.forEach(clearTimeout);
  });
</script>

<section id="top" class="section overflow-hidden bg-white pt-30 pb-25 max-[900px]:min-h-[calc(100svh-44px)] max-[760px]:pt-14">
  <div class="wrap">
    <p class="eyebrow">
      <svg class="h-[15px] w-[25px] flex-none rounded-[2px]" width="25" height="15" viewBox="0 0 50 30" role="img" aria-label="United Kingdom flag">
        <clipPath id="uk-flag"><path d="M0 0v30h50V0z" /></clipPath>
        <clipPath id="uk-flag-diag"><path d="M25 15h25v15zv15h-25zh-25v-15zv-15h25z" /></clipPath>
        <g clip-path="url(#uk-flag)">
          <path d="M0 0v30h50V0z" fill="#012169" />
          <path d="M0 0l50 30m0-30L0 30" stroke="#fff" stroke-width="6" />
          <path d="M0 0l50 30m0-30L0 30" clip-path="url(#uk-flag-diag)" stroke="#C8102E" stroke-width="4" />
          <path d="M25 0v30M0 15h50" stroke="#fff" stroke-width="10" />
          <path d="M25 0v30M0 15h50" stroke="#C8102E" stroke-width="6" />
        </g>
      </svg>
      Software studio · UK &amp; Europe
    </p>
    <h1 class="max-w-[820px] text-[48px] max-[760px]:text-[32px]">
      We build software, platforms &amp; interactive products that people enjoy using.
    </h1>
    <div class="mt-8 grid grid-cols-[1.1fr_0.9fr] items-start gap-10 max-[760px]:grid-cols-1">
      <div>
        <p class="text-[15px] text-body max-[760px]:text-[13px]">
          VAFAILL LTD is a UK-registered software house designing and engineering
          web portals, business systems, and interactive applications — from first
          sketch through to production.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="btn btn-primary">Get in touch</a>
          <a href="#products" class="btn btn-ghost">See what we do</a>
        </div>
      </div>

      <div class="rounded-widget bg-ink p-6 font-mono text-[12px] leading-[1.9] text-bg/80">
        <dl class="sr-only">
          {#each stats as [key, value]}
            <dt>{key.replace('_', ' ')}</dt>
            <dd>{value}</dd>
          {/each}
        </dl>
        <div aria-hidden="true">
          <div class="mb-3 flex gap-1.5">
            <span class="size-2.5 rounded-full bg-[#ff5f57]"></span>
            <span class="size-2.5 rounded-full bg-[#febc2e]"></span>
            <span class="size-2.5 rounded-full bg-[#28c840]"></span>
          </div>
          {#each lines as line, i}
            <p class="min-h-[1.9em] whitespace-pre">{#each visible(line, counts[i]) as [text, style]}<span class={style}>{text}</span>{/each}{#if active === i}<span class="ml-px inline-block h-[1.15em] w-[0.6em] translate-y-[0.2em] animate-blink bg-bg/80"></span>{/if}</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
