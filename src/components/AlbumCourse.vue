<template>
  <div class="mt-6 h-[60vh] overflow-y-auto pr-2">
    <div class="grid grid-cols-6 gap-2">
      <div
        v-for="(course, i) in data"
        :key="`image-${i}-${course.src}`"
        class="col-span-full overflow-hidden rounded-tl-30 sm:col-span-3 lg:col-span-2">
        <HoverImage v-bind="course" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  type Image = {
    src: string
    alt: string
    title: string
    description: string
    path: string
  }

  defineProps({
    data: {
      type: Array<Image>,
      required: true,
    },
  })
</script>

<style scoped>
  /* @media (min-width: 768px) {
    .grid-album {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: minmax(220px, 1fr);
    }
  } */

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
