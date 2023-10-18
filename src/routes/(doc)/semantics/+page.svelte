<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
	import CategoryCard from '$lib/app/CategoryCard.svelte'
	$: page = semantics
</script>

<svelte:head>
  <title>{page?.name} &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} &middot; Semantics &middot; {base.title}" />
</svelte:head>

{#if page}
	<hgroup class="grid auto-fill ai-center gap-2">
		<svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 11V15L12 21L24 15V11L12 17L0 11Z" fill="currentColor" fill-opacity="0.5"/>
      <path d="M6 8L0 11L12 17L24 11L18 8V10C18 11.6569 15.3137 13 12 13C8.68629 13 6 11.6569 6 10V8Z" fill="currentColor"/>
      <path d="M17 9.5C17 10.8807 14.7614 12 12 12C9.23858 12 7 10.8807 7 9.5V5.5H17V9.5Z" fill="currentColor" fill-opacity="0.5"/>
      <path d="M17 5.5C17 6.88071 14.7614 8 12 8C9.23858 8 7 6.88071 7 5.5C7 4.11929 9.23858 3 12 3C14.7614 3 17 4.11929 17 5.5Z" fill="currentColor"/>
    </svg>
		<h1>{page.name}</h1>
	</hgroup>
	<div>{@html page.desc}</div>
	{#if page.categories}
		<div class="mt-4 grid col-4 gap-2">
			{#each page.categories as c}
				<CategoryCard route="/semantics/{c.slug}" title={c.name} items={c.items.length} />
			{/each}
		</div>
	{/if}
	{:else}
	<p>No document for this route.</p>
{/if}