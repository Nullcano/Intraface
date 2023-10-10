<script>
  import { base } from '$lib/base'
	import { port } from '$lib/port'
  import { page } from '$app/stores'
  $: item = port.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/port/${category.slug}/${item.slug}` === $page.url.pathname);
      if (itemInCategory) return itemInCategory;
    }
    return foundItem;
  }, null);
  console.log(item)
</script>

<svelte:head>
  <title>{item?.name} &middot; Prefab Port &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Prefab Port &middot; {base.title}" />
</svelte:head>

<article class="mw-16 mi-auto pa-4">
	{#if item}
		<div>
			<h1>{item.name}</h1>
			<p>{item.desc}</p>
		</div>
		{#if item.variants}
			<div class="mt-4 stack gap-3">
				{#each item.variants as v}
					<div class="grid auto-fill gap-2">
						<h2 class="w-10" id="{v.name}">{v.name}</h2>
						{#if v.desc}
							<p class="w-12 mb-3">{@html v.desc}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
		{:else}
		<p>No document for this route.</p>
	{/if}
</article>