<script>
	import ContentAside from '$lib/app/ContentAside.svelte'
	import NavBase from '$lib/app/NavBase.svelte'
	import NavPort from '$lib/app/NavPort.svelte'
	import NavRepo from '$lib/app/NavRepo.svelte'
	import NavWiki from '$lib/app/NavWiki.svelte'
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
	export let data
	$: page = data.section
</script>

<svelte:head>
	<title>CSS Repo &middot; Intraface</title>
</svelte:head>

<TopBar />
<ContentAside>
	{#if page.slug.includes('port')}
		<NavPort />
	{:else if page.slug.includes('repo')}
		<NavRepo />
	{:else}
		<NavWiki />
	{/if}
</ContentAside>
<ContentMain>
	<slot />
</ContentMain>