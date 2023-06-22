<template>
  <div class="feature-card w-full md:w-1/3">
    <div class="flex items-center">
      <span
        class="mr-2 flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-primary text-white">
        <Icon :name="icon" size="24px" />
      </span>
      <h4>{{ feature }}</h4>
    </div>
    <p class="mt-4 text-base leading-relaxed tracking-wider md:text-lg">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
</script>
