<script>
	import ContentAside from '$lib/app/ContentAside.svelte'
	import NavMain from '$lib/app/NavMain.svelte'
	import NavWiki from '$lib/app/NavWiki.svelte'
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>HTML Wiki &middot; Intraface</title>
</svelte:head>

<ContentAside>
	<NavMain />
	<NavWiki />
</ContentAside>
<ContentMain>
	<TopBar />
	<slot />
</ContentMain>