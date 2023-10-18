<script>
  import { repo } from '$lib/repo'
  import { page } from '$app/stores';  
  $: currentPath = $page.url.pathname;
</script>

<div class="stack gap-2">
  <ul>
    <li>
      <a class="block px-2 py-1 black-3 black-1-h t-all br-2 u-0 {currentPath === '/repo' ? "bg-light-2" : ""}" href="/repo">Overview</a>
    </li>
  </ul>
  {#each repo.categories as c}
    <div class="w-fill h-0 b-bottom bw-1 b-light-5"></div>
    <ul>
      <li class="sticky top-0">
        <a class="block px-2 py-1 bg-light-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/port/' + c.slug ? 'bg-light-2' : ''}" href="/port/{c.slug}">{c.name}</a>
      </li>
      {#each c.items as i}
        <li>
          <a class="block px-2 py-1 black-3 black-1-h t-all br-2 u-0 {currentPath === '/repo/' + i.slug ? 'bg-light-2' : ''}" href="/repo/{i.slug}">
            {i.name}
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</div>