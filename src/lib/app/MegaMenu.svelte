<script>
  let menuIsOpen = false

  function toggleMegaMenu() {
    menuIsOpen = !menuIsOpen
  }
</script>

<button on:click={toggleMegaMenu} class="w-2 h-2">
  <div class="w-1 b-bottom bw-2 b-black-1"></div>
  <div class="mt-2 w-2 b-bottom bw-2 b-black-1"></div>
</button>

{#if menuIsOpen}
  <div role="tab" class="fixed top-0 left-0 w-fill vh-8 point z-2" on:click={toggleMegaMenu} on:keydown={toggleMegaMenu} tabindex="0">
    <div class="ma-3 pa-4 vh-5 bg-white-1 b-all bw-1 b-black-1 br-3">
      <h2 class="mb-3">Explore Intraface</h2>
      <div class="flex">
        <div class="grid col-3 gap-3">
          <a href="/" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Intraface</span>
          </a>
          <a href="/plugins" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Plugins</span>
          </a>
          <a href="/theming" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Theming</span>
          </a>
          <a href="/semantics" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Semantics</span>
          </a>
          <a href="/skins" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Skins</span>
          </a>
          <a href="/about" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">About</span>
          </a>
          <a href="/sitemap" class="pa-3 br-3 bg-black-5 flex flex-col ai-center gap-1 u-0">
            <div class="w-4 h-4 br-3 bg-black-5"></div>
            <span class="fs-3">Sitemap</span>
          </a>
        </div>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
{/if}