<script>
  import { data } from '$lib/index'
</script>

<aside if-sidebar="fixed-wide">
  <h1>Intraface</h1>
  <h3>Scaffolding</h3>
  <ul>
    {#each data as i}
      {#if i.section == 'Scaffolding'}
        <li>
          <a href="{i.slug}">
            {@html i.icon}
            {i.category}
          </a>
        </li>
      {/if}
    {/each}
  </ul>
  <h3>Materials</h3>
  <ul>
    {#each data as i}
      {#if i.section == 'Materials'}
        <li>
          <a href="{i.slug}">
            {@html i.icon}
            {i.category}
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</aside>

<style>
  aside {
    padding: 1rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
  a {
    display: block;
    padding: .25rem;
    color: rgba(255,255,255,.75);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a:hover {
    color: rgba(255,255,255,1);
  }
</style>