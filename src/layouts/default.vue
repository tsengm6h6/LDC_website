<template>
  <div class="w-full">
    <AppHeader />

    <main class="relative mt-[95px] min-h-screen">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      return {}
    },
  })
</script>

<style scoped>
  .banner {
    background-image: url('@/assets/image/banner-2.jpg');
    background-position: center top;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 30%;
  }
</style>
