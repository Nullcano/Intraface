<script>
  import { data } from '$lib/index';
  let searchQuery = '';

  // Flatten the data structure into an array of items
  const allItems = data.flatMap(section =>
    section.categories.flatMap(category =>
      category.items.map(item => ({
        section: section.section,
        category: category.name,
        ...item
      }))
    )
  );

  // Function to group items by section and category
  function groupItems(items) {
    const grouped = {};
    items.forEach(item => {
      if (!grouped[item.section]) {
        grouped[item.section] = {};
      }
      if (!grouped[item.section][item.category]) {
        grouped[item.section][item.category] = [];
      }
      grouped[item.section][item.category].push(item);
    });
    return grouped;
  }

  $: groupedResults = groupItems(allItems);

  // Function to filter results by search query
  function filterResults(results) {
    const filtered = {};
    for (const section in results) {
      filtered[section] = {};
      for (const category in results[section]) {
        filtered[section][category] = results[section][category].filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }
    return filtered;
  }

  $: searchResults = filterResults(groupedResults);
</script>

<div class="mw-16 mi-auto pa-4">
  <hgroup class="grid auto-fill ai-center gap-2">
    <svg class="w-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0V16H8V9H16V0ZM7 1H1V4H7V1ZM7 5H1V15H7V5ZM8 5H15V8H8V5ZM15 1H8V4H15V1Z" fill="currentColor"></path></svg>
    <h1>Sitemap</h1>
  </hgroup>
  <div class="grid col-1 gap-2">
    {#each Object.keys(searchResults) as section}
      <div>
        <h3 class="my-2">{section}</h3>
        <div class="flex flex-wrap gap-2">
          {#each Object.keys(searchResults[section]) as category}
            <div>
              <div class="mb-2 px-2 py-1 bg-white-1">
                <div>{category}</div>
              </div>
              <div class="flex flex-wrap gap-1">
                {#each searchResults[section][category] as item}
                  <div class="categories bg-white-3">
                    <a class="block px-2 py-1" href="{section.toLowerCase()}/{item.slug ?? item.name}">
                      {item.name}
                    </a>
                  </div>
                  {#if item.variants}
                    <div class="flex flex-col gap-1">
                      {#each item.variants as variant}
                        <div class="variants bg-white-4">
                          <a class="block px-2 py-1" href="{section.toLowerCase()}/{item.slug ?? item.name}/#{variant.slug ?? variant.name}">
                            {variant.name}
                          </a>
                        </div>
                      {/each}
                    </div>
                  {/if}
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  a {
    position: relative;
  }
  .categories a::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: calc(50% - 1px);
    width: 2px;
    height: .5rem;
    background: var(--white-3);
  }
  .variants a::before {
    content: '';
    position: absolute;
    left: -.5rem;
    top: calc(50% - 1px);
    width: .5rem;
    height: 2px;
    background: var(--white-4);
  }
</style>