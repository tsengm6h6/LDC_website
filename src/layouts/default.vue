<template>
  <div :class="`w-full ${isMenuToggled ? 'overflow-hidden' : 'overflow-auto'}`">
    <div
      :class="`${
        isMenuToggled ? 'block' : 'hidden'
      } fixed z-40 h-screen w-full bg-black/20 backdrop-blur-sm md:z-0 md:hidden`"
      @click="isMenuToggled = false" />
    <AppHeader :is-menu-toggled="isMenuToggled" @toggle-menu="toggleMenu" @scroll-to="scrollTo" />

    <main class="relative min-h-screen">
      <div class="pt-[95px]">
        <slot />
      </div>
    </main>

    <AppFooter />

    <FBCustomerChat id="fb-root" />
  </div>
</template>

<script setup>
  const isMenuToggled = ref(false)
  const toggleMenu = (value) => {
    isMenuToggled.value = value
  }

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 95
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
</script>
