<template>
  <button
    class="relative cursor-pointer rounded-tl-[15px] bg-primary py-2 pl-8 pr-6 text-main-bg-white md:hidden"
    @click="toggleMenu">
    {{ currMenu }}
    <Icon
      v-if="showMenu"
      name="ic:outline-keyboard-arrow-up"
      size="16"
      color="text-main-bg-white"></Icon>
    <Icon v-else name="ic:outline-keyboard-arrow-down" size="16" color="text-main-bg-white"></Icon>
    <ul
      v-if="showMenu"
      class="absolute left-0 top-[100%] z-10 w-full bg-main-bg-white py-2 text-main-dark shadow-sm">
      <li v-for="(sub, i) in subMenu" :key="`submenu-${i}-${sub.title}`" class="">
        <NuxtLink :to="sub._path" class="inline-block w-full px-4 py-2 hover:bg-main-gray">{{
          sub.title
        }}</NuxtLink>
      </li>
    </ul>
  </button>
</template>

<script setup lang="ts">
  interface SubMenuItem {
    title: string
    _path: string
  }

  const props = defineProps<{
    subMenu?: SubMenuItem[]
    path: string
  }>()

  const showMenu = ref(false)
  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const currMenu = computed(() => {
    return props.subMenu?.find((el) => el._path === props.path)?.title || '選擇頁面'
  })
</script>
