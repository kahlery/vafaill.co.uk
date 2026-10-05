<script lang="ts">
  const tech = [
    { name: 'Claude', icon: 'claude' },
    { name: 'Gemini', icon: 'googlegemini' },
    { name: 'Hugging Face', icon: 'huggingface' },
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'Ollama', icon: 'ollama' },
    { name: 'NVIDIA', icon: 'nvidia' },
    { name: 'Cursor', icon: 'cursor' },
    { name: 'Unity', icon: 'unity' },
    { name: 'Blender', icon: 'blender' },
    { name: 'AWS', icon: 'aws' },
    { name: 'Svelte', icon: 'svelte' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Cloudflare', icon: 'cloudflare' },
  ];
</script>

<div role="region" aria-label="Technologies we build with">
  <div class="overflow-hidden bg-ink py-4">
    <div class="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
      {#each [0, 1, 2, 3] as copy}
        <ul class="flex shrink-0" aria-hidden={copy > 0}>
          {#each tech as { name, icon }}
            <li class="flex items-center gap-2.5 px-8 font-mono text-[12px] uppercase tracking-[0.06em] text-bg/80">
              <img class="size-4" src="/tech/{icon}.svg" alt="" width="16" height="16" />
              {name}
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </div>
</div>
