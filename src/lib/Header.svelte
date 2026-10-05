<script lang="ts">
  let menuOpen = $state(false);
  function closeMenu() {
    menuOpen = false;
  }

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];
</script>

<header class="sticky top-0 z-100 bg-black">
  <div class="wrap flex h-11 items-center justify-between">
    <a href="#top" class="flex items-center gap-2.5 font-heading text-[17px] font-bold text-bg" onclick={closeMenu}>
      <img class="h-auto w-6 brightness-0 invert" src="/logo/mark.png" alt="" aria-hidden="true" />
      <span>Vafaill</span>
    </a>

    <nav class="flex gap-9 max-[860px]:hidden" aria-label="Primary">
      {#each links as link}
        <a href={link.href} class="text-[13px] font-medium text-bg/70 transition-colors duration-200 hover:text-bg">{link.label}</a>
      {/each}
    </nav>

    <div class="hidden items-center max-[860px]:flex">
      <button
        class="hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white/10 max-[860px]:flex"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <svg class="size-[18px] text-bg transition-transform duration-200 {menuOpen ? 'rotate-90' : ''}" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
          <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" />
          <rect x="10.5" y="1" width="6.5" height="6.5" rx="1.5" />
          <rect x="1" y="10.5" width="6.5" height="6.5" rx="1.5" />
          <rect x="10.5" y="10.5" width="6.5" height="6.5" rx="1.5" />
        </svg>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="absolute top-full right-4 mt-2 w-56 overflow-hidden rounded-widget border border-white/10 bg-black shadow-xl">
      <nav class="flex flex-col p-2" aria-label="Mobile">
        {#each links as link}
          <a href={link.href} class="rounded-full px-4 py-3 text-[13px] font-medium text-bg/70" onclick={closeMenu}>{link.label}</a>
        {/each}
      </nav>
    </div>
  {/if}
</header>
