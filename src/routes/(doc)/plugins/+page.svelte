<script>
  import { base } from '$lib/base'
	import { plugins } from '$lib/plugins'
	import CategoryCard from '$lib/app/CategoryCard.svelte'
	$: page = plugins
</script>

<svelte:head>
  <title>{page?.name} &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} &middot; Prefab Port &middot; {base.title}" />
</svelte:head>

{#if page}
	<div>
		<h1>{page.name}</h1>
		<p>{page.desc}</p>
	</div>
	{#if page.categories}
		<div class="mt-4 grid col-4 gap-2">
			{#each page.categories as c}
				<CategoryCard route="/plugins/{c.slug}" title={c.name} items={c.items.length} />
			{/each}
		</div>
	{/if}
	{:else}
	<p>No document for this route.</p>
{/if}