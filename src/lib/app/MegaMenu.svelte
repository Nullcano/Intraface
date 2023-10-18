<script>
  import { browser } from '$app/environment';

  let menuIsOpen = false

  function toggleMegaMenu() {
    menuIsOpen = !menuIsOpen
    scrollable = !scrollable
  }

  let scrollTop = null;
  let scrollLeft = null;

  function disableScroll() {
    if (browser) {
      scrollTop = 
          window.scrollY || window.document.documentElement.scrollTop;
      scrollLeft = 
          window.scrollX || window.document.documentElement.scrollLeft,
          window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
    }};
  }

  function enableScroll() {
    if (browser) {
      window.onscroll = function() {};
    }
  };

  $: if (menuIsOpen) {
    disableScroll();
  } else {
    enableScroll();
  }
</script>

<button on:click={toggleMegaMenu} class="w-2 h-2">
  <div class="w-1 b-bottom bw-2 b-black-1"></div>
  <div class="mt-2 w-2 b-bottom bw-2 b-black-1"></div>
</button>

{#if menuIsOpen}
  <div role="tab" class="fixed top-0 left-0 w-fill vh-8 point z-2" on:click={toggleMegaMenu} on:keydown={toggleMegaMenu} tabindex="0">
    <div class="ma-3 pa-4 vh-5 bg-light-1 b-all bw-1 b-light-4 br-3">
      <h2 class="mb-3">Explore Intraface</h2>
      <div class="flex">
        <div class="grid col-3 gap-3">
          <a href="/" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
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
            </div>
            <span class="fs-3 lh-1">Intraface</span>
          </a>
          <a href="/plugins" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
              <svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11V15L12 21L24 15V11L12 17L0 11Z" fill="currentColor" fill-opacity="0.5"/>
                <path d="M6 8L0 11L12 17L24 11L18 8V10C18 11.6569 15.3137 13 12 13C8.68629 13 6 11.6569 6 10V8Z" fill="currentColor"/>
                <path d="M17 9.5C17 10.8807 14.7614 12 12 12C9.23858 12 7 10.8807 7 9.5V5.5H17V9.5Z" fill="currentColor" fill-opacity="0.5"/>
                <path d="M17 5.5C17 6.88071 14.7614 8 12 8C9.23858 8 7 6.88071 7 5.5C7 4.11929 9.23858 3 12 3C14.7614 3 17 4.11929 17 5.5Z" fill="currentColor"/>
              </svg>
            </div>
            <span class="fs-3 lh-1">Plugins</span>
          </a>
          <a href="/theming" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
              <svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 23C1 23.5523 1.44772 24 2 24H10C10.5523 24 11 23.5523 11 23V23C11 22.4477 10.5523 22 10 22H5.5C5.22386 22 5 21.7761 5 21.5V21.5C5 21.2239 5.22386 21 5.5 21H10.5C10.7761 21 11 20.7761 11 20.5V20.5C11 20.2239 10.7761 20 10.5 20H9.5C9.22386 20 9 19.7761 9 19.5V19.5C9 19.2239 9.22386 19 9.5 19H10.5C10.7761 19 11 18.7761 11 18.5V18.5C11 18.2239 10.7761 18 10.5 18H9.5C9.22386 18 9 17.7761 9 17.5V17.5C9 17.2239 9.22386 17 9.5 17H10.5C10.7761 17 11 16.7761 11 16.5V16.5C11 16.2239 10.7761 16 10.5 16H7.5C7.22386 16 7 15.7761 7 15.5V15.5C7 15.2239 7.22386 15 7.5 15H10.5C10.7761 15 11 14.7761 11 14.5V14.5C11 14.2239 10.7761 14 10.5 14H9.5C9.22386 14 9 13.7761 9 13.5V13.5C9 13.2239 9.22386 13 9.5 13H10.5C10.7761 13 11 12.7761 11 12.5V12.5C11 12.2239 10.7761 12 10.5 12H9.5C9.22386 12 9 11.7761 9 11.5V11.5C9 11.2239 9.22386 11 9.5 11H10.5C10.7761 11 11 10.7761 11 10.5V10.5C11 10.2239 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V9.5C5 9.22386 5.22386 9 5.5 9H10.5C10.7761 9 11 8.77614 11 8.5V8.5C11 8.22386 10.7761 8 10.5 8H9.5C9.22386 8 9 7.77614 9 7.5V7.5C9 7.22386 9.22386 7 9.5 7H10.5C10.7761 7 11 6.77614 11 6.5V6.5C11 6.22386 10.7761 6 10.5 6H9.5C9.22386 6 9 5.77614 9 5.5V5.5C9 5.22386 9.22386 5 9.5 5H10.5C10.7761 5 11 4.77614 11 4.5V4.5C11 4.22386 10.7761 4 10.5 4H7.5C7.22386 4 7 3.77614 7 3.5V3.5C7 3.22386 7.22386 3 7.5 3H10.5C10.7761 3 11 2.77614 11 2.5V2.5C11 2.22386 10.7761 2 10.5 2H8.5C8.22386 2 8 1.77614 8 1.5V1.5C8 1.22386 8.22386 1 8.5 1H10.5C10.7761 1 11 0.776142 11 0.5V0.5C11 0.223858 10.7761 0 10.5 0H2C1.44772 0 1 0.447715 1 1V23Z" fill="currentColor"/>
                <path d="M19 24H17C16.4477 24 16 23.5523 16 23V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V23C20 23.5523 19.5523 24 19 24Z" fill="currentColor"/>
                <path d="M13 7C13 9.3891 15 11 17 11H19C21 11 23 9 23 7C23 5 21.7187 5.2678 20 4C18.2813 2.7322 18 2 18 0L17.3117 0.9177C15.8095 2.9206 13 4.4964 13 7Z" fill="currentColor" fill-opacity="0.5"/>
              </svg>
            </div>
            <span class="fs-3 lh-1">Theming</span>
          </a>
          <a href="/semantics" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
              <svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.8613V11.1207L7.76179 7.71778V10.5954L2.81678 12.4682L2.90024 12.3312V12.6509L2.81678 12.5139L7.76179 14.3866V17.2643L0 13.8613Z" fill="currentColor"/>
                <path d="M14.942 5L11.4992 19H9.05803L12.5008 5H14.942Z" fill="currentColor" fill-opacity="0.5"/>
                <path d="M24 13.8613L16.2382 17.2643V14.3866L21.1832 12.5139L21.0998 12.6509V12.3312L21.1832 12.4682L16.2382 10.5954V7.71778L24 11.1207V13.8613Z" fill="currentColor"/>
              </svg>
            </div>
            <span class="fs-3 lh-1">Semantics</span>
          </a>
          <a href="/skins" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
              <svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1179 19.6138C16.0762 17.6103 14.9173 15.3812 16.6805 14C24.9781 8 22.8067 0 15.4039 0C8.00113 0 2 5.37258 2 12C2 18.6274 8.00113 24 15.4039 24C19.3984 24 18.3387 21.9619 17.1179 19.6138ZM15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2ZM7.5 6C6.11929 6 5 7.11929 5 8.5C5 9.88071 6.11929 11 7.5 11C8.88071 11 10 9.88071 10 8.5C10 7.11929 8.88071 6 7.5 6ZM5 15C5 13.8954 5.89543 13 7 13C8.10457 13 9 13.8954 9 15C9 16.1046 8.10457 17 7 17C5.89543 17 5 16.1046 5 15ZM11.5 18C10.6716 18 10 18.6716 10 19.5C10 20.3284 10.6716 21 11.5 21C12.3284 21 13 20.3284 13 19.5C13 18.6716 12.3284 18 11.5 18Z" fill="currentColor"/>
                <rect x="5" y="6" width="5" height="5" rx="2.5" fill="currentColor" fill-opacity="0.5"/>
                <rect x="12" y="2" width="6" height="6" rx="3" fill="currentColor" fill-opacity="0.5"/>
                <rect x="5" y="13" width="4" height="4" rx="2" fill="currentColor" fill-opacity="0.5"/>
                <rect x="10" y="18" width="3" height="3" rx="1.5" fill="currentColor" fill-opacity="0.5"/>
              </svg>
            </div>
            <span class="fs-3 lh-1">Skins</span>
          </a>
          <a href="/about" class="pa-3 br-3 bg-light-2 flex flex-col ai-center gap-2 u-0">
            <div class="w-4 h-4 br-3 bg-white-4 grid pc-center">
              <svg class="w-2 h-2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.2857 17.1429C34.2857 26.6106 26.6106 34.2857 17.1429 34.2857C7.67512 34.2857 0 26.6106 0 17.1429C0 7.67512 7.67512 0 17.1429 0C26.6106 0 34.2857 7.67512 34.2857 17.1429Z" fill="currentColor"/>
                <path d="M42.8571 8.57143C42.8571 3.83756 46.6947 0 51.4286 0H111.429C116.162 0 120 3.83756 120 8.57143V25.7143C120 30.4482 116.162 34.2857 111.429 34.2857H51.4286C46.6947 34.2857 42.8571 30.4482 42.8571 25.7143V8.57143Z" fill="currentColor"/>
                <path d="M42.8571 60C42.8571 50.5323 50.5323 42.8571 60 42.8571C69.4677 42.8571 77.1429 50.5323 77.1429 60C77.1429 69.4677 69.4677 77.1429 60 77.1429C50.5323 77.1429 42.8571 69.4677 42.8571 60Z" fill="currentColor"/>
                <path d="M25.7143 42.8571C30.4482 42.8571 34.2857 46.6947 34.2857 51.4286L34.2857 111.429C34.2857 116.162 30.4482 120 25.7143 120H8.57143C3.83756 120 8.82899e-07 116.162 1.08982e-06 111.429L3.71251e-06 51.4286C3.91943e-06 46.6947 3.83756 42.8571 8.57143 42.8571H25.7143Z" fill="currentColor"/>
              </svg>
            </div>
            <span class="fs-3 lh-1">About</span>
          </a>
        </div>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
{/if}