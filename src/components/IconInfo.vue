<template>
  <div class="flex items-center justify-center">
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9] md:h-[60px] md:w-[60px]">
      <Icon :name="props.icon" size="30" color="#3F3E3E" />
    </div>
    <div class="ml-4 text-base leading-relaxed tracking-wider">
      <p class="font-medium">{{ props.title }}</p>
      <p class="">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  })
</script>
