<script>
  import { wiki } from '$lib/wiki'
  import { page } from '$app/stores'
  $: currentPath = $page.url.pathname
  const randomItem = (arr) => arr[(Math.random() * arr.length) | 0]
  const colors = ['blue', 'cyan', 'grape', 'green', 'indigo', 'lime', 'orange', 'pink', 'red', 'teal', 'violet', 'yellow']
</script>

{#each wiki.categories as c}
  <ul class="stack gap-2">
    <li class="sticky top-0">
      <a class="block px-2 py-1 grid auto-fill gap-1 ai-center bg-light-2 black-3 black-1-h bg-light-2-h t-all br-2 u-0 {currentPath === '/wiki/' + c.slug ? 'bg-light-2' : ''}" href="/wiki/{c.slug}">{c.name}</a>
    </li>
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
{/each}