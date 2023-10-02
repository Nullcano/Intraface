<script>
  import * as config from '$lib/config'

  export let data
	$: page = data.page
	console.log(data)
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
			<div class="stack">
				{#each page.variants as v}
					<hr>
					<div class="component">
						<h2 class="title">{v.name}</h2>
						<p>{v.desc}</p>
						<div class="preview">
							{@html v.code}
						</div>
						<div class="code">
							<pre><code>{v.code}</code></pre>
						</div>
					</div>
        {/each}
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
	.stack {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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