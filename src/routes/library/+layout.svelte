<script>
	import ContentAside from '$lib/app/ContentAside.svelte';
	import NavMain from '$lib/app/NavMain.svelte';
	import NavLibrary from '$lib/app/NavLibrary.svelte';
	import ContentMain from '$lib/app/ContentMain.svelte';
  import TopBar from '$lib/app/TopBar.svelte';
</script>

<ContentAside>
	<NavMain />
	<NavLibrary />
</ContentAside>
<ContentMain>
	<TopBar />
	<slot />
</ContentMain>