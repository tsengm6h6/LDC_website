<template>
  <div>
    <div :class="`fixed right-0 top-0 flex w-full ${navBackGround} z-30 shadow-sm md:hidden`">
      <div class="container mx-auto flex items-center justify-between px-4 md:w-full">
        <NuxtLink to="/" class="flex items-center py-4 font-bold md:py-0">
          <img
            src="@/assets/image/logo-gray.png"
            alt="logo"
            class="w-14 object-contain object-center md:w-20" />
          <span class="text-xl font-bold text-main-dark">龍洞岬</span>
        </NuxtLink>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary p-2 text-white shadow md:hidden"
          @click="emit('toggle-menu', true)">
          <Icon name="ci:hamburger-md" size="24" color="text-main-bg-white" />
        </button>
      </div>
    </div>
    <header
      :class="`fixed right-0 top-0 ${
        isMenuToggled ? 'z-50 w-[60%] opacity-100' : 'z-0 w-0 opacity-0 md:z-50 md:opacity-100'
      } md:w-full md:shadow-sm md:${navBackGround} origin-right transition-all duration-300`">
      <nav
        :class="`relative bg-main-bg-white shadow-sm transition-all delay-100 duration-200 ${
          isMenuToggled ? '' : ''
        }`">
        <div class="container mx-auto flex items-center px-4 md:w-full">
          <NuxtLink
            to="/"
            class="ml-auto flex items-center py-4 font-bold md:ml-0 md:py-0"
            @click="emit('toggle-menu', false)">
            <img
              src="@/assets/image/logo-gray.png"
              alt="logo"
              class="w-14 object-contain object-center md:w-20" />
            <span class="text-2xl font-bold text-main-dark md:inline">龍洞岬</span>
          </NuxtLink>
          <ul
            class="absolute left-0 right-0 top-full ml-auto h-screen bg-main-bg-white px-2 py-4 shadow-lg md:relative md:flex md:h-auto md:space-x-1 md:py-0 md:shadow-none lg:space-x-2">
            <li v-for="(n, i) in nav" :key="`nav-item-${i}-${n.title}`" class="parent relative">
              <NuxtLink
                v-if="!n.children"
                :to="n._path"
                class="flex items-center justify-between space-x-1 p-2 hover:bg-main-bg-gray md:inline-flex md:h-[90px] lg:space-x-2 lg:p-4">
                {{ n.title }}
              </NuxtLink>
              <span
                v-else
                :to="n._path"
                class="hidden cursor-pointer items-center justify-between space-x-1 p-2 hover:bg-main-bg-gray md:inline-flex md:h-[90px] lg:space-x-2 lg:p-4">
                <span>{{ n.title }}</span>
                <Icon name="ic:baseline-keyboard-arrow-down" size="16" color="text-main-dark" />
              </span>
              <ul
                v-if="n.children"
                class="child right-0 top-full bg-main-bg-white transition duration-300 md:absolute md:w-40 md:rounded-b md:shadow-lg">
                <li
                  v-for="(c, j) in n.children.filter((o) => o.title !== n.title)"
                  :key="`nav-item-${i}-${j}-${c.title}`">
                  <NuxtLink
                    :to="c._path"
                    class="flex h-[50px] items-center justify-center px-4 py-3 hover:bg-main-bg-gray"
                    @click="emit('toggle-menu', false)">
                    {{ c.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <span class="flex items-center justify-center p-2 md:inline-flex md:h-[90px]">
                <button
                  class="btn btn-secondary rounded-none rounded-br-20 rounded-tl-20 md:block"
                  @click.stop.prevent="clickContact">
                  關於我們
                </button>
              </span>
            </li>
          </ul>
          <div
            class="ml-auto cursor-pointer font-bold text-secondary transition-colors duration-300 hover:text-secondary-dark md:hidden"
            @click="emit('toggle-menu', false)">
            <Icon name="maki:cross" size="20" />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
  defineProps({
    isMenuToggled: {
      type: Boolean,
      required: true,
    },
  })

  const emit = defineEmits(['scroll-to', 'toggle-menu'])
  const isTopOfPage = ref(true)

  const clickContact = () => {
    const { path } = useRoute()
    const router = useRouter()
    path === '/' ? emit('scroll-to', 'contact') : router.push('/contactus')
    emit('toggle-menu', false)
  }

  const navBackGround = computed(() => {
    return isTopOfPage.value ? 'bg-transparent text-main-dark' : 'bg-main-bg-gray'
  })

  const handleScroll = () => {
    if (window.scrollY === 0) {
      isTopOfPage.value = true
    } else {
      isTopOfPage.value = false
    }
  }

  const { data: nav } = useAsyncData('navigation', () => fetchContentNavigation())

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  .router-link-exact-active {
    color: #34b1b1;
  }

  .modal .router-link-exact-active {
    color: #3f3e3e;
  }

  .overlay {
    opacity: 0.65;
  }

  @media screen and (min-width: 768px) {
    .parent:hover .child {
      opacity: 1;
      height: auto;
      overflow: hidden;
      transform: translateY(0);
    }
    .child {
      opacity: 0;
      height: 0;
      overflow: hidden;
      transform: translateY(-10%);
    }
  }
</style>
