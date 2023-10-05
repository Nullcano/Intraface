<script>
	import ContentAside from '$lib/app/ContentAside.svelte'
	import NavMain from '$lib/app/NavMain.svelte'
	import NavRepo from '$lib/app/NavRepo.svelte'
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>CSS Repo &middot; Intraface</title>
</svelte:head>

<ContentAside>
	<NavMain />
	<NavRepo />
</ContentAside>
<ContentMain>
	<TopBar />
	<slot />
</ContentMain>