<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
  import { page } from '$app/stores'
	import Breadcrumb from '$lib/app/Breadcrumb.svelte'
	import IndexCard from '$lib/app/IndexCard.svelte'
	$: category = semantics.categories.find(c => `/semantics/${c.slug}` === $page.url.pathname)
</script>

<svelte:head>
  <title>{category?.name} &middot; Semantics &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{category?.name} &middot; Semantics &middot; {base.title}" />
</svelte:head>

{#if category}
	<hgroup>
		<Breadcrumb slug="/semantics" text="Semantics" />
		<h1 class="mt-3">{category.name}</h1>
		{#if category.desc}
			<p>{category.desc}</p>
		{/if}
	</hgroup>
	<article>
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<IndexCard route="/semantics/{category.slug}/{i.name}" title={i.name} />
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}