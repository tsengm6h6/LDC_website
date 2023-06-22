<template>
  <!-- left -->
  <div class="hidden pl-12 pr-8 pt-16 md:block">
    <ul>
      <li
        v-for="(sub, i) in subMenu"
        :key="`submenu-${i}-${sub.title}`"
        class="px-4 py-2 transition-colors duration-300 hover:text-primary"
        :class="{ 'text-primary': sub._path === path }">
        <NuxtLink :to="sub._path">{{ sub.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  defineProps({
    subMenu: {
      type: Array,
      default: () => [],
    },
    path: {
      type: String,
      required: true,
    },
  })
</script>
