<template>
  <div class="group relative h-full w-full">
    <NuxtLink :to="{ path, query: { tab: 'detail' } }">
      <img :src="useAssets(src)" :alt="alt" class="h-full w-full object-cover object-center" />
      <div
        :class="`absolute bottom-0 left-0 top-0 hidden h-full w-full cursor-pointer flex-col items-center justify-center lg:flex ${hoverBackgroundStyle} p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-95`">
        <h4 class="text-center text-base font-semibold text-main-bg-dark">{{ title }}</h4>
        <p v-if="descriptionText" class="mt-4 text-center text-base">{{ descriptionText }}</p>
      </div>
      <div
        class="absolute bottom-0 right-0 z-10 rounded-bl-sm rounded-tl-xl bg-primary/80 p-4 text-center md:px-3 md:py-2 lg:hidden">
        <p class="mb-0 text-main-bg-white">{{ title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import useAssets from '~/composables/useAssets'
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      required: true,
    },
    hoverBackgroundStyle: {
      type: String,
      default: 'bg-main-bg-white/90',
    },
  })

  const descriptionText = computed(() => {
    if (props.description.length > 20) {
      return `${props.description.slice(0, 30)}...`
    }
    return props.description
  })
</script>
