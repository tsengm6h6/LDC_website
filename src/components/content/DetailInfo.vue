<template>
  <!-- Info -->
  <div class="mt-8 flex flex-col gap-8 md:flex-row">
    <!-- Image -->
    <div class="md:min-h-[519px] md:w-1/2">
      <DetailImage :src="src" :alt="alt" />
    </div>
    <!-- Info -->
    <div class="flex flex-col items-start justify-between md:w-1/2">
      <h1 class="text-xl md:text-2xl">
        {{ title }}
      </h1>
      <span
        v-if="tag"
        class="-ml-1 mt-2 rounded bg-danger-light px-2 py-1 text-sm font-medium tracking-normal text-danger"
        >{{ tag }}</span
      >
      <div class="mb-4 mt-8 flex flex-1 flex-col items-start justify-start gap-6">
        <!-- Icon Info -->
        <slot />
      </div>
      <button class="btn btn-secondary mt-4 w-full md:mt-0">立即報名</button>
    </div>
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
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: '',
    },
  })
</script>
