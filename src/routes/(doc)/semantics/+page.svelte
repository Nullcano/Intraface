<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
	import IndexCard from '$lib/app/IndexCard.svelte'
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
      <path d="M0 13.8613V11.1207L7.76179 7.71778V10.5954L2.81678 12.4682L2.90024 12.3312V12.6509L2.81678 12.5139L7.76179 14.3866V17.2643L0 13.8613Z" fill="var(--blue-3)"/>
      <path d="M14.942 5L11.4992 19H9.05803L12.5008 5H14.942Z" fill="var(--pink-3)"/>
      <path d="M24 13.8613L16.2382 17.2643V14.3866L21.1832 12.5139L21.0998 12.6509V12.3312L21.1832 12.4682L16.2382 10.5954V7.71778L24 11.1207V13.8613Z" fill="var(--blue-3)"/>
    </svg>
		<h1>{page.name}</h1>
	</hgroup>
	<div>{@html page.desc}</div>
	{#if page.categories}
		<div class="mt-4 grid col-4 gap-2">
			{#each page.categories as c}
				<IndexCard route="/semantics/{c.slug}" title={c.name} items={c.items.length} type={c.items.length === 1 ? "element" : "elements"} />
			{/each}
		</div>
	{/if}
	{:else}
	<p>No document for this route.</p>
{/if}