<div class="fixed top-0 w-fill h-fill z-0">
  <div class="blue-orb"></div>
  <div class="pink-orb"></div>
</div>

<div class="relative w-fill vh-8 mw-14 mi-auto flex flex-col pc-center gap-3">
  <div class="fs-8 lh-1">What's in a landing page?</div>
  <div class="fs-7 lh-1">
    Create one yourself with <code class="pa-2 br-3 fs-6 bg-black-4 light-1">.<strong>intraface</strong><span class="blue-3">::before</span></code> 
    your coffee is done. <a class="fs-5 u-0 pink-3" href="/about">(Eventually...)</a>
  </div>
  <div class="mt-4 pa-3 br-4 flex gap-3 ai-center pc-center bg-blue-5">
    <span class="fs-3 white">Try it out with</span>
    <pre class="mw-8 px-3 py-2 br-2 bg-light-3 b-all bw-1 b-black-5"><code>&lt;link href="https://intraface.io/if.min.css" rel="stylesheet"&gt;</code></pre>
    <span class="fs-3 white">or</span>
    <a class="px-3 py-2 br-3 bg-blue-3 white b-all bw-3 b-light-3 u-0" href="../if.min.css">Download</a>
  </div>
</div>

<style>
  .blue-orb, .pink-orb {
    position: absolute;
    width: 100vw;
    height: 100vh;
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    opacity: .2;
    filter: blur(2rem);
  }
  .blue-orb {
    background-color: var(--blue-3);
    animation: moveOrb 20s linear infinite;
  }
  .pink-orb {
    background-color: var(--pink-3);
    animation: moveOrb2 20s linear infinite;
    animation-delay: -10s;
  }
  @keyframes moveOrb {
    0% {
      transform: rotate(0deg) translate(50%) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(50%) rotate(360deg);
    }
  }
  @keyframes moveOrb2 {
    0% {
      transform: rotate(0deg) translate(50%) rotate(0deg);
    }
    100% {
      transform: rotate(-360deg) translate(50%) rotate(-360deg);
    }
  }
</style>