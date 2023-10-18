<svelte:head>
	<title>Color Grid &middot; Intraface</title>
</svelte:head>

<article class="mw-16 mi-auto pa-4">
  <hgroup class="grid auto-fill ai-center gap-2">
    <svg class="w-2 h-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1179 19.6138C16.0762 17.6103 14.9173 15.3812 16.6805 14C24.9781 8 22.8067 0 15.4039 0C8.00113 0 2 5.37258 2 12C2 18.6274 8.00113 24 15.4039 24C19.3984 24 18.3387 21.9619 17.1179 19.6138ZM15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2ZM7.5 6C6.11929 6 5 7.11929 5 8.5C5 9.88071 6.11929 11 7.5 11C8.88071 11 10 9.88071 10 8.5C10 7.11929 8.88071 6 7.5 6ZM5 15C5 13.8954 5.89543 13 7 13C8.10457 13 9 13.8954 9 15C9 16.1046 8.10457 17 7 17C5.89543 17 5 16.1046 5 15ZM11.5 18C10.6716 18 10 18.6716 10 19.5C10 20.3284 10.6716 21 11.5 21C12.3284 21 13 20.3284 13 19.5C13 18.6716 12.3284 18 11.5 18Z" fill="currentColor"/>
      <rect x="5" y="6" width="5" height="5" rx="2.5" fill="#D9D9D9" fill-opacity="0.5"/>
      <rect x="12" y="2" width="6" height="6" rx="3" fill="#D9D9D9" fill-opacity="0.5"/>
      <rect x="5" y="13" width="4" height="4" rx="2" fill="#D9D9D9" fill-opacity="0.5"/>
      <rect x="10" y="18" width="3" height="3" rx="1.5" fill="#D9D9D9" fill-opacity="0.5"/>
    </svg>
    <h1>Skins</h1>
  </hgroup>

  <h2 class="mt-4 mb-2">Coloring in Intraface</h2>
  <p>One of Intraface's hidden features are the built-in dark mode setting, where if you append the class "dark" to your body, it will invert the dark and light colors.</p>

  <h3 class="mt-4 mb-2">Unaffected by theme</h3>
  <p class="mb-2">In some cases you may need colors that stay the same regardless of theme.</p>
  <div class="grid col-5 black">
    <div class="br-4 grid place-center h-5 white bg-black">black</div>
    <div class="br-4 grid place-center h-5 bg-white">white</div>
  </div>

  <h3 class="mt-4 mb-2">Affected by theme</h3>
  <p class="mb-2">Following colors are flipped when theme is changed.</p>
  <div class="grid col-5 black-1">
    <div class="br-4 grid place-center h-5 white-1 bg-black-1">black-1</div>
    <div class="br-4 grid place-center h-5 white-1 bg-black-2">black-2</div>
    <div class="br-4 grid place-center h-5 bg-black-3">black-3</div>
    <div class="br-4 grid place-center h-5 bg-black-4">black-4</div>
    <div class="br-4 grid place-center h-5 bg-black-5">black-5</div>
    <div class="br-4 grid place-center h-5 white-1 bg-dark-1">dark-1</div>
    <div class="br-4 grid place-center h-5 white-1 bg-dark-2">dark-2</div>
    <div class="br-4 grid place-center h-5 white-1 bg-dark-3">dark-3</div>
    <div class="br-4 grid place-center h-5 white-1 bg-dark-4">dark-4</div>
    <div class="br-4 grid place-center h-5 white-1 bg-dark-5">dark-5</div>
    <div class="br-4 grid place-center h-5 bg-light-1">light-1</div>
    <div class="br-4 grid place-center h-5 bg-light-2">light-2</div>
    <div class="br-4 grid place-center h-5 bg-light-3">light-3</div>
    <div class="br-4 grid place-center h-5 bg-light-4">light-4</div>
    <div class="br-4 grid place-center h-5 bg-light-5">light-5</div>
    <div class="br-4 grid place-center h-5 bg-white-1">white-1</div>
    <div class="br-4 grid place-center h-5 bg-white-2">white-2</div>
    <div class="br-4 grid place-center h-5 bg-white-3">white-3</div>
    <div class="br-4 grid place-center h-5 bg-white-4">white-4</div>
    <div class="br-4 grid place-center h-5 bg-white-5">white-5</div>
  </div>

  <h3 class="mt-4 mb-2">Palette</h3>
  <p class="mb-2">Intraface's official color palette. <em>These colors are unaffected by theme change.</em></p>
  <div class="grid col-5 black">
    <div class="br-4 grid place-center h-5 bg-blue-1">blue-1</div>
    <div class="br-4 grid place-center h-5 bg-blue-2">blue-2</div>
    <div class="br-4 grid place-center h-5 bg-blue-3">blue-3</div>
    <div class="br-4 grid place-center h-5 white bg-blue-4">blue-4</div>
    <div class="br-4 grid place-center h-5 white bg-blue-5">blue-5</div>
    <div class="br-4 grid place-center h-5 bg-cyan-1">cyan-1</div>
    <div class="br-4 grid place-center h-5 bg-cyan-2">cyan-2</div>
    <div class="br-4 grid place-center h-5 bg-cyan-3">cyan-3</div>
    <div class="br-4 grid place-center h-5 white bg-cyan-4">cyan-4</div>
    <div class="br-4 grid place-center h-5 white bg-cyan-5">cyan-5</div>
    <div class="br-4 grid place-center h-5 bg-grape-1">grape-1</div>
    <div class="br-4 grid place-center h-5 bg-grape-2">grape-2</div>
    <div class="br-4 grid place-center h-5 bg-grape-3">grape-3</div>
    <div class="br-4 grid place-center h-5 white bg-grape-4">grape-4</div>
    <div class="br-4 grid place-center h-5 white bg-grape-5">grape-5</div>
    <div class="br-4 grid place-center h-5 bg-green-1">green-1</div>
    <div class="br-4 grid place-center h-5 bg-green-2">green-2</div>
    <div class="br-4 grid place-center h-5 bg-green-3">green-3</div>
    <div class="br-4 grid place-center h-5 white bg-green-4">green-4</div>
    <div class="br-4 grid place-center h-5 white bg-green-5">green-5</div>
    <div class="br-4 grid place-center h-5 bg-indigo-1">indigo-1</div>
    <div class="br-4 grid place-center h-5 bg-indigo-2">indigo-2</div>
    <div class="br-4 grid place-center h-5 bg-indigo-3">indigo-3</div>
    <div class="br-4 grid place-center h-5 white bg-indigo-4">indigo-4</div>
    <div class="br-4 grid place-center h-5 white bg-indigo-5">indigo-5</div>
    <div class="br-4 grid place-center h-5 bg-lime-1">lime-1</div>
    <div class="br-4 grid place-center h-5 bg-lime-2">lime-2</div>
    <div class="br-4 grid place-center h-5 bg-lime-3">lime-3</div>
    <div class="br-4 grid place-center h-5 bg-lime-4">lime-4</div>
    <div class="br-4 grid place-center h-5 bg-lime-5">lime-5</div>
    <div class="br-4 grid place-center h-5 bg-orange-1">orange-1</div>
    <div class="br-4 grid place-center h-5 bg-orange-2">orange-2</div>
    <div class="br-4 grid place-center h-5 bg-orange-3">orange-3</div>
    <div class="br-4 grid place-center h-5 white bg-orange-4">orange-4</div>
    <div class="br-4 grid place-center h-5 white bg-orange-5">orange-5</div>
    <div class="br-4 grid place-center h-5 bg-pink-1">pink-1</div>
    <div class="br-4 grid place-center h-5 bg-pink-2">pink-2</div>
    <div class="br-4 grid place-center h-5 bg-pink-3">pink-3</div>
    <div class="br-4 grid place-center h-5 white bg-pink-4">pink-4</div>
    <div class="br-4 grid place-center h-5 white bg-pink-5">pink-5</div>
    <div class="br-4 grid place-center h-5 bg-red-1">red-1</div>
    <div class="br-4 grid place-center h-5 bg-red-2">red-2</div>
    <div class="br-4 grid place-center h-5 bg-red-3">red-3</div>
    <div class="br-4 grid place-center h-5 white bg-red-4">red-4</div>
    <div class="br-4 grid place-center h-5 white bg-red-5">red-5</div>
    <div class="br-4 grid place-center h-5 bg-teal-1">teal-1</div>
    <div class="br-4 grid place-center h-5 bg-teal-2">teal-2</div>
    <div class="br-4 grid place-center h-5 bg-teal-3">teal-3</div>
    <div class="br-4 grid place-center h-5 bg-teal-4">teal-4</div>
    <div class="br-4 grid place-center h-5 bg-teal-5">teal-5</div>
    <div class="br-4 grid place-center h-5 bg-violet-1">violet-1</div>
    <div class="br-4 grid place-center h-5 bg-violet-2">violet-2</div>
    <div class="br-4 grid place-center h-5 bg-violet-3">violet-3</div>
    <div class="br-4 grid place-center h-5 white bg-violet-4">violet-4</div>
    <div class="br-4 grid place-center h-5 white bg-violet-5">violet-5</div>
    <div class="br-4 grid place-center h-5 bg-yellow-1">yellow-1</div>
    <div class="br-4 grid place-center h-5 bg-yellow-2">yellow-2</div>
    <div class="br-4 grid place-center h-5 bg-yellow-3">yellow-3</div>
    <div class="br-4 grid place-center h-5 white bg-yellow-4">yellow-4</div>
    <div class="br-4 grid place-center h-5 white bg-yellow-5">yellow-5</div>
  </div>
</article>