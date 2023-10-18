<script>
  import { base } from '$lib/base'
	import { theming } from '$lib/theming'
  import { page } from '$app/stores'
	import CodePreview from '$lib/app/CodePreview.svelte'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
  $: item = theming.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/theming/${category.slug}/${item.slug}` === $page.url.pathname);
      if (itemInCategory) return itemInCategory;
    }
    return foundItem;
  }, null);
  console.log(item)
</script>

<svelte:head>
  <title>{item?.name} &middot; Theming &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Theming &middot; {base.title}" />
</svelte:head>

{#if item}
	<header>
		<hgroup>
			<h1>{item.name}</h1>
			{#if item.desc}
				<p>{item.desc}</p>
			{/if}
		</hgroup>
	</header>
	<article>
		{#if item.variants}
			<div class="mt-4 stack gap-3">
				{#each item.variants as v}
					<div class="mb-3 stack gap-2">
						<h2 class="w-10" id="{v.name}">{v.name}</h2>
						<div>
							<CodePreview>
								{@html v.code}
							</CodePreview>
							<CodeBlock>
								{v.code}
							</CodeBlock>
						</div>
						{#if v.desc}
							<p class="w-12">{@html v.desc}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}