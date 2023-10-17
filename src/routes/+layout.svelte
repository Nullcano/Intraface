<script>
	import { base } from '$lib/base'
	import '../if.css'
	import '../app.css'
	import TopBar from '$lib/app/TopBar.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<TopBar />
<slot />