<script>
  import { base } from '$lib/base'
	import { theming } from '$lib/theming'
	import IndexCard from '$lib/app/IndexCard.svelte'
	$: page = theming
</script>

<svelte:head>
  <title>{page?.name} &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} &middot; Prefab Port &middot; {base.title}" />
</svelte:head>

{#if page}
	<hgroup class="grid auto-fill ai-center gap-2">
		<svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 23C1 23.5523 1.44772 24 2 24H10C10.5523 24 11 23.5523 11 23V23C11 22.4477 10.5523 22 10 22H5.5C5.22386 22 5 21.7761 5 21.5V21.5C5 21.2239 5.22386 21 5.5 21H10.5C10.7761 21 11 20.7761 11 20.5V20.5C11 20.2239 10.7761 20 10.5 20H9.5C9.22386 20 9 19.7761 9 19.5V19.5C9 19.2239 9.22386 19 9.5 19H10.5C10.7761 19 11 18.7761 11 18.5V18.5C11 18.2239 10.7761 18 10.5 18H9.5C9.22386 18 9 17.7761 9 17.5V17.5C9 17.2239 9.22386 17 9.5 17H10.5C10.7761 17 11 16.7761 11 16.5V16.5C11 16.2239 10.7761 16 10.5 16H7.5C7.22386 16 7 15.7761 7 15.5V15.5C7 15.2239 7.22386 15 7.5 15H10.5C10.7761 15 11 14.7761 11 14.5V14.5C11 14.2239 10.7761 14 10.5 14H9.5C9.22386 14 9 13.7761 9 13.5V13.5C9 13.2239 9.22386 13 9.5 13H10.5C10.7761 13 11 12.7761 11 12.5V12.5C11 12.2239 10.7761 12 10.5 12H9.5C9.22386 12 9 11.7761 9 11.5V11.5C9 11.2239 9.22386 11 9.5 11H10.5C10.7761 11 11 10.7761 11 10.5V10.5C11 10.2239 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V9.5C5 9.22386 5.22386 9 5.5 9H10.5C10.7761 9 11 8.77614 11 8.5V8.5C11 8.22386 10.7761 8 10.5 8H9.5C9.22386 8 9 7.77614 9 7.5V7.5C9 7.22386 9.22386 7 9.5 7H10.5C10.7761 7 11 6.77614 11 6.5V6.5C11 6.22386 10.7761 6 10.5 6H9.5C9.22386 6 9 5.77614 9 5.5V5.5C9 5.22386 9.22386 5 9.5 5H10.5C10.7761 5 11 4.77614 11 4.5V4.5C11 4.22386 10.7761 4 10.5 4H7.5C7.22386 4 7 3.77614 7 3.5V3.5C7 3.22386 7.22386 3 7.5 3H10.5C10.7761 3 11 2.77614 11 2.5V2.5C11 2.22386 10.7761 2 10.5 2H8.5C8.22386 2 8 1.77614 8 1.5V1.5C8 1.22386 8.22386 1 8.5 1H10.5C10.7761 1 11 0.776142 11 0.5V0.5C11 0.223858 10.7761 0 10.5 0H2C1.44772 0 1 0.447715 1 1V23Z" fill="var(--blue-3)"/>
      <path d="M19 24H17C16.4477 24 16 23.5523 16 23V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V23C20 23.5523 19.5523 24 19 24Z" fill="var(--pink-3)"/>
      <path d="M13 7C13 9.3891 15 11 17 11H19C21 11 23 9 23 7C23 5 21.7187 5.2678 20 4C18.2813 2.7322 18 2 18 0L17.3117 0.9177C15.8095 2.9206 13 4.4964 13 7Z" fill="var(--pink-3)"/>
    </svg>
		<h1>{page.name}</h1>
	</hgroup>
	<div>{@html page.desc}</div>
	{#if page.categories}
		<div class="mt-4 grid col-4 gap-2">
			{#each page.categories as c}
				<IndexCard route="/theming/{c.slug}" title={c.name} items={c.items.length} type={c.items.length === 1 ? "collection" : "collections"} />
			{/each}
		</div>
	{/if}
	{:else}
	<p>No document for this route.</p>
{/if}