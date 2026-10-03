<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="rule bg-white pt-12">
  <div class="wrap grid grid-cols-[1.4fr_1fr_1.4fr] gap-10 pb-9 max-[760px]:grid-cols-1 max-[760px]:gap-8">
    <div class="flex flex-col gap-3">
      <a href="#top" class="flex items-center gap-2.5 font-heading text-[17px] font-bold text-ink">
        <img class="h-auto w-7" src="/logo/mark.png" alt="" aria-hidden="true" />
        <span>Vafaill</span>
      </a>
      <p class="mt-1 max-w-[280px] text-[13px] text-dim">Software, platforms and interactive products, engineered in the UK and Europe.</p>
    </div>

    <div class="flex flex-col gap-3 text-[13px] text-dim">
      <span class="mb-1 text-[12px] font-semibold text-ink">Site</span>
      <a class="hover:text-ink" href="#products">Products</a>
      <a class="hover:text-ink" href="#about">About</a>
      <a class="hover:text-ink" href="#contact">Contact</a>
    </div>

    <div class="flex flex-col gap-3 text-[13px] text-dim">
      <span class="mb-1 text-[12px] font-semibold text-ink">Company</span>
      <a class="hover:text-ink" href="https://find-and-update.company-information.service.gov.uk/company/15031213" target="_blank" rel="noopener noreferrer">
        Companies House filing ↗
      </a>
      <span>Company no. 15031213</span>
      <span>Office 403, Screenworks, 22 Highbury Grove, London, N5 2ER</span>
    </div>
  </div>

  <div class="wrap flex flex-wrap justify-between gap-2 py-4 text-[12px] text-dim max-[760px]:flex-col">
    <span>© {year} VAFAILL LTD. All rights reserved.</span>
    <span>Registered in England &amp; Wales · No. 15031213</span>
  </div>
</footer>
