<template>
  <div class="h-full w-full flex-auto overflow-hidden rounded-tl-60">
    <img :src="useAssets(src)" :alt="alt" class="h-full w-full object-cover object-center" />
  </div>
</template>

<script setup lang="ts">
  import useAssets from '~/composables/useAssets'
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
