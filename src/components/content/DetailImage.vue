<template>
  <div class="h-full w-full flex-auto overflow-hidden rounded-tl-60">
    <nuxt-img
      preload
      :src="usefolderPath(src)"
      format="webp"
      sizes="sm:300px md:350px lg:800px"
      :alt="alt"
      class="h-full w-full object-cover object-center" />
  </div>
</template>

<script setup>
  import { usefolderPath } from '~/composables/useAssets'

  defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  })
</script>
