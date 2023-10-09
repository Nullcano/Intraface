<script>
	import { base } from '$lib/base'
	import ContentAside from '$lib/app/ContentAside.svelte'
  import NavBase from '$lib/app/NavBase.svelte'
	import ContentMain from '$lib/app/ContentMain.svelte'
  import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<TopBar />
<ContentAside>
	<NavBase />
</ContentAside>
<ContentMain>
	<slot />
</ContentMain>