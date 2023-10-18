<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
  import { page } from '$app/stores'
	import ComponentCard from '$lib/app/ComponentCard.svelte'
	$: category = semantics.categories.find(c => `/semantics/${c.slug}` === $page.url.pathname)
</script>

<svelte:head>
  <title>{category?.name} &middot; Semantics &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{category?.name} &middot; Semantics &middot; {base.title}" />
</svelte:head>

{#if category}
	<hgroup>
		<a class="px-2 py-1 br-pill b-all bw-1 ba-light-4 u-0" href="/semantics">Semantics</a>
		<h1 class="mt-2">{category.name}</h1>
		{#if category.desc}
			<p>{category.desc}</p>
		{/if}
	</hgroup>
	<article>
		{#if category.items}
			<div class="mt-4 grid col-4 gap-2">
				{#each category.items as i}
					<ComponentCard route="/semantics/{category.slug}/{i.name}" title={i.name} items={0} />
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}