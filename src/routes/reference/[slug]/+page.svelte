<script>
  import * as config from '$lib/config'

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
				<div class="preview">
					{@html page.code}
				</div>
				<div class="code">
					<pre><code>{page.code}</code></pre>
				</div>
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
	h1 {
		font-size: 2rem;
	}
	p {
		margin: 1rem 0;
	}
	.title {
		margin-block: 1rem;
		font-size: 1.25rem;
	}
	.preview {
		padding: 1rem;
		border: 1px solid #333;
		border-radius: 1rem;
	}
	.code {
		margin-top: -1px;
		padding: 1rem;
		border: 1px solid #333;
		border-radius: 1rem;
		background: #000;
	}
</style>