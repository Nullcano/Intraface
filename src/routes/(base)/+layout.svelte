<script>
	import { base } from '$lib/base'
	import ContentMain from '$lib/app/ContentMain.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<ContentMain>
	<slot />
</ContentMain>