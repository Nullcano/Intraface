<script>
  import { base } from '$lib/base'
	import { port } from '$lib/port'
  import { page } from '$app/stores'
	import ComponentCard from '$lib/app/ComponentCard.svelte'
	$: category = port.categories.find(c => `/port/${c.slug}` === $page.url.pathname)
</script>

<svelte:head>
  <title>{category?.name} &middot; Prefab Port &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{category?.name} &middot; Prefab Port &middot; {base.title}" />
</svelte:head>

<article class="mw-16 mi-auto pa-4">
	{#if category}
		<div>
			<h1>{category.name}</h1>
			<p>{category.desc}</p>
		</div>
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<ComponentCard route="/port/{category.slug}/{i.slug}" title={i.name} items={i.variants.length} />
				{/each}
			</div>
		{/if}
		{:else}
		<p>No document for this route.</p>
	{/if}
</article>