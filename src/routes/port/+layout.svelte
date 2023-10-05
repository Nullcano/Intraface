<script>
	import ContentAside from '$lib/app/ContentAside.svelte'
	import NavMain from '$lib/app/NavMain.svelte'
	import NavPort from '$lib/app/NavPort.svelte'
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>Prefab Port &middot; Intraface</title>
</svelte:head>

<ContentAside>
	<NavMain />
	<NavPort />
</ContentAside>
<ContentMain>
	<TopBar />
	<slot />
</ContentMain>