<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container footer-inner">
    <div class="col brand">
      <a href="#top" class="logo">
        <img class="mark" src="/logo/mark.png" alt="" aria-hidden="true" />
        <span class="wordmark">Vafaill</span>
      </a>
      <p>Software, platforms and interactive products, engineered from London.</p>
    </div>

    <div class="col">
      <span class="heading">Site</span>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#work">Approach</a>
      <a href="#contact">Contact</a>
    </div>

    <div class="col">
      <span class="heading">Company</span>
      <a href="https://find-and-update.company-information.service.gov.uk/company/15031213" target="_blank" rel="noopener noreferrer">
        Companies House filing ↗
      </a>
      <span class="static">Company no. 15031213</span>
      <span class="static">Office 403, Screenworks, 22 Highbury Grove, London, N5 2ER</span>
    </div>
  </div>

  <div class="container bottom">
    <span>© {year} Vafaill Ltd. All rights reserved.</span>
    <span>Registered in England &amp; Wales · No. 15031213</span>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    background: var(--bg-alt);
    padding-top: 72px;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.4fr;
    gap: 40px;
    padding-bottom: 56px;
  }

  .brand p {
    margin-top: 16px;
    font-size: 14px;
    color: var(--text-dim);
    max-width: 280px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--heading);
    font-weight: 700;
    font-size: 18px;
    color: var(--text-h);
  }

  .mark {
    width: 28px;
    height: auto;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .heading {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-h);
    margin-bottom: 4px;
  }

  .col a,
  .col .static {
    font-size: 14px;
    color: var(--text-dim);
  }

  .col a:hover {
    color: var(--accent-2);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    padding: 24px 0;
    border-top: 1px solid var(--border);
    font-size: 13px;
    color: var(--text-dim);
  }

  @media (max-width: 760px) {
    .footer-inner {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .bottom {
      flex-direction: column;
    }
  }
</style>
