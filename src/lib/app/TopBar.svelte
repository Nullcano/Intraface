<script>
  import NavMain from '$lib/app/NavMain.svelte'
  let currentCategory
  let currentPage
</script>

<header class="sticky top-0 w-fill bg-light-1 z-1">
  <div class="mw-16 mi-auto flex ai-center gap-1">
    <div class="w-10 pa-2 grid auto-fill gap-1">
      <a class="w-2 h-2 pa-2 grid place-center br-2 light-2 light-2-h bg-dark-2" href="/">
        <svg class="w-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor"/>
        </svg>
      </a>
      <NavMain />
    </div>
    {#if currentCategory}
      <div>{currentCategory}</div>
    {/if}
    {#if currentPage}
      <div>{currentPage}</div>
    {/if}
  </div>
</header>