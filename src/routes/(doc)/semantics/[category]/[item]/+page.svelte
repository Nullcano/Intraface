<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
  import { page } from '$app/stores'
	import Breadcrumb from '$lib/app/Breadcrumb.svelte'
	import CodePreview from '$lib/app/CodePreview.svelte'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	
  let categoryName, categorySlug

  $: item = semantics.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/semantics/${category.slug}/${item.name}` === $page.url.pathname)
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
  <title>{item?.name} &middot; Semantics &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Semantics &middot; {base.title}" />
</svelte:head>

{#if item}
	<header>
		<hgroup>
			<Breadcrumb slug="/semantics" text="Semantics" />
			<Breadcrumb slug="/semantics/{categorySlug}" text="{categoryName}" />
			<h1 class="mt-3">{item.name}</h1>
			{#if item.desc}
				<div>
					{@html item.desc}
				</div>
			{/if}
		</hgroup>
	</header>
	<article>
		<div class="mt-4 stack gap-3">
			<div>
				<CodePreview>
					{@html item.code}
				</CodePreview>
				<CodeBlock>
					{item.code}
				</CodeBlock>
			</div>
		</div>
	</article>
	{:else}
	<p>No document for this route.</p>
{/if}