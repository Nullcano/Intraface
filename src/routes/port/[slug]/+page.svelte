<script>
  import * as config from '$lib/config'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	import CodePreview from '$lib/app/CodePreview.svelte'
  export let data
	$: page = data.page
</script>

<svelte:head>
  <title>{page?.name} - {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} - {config.title}" />
</svelte:head>

<article class="mw-16 mi-auto pa-4">
	{#if page}
		<div>
			<h1>{page.name}</h1>
			<p>{page.desc}</p>
		</div>
		<div class="grid col-{page.columns} gap-3">
			{#each page.variants as v}
				<div>
					<h2 class="pt-6 pb-2" id="{v.name}">{v.name}</h2>
					{#if v.desc}
						<p class="mb-3">{@html v.desc}</p>
					{/if}
					<CodePreview>
						{@html v.code}
					</CodePreview>
					<CodeBlock>
						<pre><code>{v.code}</code></pre>
					</CodeBlock>
				</div>
			{/each}
		</div>
		{#if page.refLibrary}
			<h3 class="mt-3">CSS collections used</h3>
			<div class="my-3 flex flex-wrap gap-1">
				{#each page.refLibrary as lib}
					<a class="px-2 py-1 bg-white-2" href="/library/{lib.slug}">{lib.name}</a>
				{/each}
			</div>
		{/if}
		{#if page.refReference}
			<h3 class="mt-3">HTML elements used</h3>
			<div class="my-3 flex flex-wrap gap-1">
				{#each page.refReference as ref}
					<a class="px-2 py-1 bg-white-2" href="/reference/{ref.slug}">{ref.name}</a>
				{/each}
			</div>
		{/if}
		{:else}
		<p>No document for this route.</p>
	{/if}
</article>