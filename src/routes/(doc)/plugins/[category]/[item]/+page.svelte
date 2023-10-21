<script>
  import { base } from '$lib/base'
	import { plugins } from '$lib/plugins'
  import { page } from '$app/stores'
	import Breadcrumb from '$lib/app/Breadcrumb.svelte'
	import CodePreview from '$lib/app/CodePreview.svelte'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	
  let categoryName, categorySlug

  $: item = plugins.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/plugins/${category.slug}/${item.slug}` === $page.url.pathname)
      if (itemInCategory) {
        categoryName = category.name
        categorySlug = category.slug
        return itemInCategory
      }
    }
    return foundItem
  }, null)
</script>

<svelte:head>
  <title>{item?.name} &middot; Plugins &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Plugins &middot; {base.title}" />
</svelte:head>

{#if item}
	<header>
		<hgroup>
			<Breadcrumb slug="/plugins" text="Plugins" />
			<Breadcrumb slug="/plugins/{categorySlug}" text="{categoryName}" />
			<h1 class="mt-3">{item.name}</h1>
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