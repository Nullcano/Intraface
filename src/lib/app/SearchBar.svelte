<script>
  import { plugins } from '$lib/plugins'
  import { theming } from '$lib/theming'
  import { semantics } from '$lib/semantics'

  let searchValue = ''
  let searchResultsIsOpen = false
  const allData = [plugins, theming, semantics]

  function searchItems(input) {
    const results = [];

    allData.forEach((section) => {
      section.categories.forEach((category) => {
        category.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(input.toLowerCase())
          ) {
            results.push({
              sectionSlug: section.slug,
              sectionName: section.name,
              categorySlug: category.slug,
              itemSlug: item.slug,
              name: item.name,
            })
          }
        })
      })
    })

    return results
  }

  function toggleSearchResults() {
    searchResultsIsOpen = !searchResultsIsOpen
  }

  $: results = searchItems(searchValue)
</script>

<div role="searchbox" class="relative" on:click={toggleSearchResults} on:keydown={null} tabindex="0">
  <input class="w-12 px-3 py-2 br-pill bg-white-2" type="search" placeholder="Find component, property, or element..." bind:value={searchValue}>
  {#if searchValue.length > 0 && searchResultsIsOpen}
    <div class="w-fill mh-12 pa-2 absolute top-100 stack gap-2 br-2 bg-light-2 of-scroll-y">
      {#if results.length > 0}
        {#each results as result}
          <a class="flex jc-between pa-2 br-2 h-bg-light-1 u-0" href="/{result.sectionSlug}/{result.categorySlug}/{result.itemSlug}">
            <span>
              {result.name}
            </span>
            <span class="fs-1 pa-1 br-2 bg-light-1">
              {result.sectionName}
            </span>
          </a>
        {/each}
      {:else}
        <p>No results found.</p>
      {/if}
    </div>
  {/if}
</div>
