<script>
	import '../if.css';
	import '../app.css';
  import Sidebar from '$lib/app/Sidebar.svelte';
  import TopBar from '$lib/app/TopBar.svelte';
</script>

<Sidebar />

<main if-layout="auto-fill">
	<TopBar />
	<slot />
</main>

<style>
	main {
		position: relative;
		height: calc(100vh - 2rem);
		margin: 1rem 1rem 1rem 16rem;
		background-position: top left;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 12H16V16H12V15H15V12Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M3 16H0V15H3V16Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M15 3V0L16 4.37121e-08V3H15Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M6 15H9V16H6V15Z' fill='white' fill-opacity='0.05'/%3E%3Cpath d='M15 9V6H16V9H15Z' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E");
		background-size: 1rem 1rem;
		border: 1px solid rgba(255,255,255,.1);
		border-radius: 1rem;
		overflow-y: auto;
	}
</style>