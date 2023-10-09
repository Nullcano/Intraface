<script>
  import { page } from '$app/stores'
  import NavMain from '$lib/app/NavMain.svelte'
  let darkMode = false
  let currentPath = $page.url.pathname
  let currentCategory
  let currentPage 
  console.log($page, currentPath)
	function toggleTheme() {
    darkMode = !darkMode
    window.document.body.classList.toggle('dark')
  }
</script>

<header class="sticky top-0 w-fill flex ai-center gap-1 bg-light-1 z-1">
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
  <div class="spacer"></div>
  <button class="ma-2 w-2 h-2 grid place-center bg-light-2 bw-0" on:click={toggleTheme}>
    {@html darkMode ? 
      '<svg class="w-1 h-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z" fill="currentColor"/><path d="M17 0H15V6.04938C15.3289 6.01672 15.6625 6 16 6C16.3375 6 16.6711 6.01672 17 6.04938V0Z" fill="currentColor"/><path d="M22.329 8.25726C22.8461 8.68044 23.32 9.1544 23.7432 9.67152L28.0208 5.39386L26.6066 3.97965L22.329 8.25726Z" fill="currentColor"/><path d="M25.9506 15C25.9833 15.3289 26 15.6625 26 16C26 16.3375 25.9833 16.6711 25.9506 17H32V15H25.9506Z" fill="currentColor"/><path d="M23.7427 22.329C23.3196 22.8461 22.8456 23.32 22.3285 23.7432L26.6066 28.0213L28.0208 26.6071L23.7427 22.329Z" fill="currentColor"/><path d="M17 25.9506C16.6711 25.9833 16.3375 26 16 26C15.6625 26 15.3289 25.9833 15 25.9506V32H17V25.9506Z" fill="currentColor"/><path d="M9.67152 23.7432C9.1544 23.32 8.68044 22.8461 8.25726 22.329L3.97918 26.6071L5.3934 28.0213L9.67152 23.7432Z" fill="currentColor"/><path d="M6.04938 17C6.01672 16.6711 6 16.3375 6 16C6 15.6625 6.01672 15.3289 6.04938 15H0V17H6.04938Z" fill="currentColor"/><path d="M8.25685 9.67152C8.67999 9.1544 9.15392 8.68044 9.67101 8.25726L5.3934 3.97965L3.97919 5.39386L8.25685 9.67152Z" fill="currentColor"/></svg>' : 
      '<svg class="w-1 h-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 1.16309C21.1362 3.53613 17 9.28516 17 16C17 22.7148 21.1362 28.4639 27 30.8369C25.147 31.5869 23.1216 32 21 32C12.1636 32 5 24.8369 5 16C5 7.16309 12.1636 0 21 0C23.1216 0 25.147 0.413086 27 1.16309Z" fill="currentColor"/></svg>'
    }
  </button>
</header>