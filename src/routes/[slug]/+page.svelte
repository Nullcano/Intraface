<script>
  import * as config from '$lib/config'

  export let data
	$: page = data.page
</script>

<svelte:head>
  <title>{page?.category} - {config.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{page?.category} - {config.title}" />
</svelte:head>

<article class="relative br4 ba b--dark-gray overflow-hidden">
	{#if page}
		<div class="pa4">
			<div class="flex justify-between">
				<h1 class="display fw4">{page.category}</h1>
			</div>
			<div class="measure lh-copy">
				{#each page.items as i}
          {i.name}
        {/each}
			</div>
		</div>
		{:else}
		<p>Loading...</p>
	{/if}
</article>