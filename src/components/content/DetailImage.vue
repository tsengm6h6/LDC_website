<template>
  <div class="h-full w-full flex-auto overflow-hidden rounded-tl-60">
    <img
      :src="`/_nuxt/assets/image/${src}`"
      :alt="alt"
      class="h-full w-full object-cover object-center" />
  </div>
</template>

<script setup lang="ts">
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
