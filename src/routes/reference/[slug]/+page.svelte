<script>
  import * as config from '$lib/config'
	import CodeBlock from '$lib/app/CodeBlock.svelte';
	import CodePreview from '$lib/app/CodePreview.svelte';

  export let data
	$: page = data.page
	console.log(page)
</script>

<svelte:head>
  <title>{page?.name} - {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.name} - {config.title}" />
</svelte:head>

<article>
	{#if page}
		<div>
			<div>
				<h1>{page.name}</h1>
				<p>{page.desc}</p>
			</div>
			<div class="component">
				<CodePreview>
					{@html page.code}
				</CodePreview>
				<CodeBlock>
					<pre><code>{page.code}</code></pre>
				</CodeBlock>
			</div>
		</div>
		{:else}
		<p>Loading...</p>
	{/if}
</article>

<style>
	article {
		margin: 1rem;
		padding: 1rem;
	}
	p {
		margin: 1rem 0;
	}
</style>