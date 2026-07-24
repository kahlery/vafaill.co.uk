<script lang="ts">
  let menuOpen = $state(false);
  let scrolled = $state(false);

  function onScroll() {
    scrolled = window.scrollY > 8;
  }

  function closeMenu() {
    menuOpen = false;
  }

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Approach' },
    { href: '#contact', label: 'Contact' },
  ];
</script>

<svelte:window onscroll={onScroll} />

<header class:scrolled>
  <div class="container bar">
    <a href="#top" class="logo" onclick={closeMenu}>
      <img class="mark" src="/logo/mark.png" alt="" aria-hidden="true" />
      <span class="wordmark">Vafaill</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary">
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <div class="actions">
      <a href="#contact" class="btn btn-primary desktop-only">Start a project</a>
      <button
        class="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <span class:open={menuOpen}></span>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="mobile-nav">
      <nav aria-label="Mobile">
        {#each links as link}
          <a href={link.href} onclick={closeMenu}>{link.label}</a>
        {/each}
        <a href="#contact" class="btn btn-primary" onclick={closeMenu}>Start a project</a>
      </nav>
    </div>
  {/if}
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  header.scrolled {
    background: rgba(253, 253, 252, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--heading);
    font-weight: 700;
    font-size: 19px;
    color: var(--text-h);
  }

  .mark {
    width: 32px;
    height: auto;
  }

  .desktop-nav {
    display: flex;
    gap: 36px;
  }

  .desktop-nav a {
    font-size: 15px;
    font-weight: 500;
    color: var(--text);
    transition: color 0.2s ease;
  }

  .desktop-nav a:hover {
    color: var(--text-h);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .menu-toggle {
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface);
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .menu-toggle span,
  .menu-toggle span::before,
  .menu-toggle span::after {
    content: '';
    display: block;
    width: 18px;
    height: 2px;
    background: var(--text-h);
    position: relative;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .menu-toggle span::before {
    position: absolute;
    top: -6px;
  }

  .menu-toggle span::after {
    position: absolute;
    top: 6px;
  }

  .menu-toggle span.open {
    background: transparent;
  }

  .menu-toggle span.open::before {
    top: 0;
    transform: rotate(45deg);
  }

  .menu-toggle span.open::after {
    top: 0;
    transform: rotate(-45deg);
  }

  .mobile-nav {
    background: rgba(253, 253, 252, 0.98);
    border-bottom: 1px solid var(--border);
  }

  .mobile-nav nav {
    display: flex;
    flex-direction: column;
    padding: 8px 24px 28px;
    gap: 4px;
  }

  .mobile-nav a {
    padding: 14px 4px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid var(--border);
    color: var(--text);
  }

  .mobile-nav .btn {
    margin-top: 16px;
    border-bottom: none;
    color: #fdfdfc;
  }

  @media (max-width: 860px) {
    .desktop-nav,
    .desktop-only {
      display: none;
    }
    .menu-toggle {
      display: flex;
    }
  }
</style>
