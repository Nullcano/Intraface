<script>
  import { data } from '$lib/index'
  const section = data.find(i => i.section === 'Components')
</script>

{#each section.categories as c}
  <ul class="mt-3 b-all bw-1 b-white-2">
    <h5 class="sticky top-0 px-2 py-1 bg-white-2">{c.name}</h5>
    {#each c.items as i}
      <li>
        <a class="block px-2 py-1" href="/components/{i.slug}">
          {i.name}
        </a>
      </li>
    {/each}
  </ul>
{/each}