<script>
  import { data } from '$lib/index'
  const section = data.find(i => i.section === 'Reference')
</script>

{#each section.categories as c}
  <ul>
    <h5 class="bg-white-4">{c.name}</h5>
    {#each c.items as i}
      <li>
        <a class="flex" href="/reference/{i.name}">
          {i.name}
        </a>
      </li>
    {/each}
  </ul>
{/each}

<style>
  ul {
    margin-top: 1rem;
    border: 1px solid var(--white-4);
  }
  h5 {
    position: sticky;
    top: -1rem;
    padding: .5rem 1rem;
    font-weight: 400;
  }
  a {
    display: block;
    padding: .5rem 1rem;
    color: rgba(0,0,0,.75)
  }
  a:hover {
    color: rgba(0,0,0,1);
  }
</style>