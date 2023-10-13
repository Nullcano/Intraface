<script>
	import { base } from '$lib/base'
	import ContentMain from '$lib/app/ContentMain.svelte'
	import DarkModeButton from '$lib/app/DarkModeButton.svelte'
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<ContentMain>
	<slot />
</ContentMain>

<DarkModeButton />