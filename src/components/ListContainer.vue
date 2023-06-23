<template>
  <div>
    <div class="container relative mx-auto py-8 md:px-6 md:py-12">
      <SubMenuButton :sub-menu="subMenu" :path="path" />
      <div
        class="relative min-h-[80vh] max-w-full rounded-br-30 border-b-[24px] border-b-secondary bg-main-bg-gray md:rounded-tl-30">
        <span
          class="absolute left-0 top-0 z-10 hidden h-[5%] w-[180px] rounded-tl-30 bg-primary md:inline-block"></span>
        <div class="flex">
          <!-- left -->
          <SubMenuSide :sub-menu="subMenu" :path="path" />
          <!-- right -->
          <div class="flex-1 px-2 py-8 md:px-4 md:py-10 md:pb-16">
            <!-- Breadcrumb -->
            <BreadcrumbNav />
            <h1 class="mt-10 text-2xl">
              <span class="relative">
                <span class="absolute -bottom-1 left-0 h-12 w-12 rounded-tr-30 bg-highlight"></span>
                <span class="animate__animated animate__fadeIn relative pl-4">{{ title }}</span>
              </span>
            </h1>
            <slot />
          </div>
        </div>
      </div>
    </div>
    <nuxt-img
      loading="lazy"
      src="/subtract-front-2.svg"
      alt="overlay"
      class="absolute right-0 top-[100px] hidden opacity-80 lg:inline-block" />
    <nuxt-img
      loading="lazy"
      src="/subtract-back-2.svg"
      alt="overlay"
      class="absolute bottom-[72px] left-0 hidden opacity-80 lg:inline-block" />
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  })

  const { path } = useRoute()

  // subMenu
  const { data: nav } = useAsyncData('navigation', () => fetchContentNavigation())

  const subMenu = nav.value?.reduce((prev, curr) => {
    if (!curr.children) {
      return [...prev, { title: curr.title, _path: curr._path }]
    }
    const child = curr.children
      .filter((o) => o.title !== curr.title)
      .map((o) => ({ title: o.title, _path: o._path }))
    return [...prev, ...child]
  }, [])
</script>

<style scoped>
  @media (min-width: 768px) {
    .grid-album {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: minmax(220px, 1fr);
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
