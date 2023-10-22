<script>
  import { base } from '$lib/base'
  import TopBar from '$lib/app/TopBar.svelte'
  import NavMain from '$lib/app/NavMain.svelte'
  import ContentMain from '$lib/app/ContentMain.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<TopBar />
<NavMain />
<ContentMain>
	<slot />
</ContentMain>