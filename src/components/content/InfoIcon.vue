<template>
  <div class="col-span-4 justify-self-start md:col-span-2">
    <div class="flex items-center justify-center">
      <div
        :class="`flex h-[48px] w-[48px] min-w-[48px] items-center justify-center rounded-full ${iconStyle}`">
        <Icon :name="props.icon" size="24" :color="color" />
      </div>
      <div class="ml-4">
        <h5 class="text-base font-medium">{{ props.title }}</h5>
        <p class="text-base">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
    color: {
      type: String,
      required: false,
      default: 'text-main-bg-white',
    },
  })

  const iconStyle = computed(() => {
    switch (props.type) {
      case 'primary':
        return 'bg-[#34b1b1] text-white'
      case 'normal':
        return 'bg-[#D9D9D9] text-[#3F3E3E]'
    }
  })
</script>

<style scoped></style>
