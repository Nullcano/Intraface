<script>
  import { page } from '$app/stores'
  import { base } from '$lib/base'
  
  $: currentPath = $page.url.pathname
</script>

<ul class="stack gap-1">
  {#each base.docs as i}
    <li>
      <a class="block px-2 py-1 black-3 black-1-h t-all br-2 u-0 {currentPath === i.slug ? 'bg-light-2' : ''}" href={i.slug}>
        {i.name}
      </a>
    </li>
  {/each}
</ul>