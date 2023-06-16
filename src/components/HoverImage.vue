<template>
  <div class="group relative h-full w-full">
    <NuxtLink :to="{ path, query: { tab: 'detail' } }">
      <img
        :src="`/_nuxt/assets/image/${src}`"
        :alt="alt"
        class="h-full w-full object-cover object-center" />
      <div
        class="absolute bottom-0 left-0 top-0 flex h-full w-full cursor-pointer flex-col items-center justify-center bg-secondary p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-95">
        <h4 class="text-center text-base font-semibold">{{ title }}</h4>
        <p v-if="descriptionText" class="mt-4 text-center text-base">{{ descriptionText }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
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
  })

  const descriptionText = computed(() => {
    if (props.description.length > 30) {
      return `${props.description.slice(0, 30)}...`
    }
    return props.description
  })
</script>
