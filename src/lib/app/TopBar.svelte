<script>
  import SearchBar from '$lib/app/SearchBar.svelte'
  import DarkModeButton from '$lib/app/DarkModeButton.svelte'
  import MegaMenu from '$lib/app/MegaMenu.svelte';
</script>

<header class="fixed top-0 w-fill px-4 py-3 flex ai-center gap-1 z-1">
  <div class="grid fill-auto ai-center gap-2">
    <a class="grid auto-fill ai-center gap-2 u-0" href="/">
      <svg class="w-2 h-2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.2857 17.1429C34.2857 26.6106 26.6106 34.2857 17.1429 34.2857C7.67512 34.2857 0 26.6106 0 17.1429C0 7.67512 7.67512 0 17.1429 0C26.6106 0 34.2857 7.67512 34.2857 17.1429Z" fill="url(#paint0_linear_5_127)"/>
        <path d="M42.8571 8.57143C42.8571 3.83756 46.6947 0 51.4286 0H111.429C116.162 0 120 3.83756 120 8.57143V25.7143C120 30.4482 116.162 34.2857 111.429 34.2857H51.4286C46.6947 34.2857 42.8571 30.4482 42.8571 25.7143V8.57143Z" fill="url(#paint1_linear_5_127)"/>
        <path d="M42.8571 60C42.8571 50.5323 50.5323 42.8571 60 42.8571C69.4677 42.8571 77.1429 50.5323 77.1429 60C77.1429 69.4677 69.4677 77.1429 60 77.1429C50.5323 77.1429 42.8571 69.4677 42.8571 60Z" fill="url(#paint2_linear_5_127)"/>
        <path d="M25.7143 42.8571C30.4482 42.8571 34.2857 46.6947 34.2857 51.4286L34.2857 111.429C34.2857 116.162 30.4482 120 25.7143 120H8.57143C3.83756 120 8.82899e-07 116.162 1.08982e-06 111.429L3.71251e-06 51.4286C3.91943e-06 46.6947 3.83756 42.8571 8.57143 42.8571H25.7143Z" fill="url(#paint3_linear_5_127)"/>
        <defs>
          <linearGradient id="paint0_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FE007E"/>
            <stop offset="1" stop-color="#0181FF"/>
          </linearGradient>
          <linearGradient id="paint1_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FE007E"/>
            <stop offset="1" stop-color="#0181FF"/>
          </linearGradient>
          <linearGradient id="paint2_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FE007E"/>
            <stop offset="1" stop-color="#0181FF"/>
          </linearGradient>
          <linearGradient id="paint3_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FE007E"/>
            <stop offset="1" stop-color="#0181FF"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="h-1" viewBox="0 0 187 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.016 28H0V.04h4.016V28zM31.556 27.96h-7.748L16.992 3.6h-3.448l2.515 2.387V27.96h-4.016V0h7.79l6.733 24.44h3.49l-2.516-2.55V0h4.016v27.96zM52.112 3.56h-6.288V28h-4.016V3.56H35.56V.04h16.552v3.52zM73.661 28h-4.016l.081-2.832-8.032-8.052L64.412 14h5.233V3.56h-9.493V28h-4.016V7l3.53-3.44H55.65V.04h14.482l3.53 3.52v9.955l-3.53 3.52h-3.286v.526l6.815 6.716V28zM97.86 28h-3.975V17.52H84.35V28h-4.016V3.56l3.53-3.52H97.86V28zM96.4 3.56H84.35v13.475L87.394 14h6.49V6.07L96.4 3.56zM119.89 17.52h-9.98V28h-4.016V7l3.53-3.44h-4.016V.04h14.482v3.52h-9.98v13.475L112.872 14h7.018v3.52zM142.428 28h-3.975V17.52h-9.533V28h-4.016V3.56l3.529-3.52h13.995V28zm-1.46-24.44H128.92v13.475L131.962 14h6.491V6.07l2.515-2.51zM167.014 24.48L163.485 28h-10.02l-3.489-3.52V3.56l3.489-3.52h10.02l3.529 3.52v2.914l-4.016 4.046V3.56h-9.006v20.92h9.006v-2.954l4.016-4.006v6.96zM187 28h-13.996V7l3.53-3.44h-4.016V.04H187v3.52h-9.98v9.955l2.962-2.995H187V14h-9.98v10.48H187V28z" fill="currentColor"/></svg>
    </a>
    <MegaMenu />
  </div>
  <div class="spacer"></div>
  <SearchBar />
  <div class="spacer"></div>
  <DarkModeButton />
</header>