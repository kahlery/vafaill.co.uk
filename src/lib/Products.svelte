<script lang="ts">
  const products = [
    {
      name: 'Shiftra',
      logo: '/logo/products/shiftra.png',
      tagline: 'Workforce management for shift-based teams.',
      links: [{ label: 'Visit', href: 'https://shiftra.one' }],
    },
    {
      name: 'Devflare',
      logo: '/logo/products/devflare.svg',
      tagline: 'The game backend, ready on day 0: live API, database, analytics and dashboards.',
      links: [{ label: 'Visit', href: 'https://devflare.dev' }],
    },
    {
      name: 'Realm Hero: Kingdom Survival',
      tagline: 'A survival strategy game, currently in development.',
      // TODO: replace with the real store URLs
      links: [
        { label: 'iOS', href: '#' },
        { label: 'Android', href: '#' },
      ],
    },
  ];
</script>

<section id="products" class="section bg-white">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">What we've built</p>
      <h2>Products from the studio</h2>
      <p>
        We build, publish and run our own products end to end.
      </p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-separate border-spacing-y-2 text-left">
        <thead>
          <tr class="text-[11px] font-semibold tracking-[0.06em] text-dim uppercase">
            <th class="px-6 py-3.5 font-semibold">Product</th>
            <th class="px-6 py-3.5 text-right font-semibold">Link</th>
          </tr>
        </thead>
        <tbody>
          {#each products as product}
            <tr class="group/row align-middle [&>td]:bg-alt [&>td]:transition-colors [&>td]:duration-200 hover:[&>td]:bg-hover [&>td:first-child]:rounded-l-widget [&>td:last-child]:rounded-r-widget">
              <td class="px-6 py-5">
                <div class="flex items-center gap-4">
                  {#if product.logo}
                    <img class="size-10 shrink-0 rounded-lg object-cover" src={product.logo} alt="" width="40" height="40" />
                  {:else}
                    <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-soft text-dim">
                      <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M6 12h4m-2-2v4M15 11h.01M18 13h.01M8 7h8a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1l-2 2-2-2H8a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z" />
                      </svg>
                    </div>
                  {/if}
                  <div>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-heading text-[15px] font-semibold text-ink">{product.name}</span>
                    </div>
                    <p class="mt-0.5 text-[13px] text-ink">{product.tagline}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-2 text-right">
                <div class="-mr-3 flex items-center justify-end gap-1">
                  {#each product.links as link}
                    <a
                      class="group inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[13px] font-semibold whitespace-nowrap text-ink"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <svg class="size-4 transition-transform duration-200 group-hover:translate-x-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  {/each}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>
