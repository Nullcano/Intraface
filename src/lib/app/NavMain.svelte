<script>
  import { page } from '$app/stores';  
  let currentPath = $page.url.pathname;
</script>

<ul class="mt-3 pa-2 bg-white-1 br-3">
  <li>
    <a class="block pa-2 black-1 black-5-h t-all br-2 {currentPath === '/' ? 'bg-white-2' : ''}" href="/">Get Started</a>
  </li>
  <li>
    <a class="block pa-2 black-1 black-5-h t-all br-2 {currentPath === '/prefab' ? 'bg-white-2' : ''}" href="/prefab">Prefab Hub</a>
  </li>
  <li>
    <a class="block pa-2 black-1 black-5-h t-all br-2 {currentPath === '/repo' ? 'bg-white-2' : ''}" href="/repo">CSS Repo</a>
  </li>
  <li>
    <a class="block pa-2 black-1 black-5-h t-all br-2 {currentPath === '/wiki' ? 'bg-white-2' : ''}" href="/wiki">HTML Wiki</a>
  </li>
</ul>