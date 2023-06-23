<template>
  <footer class="bg-main-bg-dark leading-relaxed tracking-widest text-main-bg-white">
    <div class="container mx-auto px-6 py-12">
      <div class="flex flex-col items-start sm:flex-row sm:justify-between">
        <!-- Left -->
        <div>
          <NuxtLink to="/" class="flex items-center font-bold">
            <AppLogo />
            <span class="text-lg font-bold">龍洞岬</span>
          </NuxtLink>
          <div class="ml-4 mt-1 flex items-center gap-2">
            <a
              href="https://line.me/R/ti/p/%40843eetrw"
              aria-label="Forward to Official Line"
              target="_blank"
              rel="noopener noreferrer"
              class="w-[24px]">
              <nuxt-img
                class="relative top-[2px] text-main-bg-white"
                src="/line-icon.svg"
                loading="lazy"
                alt="line-icon"
                width="20"
                height="20" />
            </a>
            <a
              href="https://www.instagram.com/longdongjia1_7/?hl=en"
              aria-label="Forward to Instagram"
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="ri:instagram-line" size="24" color="#FDFDFD" />
            </a>
            <a
              href="https://www.facebook.com/dragon49/?ref=page_internal"
              aria-label="Forward to Facebook"
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="mdi:facebook-box" size="24" color="#FDFDFD" />
            </a>
          </div>
          <div class="mt-4 text-main-gray">
            <p class="my-1 ml-4 text-sm">新北市貢寮區龍洞街1-5號</p>
            <p class="my-1 ml-4 text-sm">0939-098-057</p>
            <p class="my-1 ml-4 text-sm">longdongcape@gmail.com</p>
          </div>
        </div>
        <!-- Right -->
        <div
          class="ml-5 mt-8 hidden flex-col text-base sm:mt-0 sm:flex sm:w-2/3 sm:flex-row sm:items-start sm:justify-around">
          <!-- 體驗 -->
          <div v-for="(n, i) in nav" :key="`nav-group-${i}-${n.title}`" class="">
            <h5 v-if="!n.children" class="mb-2 font-bold">
              <NuxtLink :to="n._path">{{ n.title }}</NuxtLink>
            </h5>
            <template v-else>
              <h5 class="mb-2 font-bold">{{ n.title }}</h5>
              <ul v-if="n.children" class="text-main-gray sm:block">
                <li
                  v-for="(c, j) in n.children.filter((o) => o.title !== n.title)"
                  :key="`nav-child-${j}-${c.title}`"
                  class="transition-colors duration-300 hover:text-main-bg-white">
                  <NuxtLink :to="c._path">{{ c.title }}</NuxtLink>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
      <!-- copy right -->
      <div class="mt-8 w-full">
        <hr />
        <p class="mt-4 text-center text-xs font-extralight text-main-gray">
          Copyright © 2023 Longdongcape. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const { data: nav } = useAsyncData('navigation', () => fetchContentNavigation())
</script>
