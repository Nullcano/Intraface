<main if-layout="auto-fill">
  <slot />
</main>

<style>
	main {
		position: relative;
		height: calc(100vh - 2rem);
		margin: 1rem 1rem 1rem 16rem;
		background-position: top left;
		border: 1px solid var(--white-4);
		overflow-y: auto;
	}
</style>