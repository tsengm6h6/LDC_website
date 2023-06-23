<template>
  <div class="relative md:flex md:h-[100vh] md:items-center">
    <IndexContact />
    <nuxt-img
      loading="lazy"
      src="/subtract-front-2.svg"
      alt="overlay"
      class="absolute right-0 top-[60px] -z-10 hidden opacity-80 md:inline-block" />
    <nuxt-img
      loading="lazy"
      src="/subtract-back-2.svg"
      alt="overlay"
      class="absolute bottom-0 left-0 -z-10 hidden opacity-80 md:inline-block" />
  </div>
</template>
