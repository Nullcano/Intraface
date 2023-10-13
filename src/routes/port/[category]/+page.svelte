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

{#if category}
	<header class="w-fill bg-light-3">
		<hgroup class="mw-16 mi-auto pa-3">
			<h1>{category.name}</h1>
			{#if category.desc}
				<p>{category.desc}</p>
			{/if}
		</hgroup>
	</header>
	<article class="mw-16 mi-auto pa-3">
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<ComponentCard route="/port/{category.slug}/{i.slug}" title={i.name} items={i.variants.length} />
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}