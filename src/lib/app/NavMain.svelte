<script>
  import { page } from '$app/stores'
  $: currentPath = $page.url.pathname
  const cssString = "w-1 h-1 b-all bw-1 b-black-2 br-circle"
</script>

<nav class="flex ai-center">
  <a role="menuitem" href="/port" class="pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/port" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span>Prefab Port</span>
  </a>
  <a role="menuitem" href="/repo" class="pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/repo" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span>CSS Repo</span>
  </a>
  <a role="menuitem" href="/wiki" class="pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/wiki" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span>HTML Wiki</span>
  </a>
  <a role="menuitem" href="/colors" class="pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/colors" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span>Color Grid</span>
  </a>
  <a role="menuitem" href="/sitemap" class="pa-2 grid auto-fill ai-center gap-1 u-0 point" tabindex="0">
    <div class="{currentPath == "/sitemap" ? `bg-black-2 ${cssString}` : cssString}"></div>
    <span>Sitemap</span>
  </a>
</nav>

<style>
  a:hover > div {
    background-color: var(--black-2);
  }
</style>