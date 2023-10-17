<script>
  import { page } from '$app/stores'
  $: currentPath = $page.url.pathname
  const cssString = "w-2 h-2 b-all bw-1 b-black-4 br-2"
</script>

<nav class="fixed ml-3 top-50 left-0 y-center flex flex-col ai-center">
  <a role="menuitem" href="/plugins" class="relative pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/plugins" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span class="absolute top-50 y-center left-100 none">Plugins</span>
  </a>
  <a role="menuitem" href="/theming" class="relative pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/theming" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span class="absolute top-50 y-center left-100 none">Theming</span>
  </a>
  <a role="menuitem" href="/semantics" class="relative pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/semantics" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span class="absolute top-50 y-center left-100 none">Semantics</span>
  </a>
  <a role="menuitem" href="/skins" class="relative pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/skins" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span class="absolute top-50 y-center left-100 none">Skins</span>
  </a>
</nav>

<style>
  a:hover > div {
    background-color: var(--black-2);
  }
  a:hover > span {
    display: block;
  }
</style>