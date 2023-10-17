<script>
  import { onMount } from 'svelte'
  import { base } from '$lib/base'
  import '../if.css'
  import '../app.css'

  onMount(() => {
		let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (darkMode) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
  })
</script>

<svelte:head>
	<title>{base.name}</title>
</svelte:head>

<slot />