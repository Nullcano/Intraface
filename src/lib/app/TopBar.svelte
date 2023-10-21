<script>
  import SearchBar from '$lib/app/SearchBar.svelte'
  import DarkModeButton from '$lib/app/DarkModeButton.svelte'
  import MegaMenu from '$lib/app/MegaMenu.svelte';
</script>

<header class="fixed top-0 w-fill px-3 py-2 flex ai-center gap-1 z-1">
  <div class="grid fill-auto ai-center gap-2">
    <a class="black-1 grid auto-fill ai-center gap-2 u-0" href="/">
      <svg class="w-2 h-2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.2857 17.1429C34.2857 26.6106 26.6106 34.2857 17.1429 34.2857C7.67512 34.2857 0 26.6106 0 17.1429C0 7.67512 7.67512 0 17.1429 0C26.6106 0 34.2857 7.67512 34.2857 17.1429Z" fill="url(#paint0_linear_5_127)"/>
        <path d="M42.8571 8.57143C42.8571 3.83756 46.6947 0 51.4286 0H111.429C116.162 0 120 3.83756 120 8.57143V25.7143C120 30.4482 116.162 34.2857 111.429 34.2857H51.4286C46.6947 34.2857 42.8571 30.4482 42.8571 25.7143V8.57143Z" fill="url(#paint1_linear_5_127)"/>
        <path d="M42.8571 60C42.8571 50.5323 50.5323 42.8571 60 42.8571C69.4677 42.8571 77.1429 50.5323 77.1429 60C77.1429 69.4677 69.4677 77.1429 60 77.1429C50.5323 77.1429 42.8571 69.4677 42.8571 60Z" fill="url(#paint2_linear_5_127)"/>
        <path d="M25.7143 42.8571C30.4482 42.8571 34.2857 46.6947 34.2857 51.4286L34.2857 111.429C34.2857 116.162 30.4482 120 25.7143 120H8.57143C3.83756 120 8.82899e-07 116.162 1.08982e-06 111.429L3.71251e-06 51.4286C3.91943e-06 46.6947 3.83756 42.8571 8.57143 42.8571H25.7143Z" fill="url(#paint3_linear_5_127)"/>
        <defs>
          <linearGradient id="paint0_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--pink-3)"/>
            <stop offset="1" stop-color="var(--blue-3)"/>
          </linearGradient>
          <linearGradient id="paint1_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--pink-3)"/>
            <stop offset="1" stop-color="var(--blue-3)"/>
          </linearGradient>
          <linearGradient id="paint2_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--pink-3)"/>
            <stop offset="1" stop-color="var(--blue-3)"/>
          </linearGradient>
          <linearGradient id="paint3_linear_5_127" x1="4" y1="4" x2="77.5" y2="77.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="var(--pink-3)"/>
            <stop offset="1" stop-color="var(--blue-3)"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="h-1" viewBox="0 0 51 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.54612e-06 7L0 0H3L3 1H1V6H3L3 7H2.54612e-06Z" fill="currentColor"/>
        <path d="M5.5 1.5L7 7H9V0H8V5.5H7.5L6 0H4V7H5V1.5H5.5Z" fill="currentColor"/>
        <path d="M12 7V1H10V0H15V1H13V7H12Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H18.2857L20 7H21L19.282 3.99343C20.5633 3.93023 21 3.40177 21 2C21 0.5 20.5 0 19 0H16V3H17V4ZM18.5 3H17V1H18.5C20 1 20 1.5 20 2C20 2.5 20 3 18.5 3Z" fill="currentColor"/>
        <path d="M16 4V7H17V4H16Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 0H24.5L22 7H23L23.6667 5H26.3333L27 7H28L25.5 0ZM26 4L25 1L24 4H26Z" fill="currentColor"/>
        <path d="M30 7H29V4H30V7Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 3V1H34V0H29V3H30ZM30 3H33V4H30V3Z" fill="currentColor"/>
        <path d="M44 7C42 7 41 5.98082 41 3.49041C41 1 42 0 44 0H46V1H44C42.5 1 42 2 42 3.5C42 5 42.5 6 44 6H46V7H44Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 7L36.5 0H37.5L40 7H39L38.3333 5H35.6667L35 7H34ZM37 1L38 4H36L37 1Z" fill="currentColor"/>
        <path d="M47 0V1H50V3H48V4H50V6H47V7H51V4H50V3H51V0H47Z" fill="currentColor"/>
      </svg>
    </a>
    <MegaMenu />
  </div>
  <div class="spacer"></div>
  <SearchBar />
  <div class="spacer"></div>
  <DarkModeButton />
</header>