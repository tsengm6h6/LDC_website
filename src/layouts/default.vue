<template>
  <div :class="`w-full ${isMenuToggled ? 'overflow-hidden' : 'overflow-auto'}`">
    <div
      :class="`${
        isMenuToggled ? 'block' : 'hidden'
      } fixed z-40 h-screen w-full bg-black/20 backdrop-blur-sm md:z-0 md:hidden`"></div>
    <AppHeader :is-menu-toggled="isMenuToggled" @toggle-menu="toggleMenu" @scroll-to="scrollTo" />

    <main class="relative min-h-screen">
      <div class="pt-[95px]">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  const isMenuToggled = ref(false)
  const toggleMenu = (value: boolean) => {
    isMenuToggled.value = value
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 95
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
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
