<script>
  import { base } from '$lib/base'
	import { plugins } from '$lib/plugins'
  import { page } from '$app/stores'
	import Breadcrumb from '$lib/app/Breadcrumb.svelte'
	import IndexCard from '$lib/app/IndexCard.svelte'
	$: category = plugins.categories.find(c => `/plugins/${c.slug}` === $page.url.pathname)
</script>

<svelte:head>
  <title>{category?.name} &middot; Plugins &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{category?.name} &middot; Plugins &middot; {base.title}" />
</svelte:head>

{#if category}
	<hgroup>
		<Breadcrumb slug="/plugins" text="Plugins" />
		<h1 class="mt-3">{category.name}</h1>
		{#if category.desc}
			<p>{category.desc}</p>
		{/if}
	</hgroup>
	<article>
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<IndexCard route="/plugins/{category.slug}/{i.slug}" title={i.name} items={i.variants.length} type={i.variants.length === 1 ? "variant" : "variants"} />
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}