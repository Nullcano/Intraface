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

<div class="page">
  <input type="text" placeholder="Type in whatever you need..." bind:value={searchQuery} />
  {#each Object.keys(searchResults) as section}
    <div class="title flex">
      <div>{section}</div>
    </div>
    {#each Object.keys(searchResults[section]) as category}
      <div class="title flex">
        <div>{category}</div>
      </div>
      {#each searchResults[section][category] as item}
        <div class="grid">
          <a class="flex" href="{item.slug}">
            {item.name}
          </a>
        </div>
      {/each}
    {/each}
  {/each}
</div>

<style>
  .page {
    padding: 1rem;
  }
  a {
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
  }
  input {
    width: 100%;
    padding: 1rem;
    color: inherit;
    font-size: 1.5rem;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 1rem;
  }
</style>