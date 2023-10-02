<script>
	import ContentAside from '$lib/app/ContentAside.svelte';
	import NavMain from '$lib/app/NavMain.svelte';
	import NavComponents from '$lib/app/NavComponents.svelte';
	import ContentMain from '$lib/app/ContentMain.svelte';
  import TopBar from '$lib/app/TopBar.svelte';
</script>

<ContentAside>
	<NavMain />
	<NavComponents />
</ContentAside>
<ContentMain>
	<TopBar />
	<slot />
</ContentMain>