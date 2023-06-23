<template>
  <div class="mt-6 min-h-[75vh] overflow-y-auto pr-2 pt-2 md:h-[61vh]">
    <div class="grid grid-cols-6 gap-2 md:gap-3">
      <div
        v-for="(course, i) in data"
        :key="`image-${i}-${course.src}`"
        class="col-span-full h-[240px] min-w-[240px] overflow-hidden rounded-xl sm:col-span-3 lg:col-span-2">
        <HoverImage v-bind="course" :hover-background-style="'bg-secondary'" />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    data: {
      type: Array,
      required: true,
    },
  })
</script>

<style scoped>
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
  }
</style>
