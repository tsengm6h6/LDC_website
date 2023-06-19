<template>
  <div>
    <header :class="`fixed top-0 h-[95px] w-full shadow-sm ${navBackGround} z-40 transition-all`">
      <nav class="container mx-auto flex items-center justify-between px-4">
        <NuxtLink to="/" class="flex items-center py-4 font-bold">
          <img
            src="@/assets/image/logo-dark.svg"
            alt="logo"
            class="w-20 object-contain object-center" />
          <span class="text-2xl font-bold text-main-dark">龍洞岬</span>
        </NuxtLink>
        <ul class="mr-4 hidden flex-1 justify-end gap-1 md:flex">
          <li v-for="(n, i) in nav" :key="`nav-item-${i}-${n.title}`" class="relative p-4">
            <NuxtLink v-if="!n.children" :to="n._path">{{ n.title }}</NuxtLink>
            <div v-else>
              <button class="main-nav relative" @click="toggleSubMenu(i)">
                <NuxtLink class="main-div">{{ n.title }}</NuxtLink>
                <Icon name="ic:baseline-keyboard-arrow-down" size="16px" />
              </button>
              <div
                :class="`${subNavBackGround} subnav absolute -right-[2px] top-[75px] w-full origin-top transform shadow-sm transition-all ${
                  showSubMenu && showSubMenuIndex === i ? 'scale-y-1' : 'scale-y-0'
                }`">
                <ul class="py-2">
                  <li
                    v-for="(c, j) in n.children.filter((o) => o.title !== n.title)"
                    :key="`nav-item-${i}-${j}-${c.title}`"
                    class="text-center">
                    <NuxtLink
                      class="inline-block px-2 py-3 transition-colors duration-300 hover:text-primary"
                      :to="c._path"
                      @click="showSubMenu = false"
                      >{{ c.title }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <button
          class="btn btn-secondary hidden rounded-none rounded-br-20 rounded-tl-20 md:block"
          @click="clickContact">
          聯絡我們
        </button>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary p-2 text-white shadow md:hidden"
          @click="isMenuToggled = true">
          <Icon name="ci:hamburger-md" size="24" color="text-main-bg-white" />
        </button>
      </nav>
    </header>

    <!-- Mobile Modal -->
    <div
      class="modal fixed right-0 top-0 z-40 h-full bg-[#F3DDD4] drop-shadow-lg transition-all md:hidden"
      :class="`${isMenuToggled ? 'w-[60%]' : 'w-0'}`">
      <div v-if="isMenuToggled">
        <!-- Close -->
        <div class="flex justify-end p-4">
          <button
            class="text-2xl text-secondary transition-colors duration-300 hover:text-secondary-dark"
            @click="isMenuToggled = false">
            ×
          </button>
        </div>
        <!-- Mobile Menu -->
        <div class="pt-10 text-base">
          <ul class="mx-auto text-center">
            <li v-for="(n, i) in nav" :key="`nav-item-${i}-${n.title}`" class="py-4">
              <NuxtLink
                v-if="!n.children"
                :to="n._path"
                class="cursor-pointer pr-4 transition-colors duration-300 hover:text-secondary-dark"
                >{{ n.title }}</NuxtLink
              >
              <div v-else class="mx-auto text-center">
                <label
                  class="main-nav relative cursor-pointer transition-colors duration-300 hover:text-secondary-dark"
                  @click="toggleSubMenu(i)">
                  {{ n.title }}
                  <span
                    ><Icon
                      :name="
                        showSubMenu && showSubMenuIndex === i
                          ? 'ic:baseline-keyboard-arrow-up'
                          : 'ic:baseline-keyboard-arrow-down'
                      "
                      size="16px"
                  /></span>
                </label>
                <ul
                  :class="`mt-2 w-full origin-top transform transition-all ${
                    showSubMenu && showSubMenuIndex === i ? 'scale-y-100' : 'max-h-0 scale-y-0'
                  }`">
                  <li
                    v-for="(c, j) in n.children.filter((o) => o.title !== n.title)"
                    :key="`nav-item-${i}-${j}-${c.title}`"
                    class="bg-secondary py-3 text-main-bg-white">
                    <NuxtLink
                      :to="c._path"
                      class="cursor-pointer pr-4 transition-colors duration-300 hover:text-secondary-dark"
                      @click="
                        () => {
                          isMenuToggled = false
                          showSubMenu = false
                        }
                      "
                      >{{ c.title }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="mx-auto px-4 text-center">
            <button
              class="btn btn-secondary mt-10 w-full rounded-none rounded-br-20 rounded-tl-20"
              @click="clickContact">
              聯絡我們
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['scroll-to'])
  const isMenuToggled = ref(false)
  const isTopOfPage = ref(true)

  const clickContact = () => {
    const { path } = useRoute()
    const router = useRouter()
    path === '/' ? emit('scroll-to', 'contact') : router.push('/contactus')
    isMenuToggled.value = false
  }

  const navBackGround = computed(() => {
    return isTopOfPage.value ? 'bg-transparent text-main-dark' : 'bg-main-bg-gray'
  })

  const subNavBackGround = computed(() => {
    return isTopOfPage.value ? 'bg-white text-main-dark' : 'bg-main-bg-gray'
  })

  const handleScroll = () => {
    if (window.scrollY === 0) {
      isTopOfPage.value = true
    } else {
      isTopOfPage.value = false
    }
  }

  const { data: nav } = useAsyncData('navigation', () => fetchContentNavigation())

  const showSubMenu = ref(false)
  const showSubMenuIndex = ref<number | null>(null)

  const toggleSubMenu = (i: number) => {
    if (i === showSubMenuIndex.value) {
      showSubMenu.value = !showSubMenu.value
    } else {
      showSubMenu.value = true
      showSubMenuIndex.value = i
    }
  }

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
</style>
