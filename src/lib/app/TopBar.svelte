<script>
  import SearchBar from '$lib/app/SearchBar.svelte'
  import DarkModeButton from '$lib/app/DarkModeButton.svelte'
  import MegaMenu from '$lib/app/MegaMenu.svelte';
</script>

<header class="fixed top-0 w-fill px-4 py-3 flex ai-center gap-1 z-1">
  <div class="grid fill-auto ai-center gap-2">
    <a class="grid auto-fill ai-center gap-3 u-0" href="/">
      <img class="w-3 h-3" src="../orb.png" alt="Intraface" />
      <svg class="h-1" viewBox="0 0 187 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.016 28H0V.04h4.016V28zM31.556 27.96h-7.748L16.992 3.6h-3.448l2.515 2.387V27.96h-4.016V0h7.79l6.733 24.44h3.49l-2.516-2.55V0h4.016v27.96zM52.112 3.56h-6.288V28h-4.016V3.56H35.56V.04h16.552v3.52zM73.661 28h-4.016l.081-2.832-8.032-8.052L64.412 14h5.233V3.56h-9.493V28h-4.016V7l3.53-3.44H55.65V.04h14.482l3.53 3.52v9.955l-3.53 3.52h-3.286v.526l6.815 6.716V28zM97.86 28h-3.975V17.52H84.35V28h-4.016V3.56l3.53-3.52H97.86V28zM96.4 3.56H84.35v13.475L87.394 14h6.49V6.07L96.4 3.56zM119.89 17.52h-9.98V28h-4.016V7l3.53-3.44h-4.016V.04h14.482v3.52h-9.98v13.475L112.872 14h7.018v3.52zM142.428 28h-3.975V17.52h-9.533V28h-4.016V3.56l3.529-3.52h13.995V28zm-1.46-24.44H128.92v13.475L131.962 14h6.491V6.07l2.515-2.51zM167.014 24.48L163.485 28h-10.02l-3.489-3.52V3.56l3.489-3.52h10.02l3.529 3.52v2.914l-4.016 4.046V3.56h-9.006v20.92h9.006v-2.954l4.016-4.006v6.96zM187 28h-13.996V7l3.53-3.44h-4.016V.04H187v3.52h-9.98v9.955l2.962-2.995H187V14h-9.98v10.48H187V28z" fill="currentColor"/></svg>
    </a>
    <MegaMenu />
  </div>
  <div class="spacer"></div>
  <SearchBar />
  <div class="spacer"></div>
  <DarkModeButton />
</header>