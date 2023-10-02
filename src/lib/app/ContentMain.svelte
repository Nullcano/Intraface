<main if-layout="auto-fill">
  <slot />
</main>

<style>
	main {
		position: relative;
		height: calc(100vh - 2rem);
		margin: 1rem 1rem 1rem 16rem;
		background-position: top left;
		background: #111;
		background-size: 1rem 1rem;
		border: 1px solid rgba(255,255,255,.1);
		border-radius: 1rem;
		overflow-y: auto;
	}
</style>