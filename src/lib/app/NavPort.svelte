<script>
  import { port } from '$lib/port'
  import { page } from '$app/stores'
  $: currentPath = $page.url.pathname
</script>

<nav class="stack gap-2">
  {#each port.categories as c}
    <ul class="stack gap-1">
      <li class="sticky top-0">
        <a class="block px-2 py-1 bg-light-2 black-3 black-1-h t-all br-2 u-0 {currentPath === c.slug ? 'bg-light-2' : ''}" href={c.slug}>{c.name}</a>
      </li>
      {#each c.items as i}
        <li>
          <a class="block px-2 py-1 black-3 black-1-h t-all br-2 u-0 {currentPath === i.slug ? 'bg-light-2' : ''}" href={i.slug}>{i.name}</a>
        </li>
      {/each}
    </ul>
  {/each}
</nav>