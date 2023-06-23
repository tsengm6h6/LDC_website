<template>
  <div class="grid-album mt-6 h-[60vh] gap-4 overflow-y-auto pb-4 pr-2 md:grid md:pr-4 md:pt-4">
    <div
      v-for="(item, i) in data"
      :key="`equip-${i}-${item.title}`"
      class="mb-3 mr-2 flex items-center overflow-hidden rounded-lg bg-[#F6F6F6] p-2 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.25)] last:mb-0 md:mb-0 md:p-4">
      <nuxt-img
        loading="lazy"
        :src="usefolderPath(item.src)"
        format="webp"
        width="120px"
        height="120px"
        fit="inside"
        quality="90"
        :alt="alt"
        class="h-16 w-16 rounded bg-white object-contain object-center drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)] md:h-20 md:w-20" />
      <div class="ml-4 flex-1">
        <p class="text-base font-bold md:text-lg">{{ item.title }}</p>
        <p class="mt-1 text-base md:mt-2 md:text-lg">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { usefolderPath } from '~/composables/useAssets'

  defineProps({
    data: {
      type: Array,
      required: true,
    },
  })
</script>

<style scoped>
  @media (min-width: 768px) {
    .grid-album {
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      grid-auto-rows: minmax(100px, 125px);
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #34b1b1;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2f9e9e;
  }
</style>
