<template>
  <div
    class="flex flex-col h-full w-full justify-center items-center p-4"
    role="alert"
    aria-labelledby="error-heading"
  >
    <h1
      id="error-heading"
      class="text-red-500 font-semibold leading-none text-center text-5xl sm:text-7xl md:text-8xl xl:text-9xl"
    >
      <span class="block">We're sorry, Champ!</span>
      <span class="block">Page was not found!</span>
    </h1>
    <img
      src="@/assets/photos/404-hero.webp"
      alt="halftone-image-young-boxer-looking-up"
      class="absolute h-full object-cover opacity-20 -z-10 right-2"
      aria-hidden="true"
    />
  </div>
</template>


