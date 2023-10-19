<script>
  import { plugins } from '$lib/plugins';
  import { theming } from '$lib/theming';
  import { semantics } from '$lib/semantics';

  let searchValue = '';
  const allData = [plugins, theming, semantics];

  function searchItems(input) {
    const results = [];

    allData.forEach((data) => {
      data.categories.forEach((category) => {
        category.items.forEach((item) => {
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            results.push(item);
          }
          if (item.variants) {
            item.variants.forEach((variant) => {
              if (variant.name.toLowerCase().includes(input.toLowerCase())) {
                results.push(variant);
              }
            });
          }
        });
      });
    });
    console.log(results)
    return results;
  }

  $: results = searchItems(searchValue);
</script>

<div class="relative">
  <input class="w-12 px-3 py-2 br-pill bg-white-2" type="search" placeholder="Find component, property, or element..." bind:value={searchValue}>
  {#if searchValue.length > 0}
    <div class="pa-2 absolute top-100 stack gap-2 br-2 bg-white-2">
      {#if results.length > 0}
        {#each results as result, index (result.slug || result.name || index)}
          <a href="{result.slug}">
            {result.name}
          </a>
        {/each}
      {:else}
        <p>No results found.</p>
      {/if}
    </div>
  {/if}
</div>
