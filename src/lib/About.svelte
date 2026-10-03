<script lang="ts">
  // Add a photo per person in public/team/ and set `photo`, e.g. '/team/berkay.jpg'.
  // `role` is the profession shown under the name; `linkedin` is the full profile URL.
  const team: { name: string; role?: string; linkedin?: string; photo?: string }[] = [
    { name: 'Berkay Aslan', role: 'Software Engineer', photo: '/team/berkay.jpg', linkedin: 'https://www.linkedin.com/in/berkay-aslan-dev/' },
    { name: 'Surel Hürriyetoğlu', role: 'Information Technology Engineer', photo: '/team/surel.jpg', linkedin: 'https://www.linkedin.com/in/surel-hurriyetoglu-56358439/' },
  ];

  const initials = (name: string) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('');
</script>

<section id="about" class="section rule bg-white">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">About Vafaill</p>
      <h2>A small studio, built for careful software</h2>
      <p>
        VAFAILL LTD is a private limited company incorporated in England and
        Wales in July 2023, headquartered in London. We work as a compact,
        senior team — which means fewer handoffs, more ownership, and
        software that's actually maintained after launch.
      </p>
    </div>
    <p class="-mt-8 mb-10 max-w-[640px] text-[13px] text-body">
      Our registered activities cover software publishing, interactive
      and entertainment software, business and domestic applications, and
      web portal development — giving us range across product types
      without losing depth in any of them.
    </p>

    <ul class="mb-12 grid grid-cols-4 gap-5 max-[760px]:grid-cols-2">
      {#each team as person}
        <li>
          {#if person.photo}
            <img class="aspect-square w-full rounded-2xl object-cover" src={person.photo} alt={person.name} />
          {:else}
            <div class="flex aspect-square w-full rounded-2xl items-center justify-center bg-soft font-mono text-[28px] text-dim" aria-hidden="true">
              {initials(person.name)}
            </div>
          {/if}
          <p class="mt-3 text-[13px] font-semibold text-ink">{person.name}</p>
          {#if person.role}<p class="text-[12px] text-body">{person.role}</p>{/if}
          {#if person.linkedin}
            <a class="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.04em] text-dim underline underline-offset-3 hover:text-ink" href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="grid grid-cols-2 gap-6 pt-8 max-[600px]:grid-cols-1">
      {#each [
        ['Registered office', 'Office 403, Screenworks<br />22 Highbury Grove, London N5 2ER'],
        ['Company number', '15031213'],
        ['Incorporated', '26 July 2023'],
        ['Jurisdiction', 'England &amp; Wales'],
      ] as [label, value]}
        <div class="flex flex-col gap-1.5">
          <span class="font-mono text-[11px] uppercase tracking-[0.04em] text-dim">{label}</span>
          <span class="text-[13px] leading-[1.4] font-medium text-ink">{@html value}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
