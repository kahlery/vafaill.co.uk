<script lang="ts">
  let menuOpen = $state(false);
  function closeMenu() {
    menuOpen = false;
  }

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];
</script>

<header class="sticky top-0 z-100 bg-ink">
  <div class="wrap flex h-14 items-center justify-between">
    <a href="#top" class="flex items-center gap-2.5 font-heading text-[17px] font-bold text-bg" onclick={closeMenu}>
      <img class="h-auto w-6 brightness-0 invert" src="/logo/mark.png" alt="" aria-hidden="true" />
      <span>Vafaill</span>
    </a>

    <nav class="flex gap-9 max-[860px]:hidden" aria-label="Primary">
      {#each links as link}
        <a href={link.href} class="text-[13px] font-medium lowercase text-bg/70 transition-colors duration-200 hover:text-bg">{link.label}</a>
      {/each}
    </nav>

    <div class="hidden items-center max-[860px]:flex">
      <button
        class="hidden size-10 cursor-pointer items-center justify-center rounded-lg bg-white/10 max-[860px]:flex"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <span
          class="relative block h-0.5 w-[18px] transition before:absolute before:left-0 before:block before:h-0.5 before:w-[18px] before:bg-bg before:transition before:content-[''] after:absolute after:left-0 after:block after:h-0.5 after:w-[18px] after:bg-bg after:transition after:content-[''] {menuOpen
            ? 'bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45'
            : 'bg-bg before:-top-1.5 after:top-1.5'}"
        ></span>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="bg-ink">
      <nav class="flex flex-col gap-1 px-6 pt-2 pb-7" aria-label="Mobile">
        {#each links as link}
          <a href={link.href} class="px-1 py-3.5 text-[13px] font-medium lowercase text-bg/70" onclick={closeMenu}>{link.label}</a>
        {/each}
      </nav>
    </div>
  {/if}
</header>
