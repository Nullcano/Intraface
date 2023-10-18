<script>
  import { base } from '$lib/base'
	import { plugins } from '$lib/plugins'
  import { page } from '$app/stores'
	import ComponentCard from '$lib/app/ComponentCard.svelte'
	$: category = plugins.categories.find(c => `/plugins/${c.slug}` === $page.url.pathname)
</script>

<svelte:head>
  <title>{category?.name} &middot; Plugins &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{category?.name} &middot; Plugins &middot; {base.title}" />
</svelte:head>

{#if category}
	<hgroup>
		<a class="px-2 py-1 br-pill b-all bw-1 b-light-4 bg-light-2 u-0" href="/plugins">Plugins</a>
		<h1 class="mt-2">{category.name}</h1>
		{#if category.desc}
			<p>{category.desc}</p>
		{/if}
	</hgroup>
	<article>
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<ComponentCard route="/plugins/{category.slug}/{i.slug}" title={i.name} items={i.variants.length} />
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}