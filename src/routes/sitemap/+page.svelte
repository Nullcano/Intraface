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

<div class="mw-15 mi-auto pa-4">
  <h1>Intraface Sitemap</h1>
  <div class="grid col-1 gap-2">
    {#each Object.keys(searchResults) as section}
      <div>
        <h3 class="my-2">{section}</h3>
        <div class="flex flex-wrap gap-2">
          {#each Object.keys(searchResults[section]) as category}
            <div>
              <div class="mb-2 px-2 py-1 bg-white-3">
                <div>{category}</div>
              </div>
              <div class="flex flex-wrap gap-1">
                {#each searchResults[section][category] as item}
                  <div class="bg-white-2">
                    <a class="block px-2 py-1" href="{section.toLowerCase()}/{item.slug ?? item.name}">
                      {item.name}
                    </a>
                  </div>
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
  a::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: calc(50% - 1px);
    width: 2px;
    height: .5rem;
    background: var(--white-2);
  }
</style>