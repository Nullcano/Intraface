<script>
  import { data } from '$lib/index'
  import { page } from '$app/stores'  
  $: currentPath = $page.url.pathname
  const section = data.find(i => i.section === 'Wiki')
  const randomItem = (arr) => arr[(Math.random() * arr.length) | 0]
  const colors = ['blue', 'cyan', 'grape', 'green', 'indigo', 'lime', 'orange', 'pink', 'red', 'teal', 'violet', 'yellow']
</script>

{#each section.categories as c}
  <div class="mt-3 pt-2 bg-light-1 br-3">
    <h5 class="sticky top-0 mx-2 pa-2 bg-light-2 br-2">{c.name}</h5>
    <ul class="pa-2">
      {#each c.items as i}
        <li>
          <a class="block px-2 py-1 grid auto-fill gap-1 ai-center black-3 black-1-h bg-light-2-h t-all br-2 u-0 {currentPath === '/wiki/' + i.name ? 'bg-light-2' : ''}" href="/wiki/{i.name}">
            <svg class="br-circle" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <rect width="8" height="8" fill="var(--{randomItem(colors)}-3)" />
            </svg>
            <span>{i.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}