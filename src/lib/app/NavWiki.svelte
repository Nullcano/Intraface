<script>
  import { data } from '$lib/index'
  import { page } from '$app/stores';  
  $: currentPath = $page.url.pathname;
  const section = data.find(i => i.section === 'Wiki')
</script>

{#each section.categories as c}
  <div class="mt-3 pt-2 bg-light-1 br-3">
    <h5 class="sticky top-0 mx-2 pa-2 bg-light-2 br-2">{c.name}</h5>
    <ul class="pa-2">
      {#each c.items as i}
        <li>
          <a class="block pa-2 black-3 black-1-h t-all br-2 u-0 {currentPath === '/wiki/' + i.name ? 'bg-light-2' : ''}" href="/wiki/{i.name}">
            {i.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}