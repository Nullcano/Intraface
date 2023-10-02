<script>
  import { data } from '$lib/index'
  const section = data.find(i => i.section === 'Reference')
</script>

{#each section.categories as c}
  <ul>
    <h4>{c.name}</h4>
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
  h4 {
    position: sticky;
    top: -1rem;
    padding: .5rem;
    margin-top: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    background: #111;
    color: rgba(255,255,255,.5);
    border-radius: .5rem;
  }
  a {
    display: block;
    padding: .25rem .5rem;
    color: rgba(255,255,255,.75)
  }
  a:hover {
    color: rgba(255,255,255,1);
  }
</style>