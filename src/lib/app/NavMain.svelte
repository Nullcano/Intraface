<script>
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  let currentPath = $page.url.pathname
  let isOpen = false
  let selectedPath = currentPath

  const toggleDropdown = () => {
    isOpen = !isOpen
  }

  const selectOption = (path) => {
    selectedPath = path
    isOpen = false
    goto(path)
  }
</script>

<div role="tablist" class="relative w-100 px-2 py-1 bg-light-2 br-2 point">
  <div role="menuitem" class="flex ai-center {isOpen ? 'bg-light-2' : ''}" on:mousedown={toggleDropdown} on:keydown={toggleDropdown} tabindex="0">
    <span>
      {selectedPath === '/' ? 'Intraface' : 
      selectedPath === '/port' ? 'Prefab Port' :
      selectedPath === '/repo' ? 'CSS Repo' :
      selectedPath === '/wiki' ? 'HTML Wiki' : ''}
    </span>
    <div class="spacer"></div>
    <small class="black-3">▼</small>
  </div>
  {#if isOpen}
    <ul role="menu" class="absolute left-0 mt-2 w-8 pa-2 bg-light-1 br-3">
      <li role="menuitem" class="pa-2 br-2 bg-light-2-h point" on:mouseup={() => selectOption('/')} on:keydown={() => selectOption('/')} tabindex="0">
        Intraface
      </li>
      <li role="menuitem" class="pa-2 br-2 bg-light-2-h point" on:mouseup={() => selectOption('/port')} on:keydown={() => selectOption('/port')} tabindex="0">
        Prefab Port
      </li>
      <li role="menuitem" class="pa-2 br-2 bg-light-2-h point" on:mouseup={() => selectOption('/repo')} on:keydown={() => selectOption('/repo')} tabindex="0">
        CSS Repo
      </li>
      <li role="menuitem" class="pa-2 br-2 bg-light-2-h point" on:mouseup={() => selectOption('/wiki')} on:keydown={() => selectOption('/wiki')} tabindex="0">
        HTML Wiki
      </li>
    </ul>
  {/if}
</div>