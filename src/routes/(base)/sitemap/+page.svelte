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
    <svg class="w-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="4" fill="var(--light-4)"/>
      <path d="M0 6H2V4H4V6H6V16H0V6Z" fill="var(--light-4)"/>
      <path d="M8 6H16V10H8V9H6V7H8V6Z" fill="var(--light-4)"/>
      <path d="M8 12H16V16H8V15H6V14V13H8V12Z" fill="var(--light-4)"/>
    </svg>
    <h1>Sitemap</h1>
  </hgroup>
  <div class="grid col-1 gap-2">
    {#each Object.keys(searchResults) as section}
      <div>
        <h3 class="my-2">{section}</h3>
        <div class="flex flex-wrap gap-2">
          {#each Object.keys(searchResults[section]) as category}
            <div>
              <div class="mb-2 px-2 py-1 bg-light-1">
                <div>{category}</div>
              </div>
              <div class="flex flex-wrap gap-1">
                {#each searchResults[section][category] as item}
                  <div class="categories bg-light-3">
                    <a class="block px-2 py-1" href="{section.toLowerCase()}/{item.slug ?? item.name}">
                      {item.name}
                    </a>
                  </div>
                  {#if item.variants}
                    <div class="flex flex-col gap-1">
                      {#each item.variants as variant}
                        <div class="variants bg-light-4">
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
    background: var(--light-3);
  }
  .variants a::before {
    content: '';
    position: absolute;
    left: -.5rem;
    top: calc(50% - 1px);
    width: .5rem;
    height: 2px;
    background: var(--light-4);
  }
</style>