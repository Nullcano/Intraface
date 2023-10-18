<script>
  import { base } from '$lib/base'
	import { semantics } from '$lib/semantics'
  import { page } from '$app/stores'
	import CodePreview from '$lib/app/CodePreview.svelte'
	import CodeBlock from '$lib/app/CodeBlock.svelte'
	
  let categoryName, categorySlug;

  $: item = semantics.categories.reduce((foundItem, category) => {
    if (!foundItem) {
      const itemInCategory = category.items.find(item => `/semantics/${category.slug}/${item.name}` === $page.url.pathname);
      if (itemInCategory) {
        categoryName = category.name;
        categorySlug = category.name;
        return itemInCategory;
      }
    }
    return foundItem;
  }, null);
</script>

<svelte:head>
  <title>{item?.name} &middot; Semantics &middot; {base.name}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{item?.name} &middot; Semantics &middot; {base.title}" />
</svelte:head>

{#if item}
	<header>
		<hgroup>
			<a class="px-2 py-1 br-pill b-all bw-1 ba-light-4 u-0" href="/semantics">Semantics</a>
			<a class="px-2 py-1 br-pill b-all bw-1 ba-light-4 u-0" href="/semantics/{categorySlug}">{categoryName}</a>
			<h1 class="mt-2">{item.name}</h1>
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