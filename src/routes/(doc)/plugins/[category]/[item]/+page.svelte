<script>
  import { base } from '$lib/base'
	import { plugins } from '$lib/plugins'
  import { page } from '$app/stores'
	import CodePreview from '$lib/app/CodePreview.svelte'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	
  let categoryName, categorySlug;

  $: item = plugins.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/plugins/${category.slug}/${item.slug}` === $page.url.pathname);
      if (itemInCategory) {
        categoryName = category.name;
        categorySlug = category.slug;
        return itemInCategory;
      }
    }
    return foundItem;
  }, null);
</script>

<svelte:head>
  <title>{item?.name} &middot; Plugins &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Plugins &middot; {base.title}" />
</svelte:head>

{#if item}
	<header>
		<hgroup>
			<a class="px-2 py-1 br-pill b-all bw-1 b-light-4 bg-light-2 u-0" href="/plugins">Plugins</a>
			<a class="px-2 py-1 br-pill b-all bw-1 b-light-4 bg-light-2 u-0" href="/plugins/{categorySlug}">{categoryName}</a>
			<h1 class="mt-2">{item.name}</h1>
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