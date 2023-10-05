<script>
  import * as config from '$lib/config'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	import CodePreview from '$lib/app/CodePreview.svelte'
  export let data
	$: page = data.page
</script>

<svelte:head>
  <title>{page?.name} &middot; CSS Repo &middot; {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} &middot; CSS Repo &middot; {config.title}" />
</svelte:head>

<article class="pa-4">
	{#if page}
		<div>
			<h1>{page.name}</h1>
			<p>{page.desc}</p>
		</div>
		<div class="grid col-{page.columns} gap-3">
			{#each page.variants as v}
				<div>
					<h2 class="pt-6 pb-2">{v.name}</h2>
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
		{:else}
		<p>Loading...</p>
	{/if}
</article>