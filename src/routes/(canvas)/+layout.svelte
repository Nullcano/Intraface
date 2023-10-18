<script>
	import { base } from '$lib/base'
  import TopBar from '$lib/app/TopBar.svelte'
  import NavMain from '$lib/app/NavMain.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<TopBar />
<NavMain />
<slot />