<script>
  import { page } from '$app/stores';  
  let currentPath = $page.url.pathname;
</script>

<div class="mt-3 pa-2 bg-light-1 br-3">
  <ul>
    <li>
      <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/' ? 'bg-light-2' : ''}" href="/">Get Started</a>
    </li>
    <li>
      <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/port' ? 'bg-light-2' : ''}" href="/port">Prefab Port</a>
    </li>
    <li>
      <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/repo' ? 'bg-light-2' : ''}" href="/repo">CSS Repo</a>
    </li>
    <li>
      <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/wiki' ? 'bg-light-2' : ''}" href="/wiki">HTML Wiki</a>
    </li>
    <li>
      <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/colors' ? 'bg-light-2' : ''}" href="/colors">Color Grid</a>
    </li>
  </ul>
</div>
