<script>
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>CSS Repo &middot; Intraface</title>
</svelte:head>

<TopBar />
<ContentMain>
	<slot />
</ContentMain>