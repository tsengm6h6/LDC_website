<template>
  <!-- Hero -->
  <section class="md:pt-[55px]">
    <div class="flex min-h-[55vh] justify-center lg:min-h-[45vh]">
      <div
        class="hero-bg animate__animated animate__fadeIn relative px-6 md:w-11/12 md:px-0 lg:w-3/4">
        <!-- 文字區 -->
        <div class="py-8 pl-4 md:w-4/5 lg:w-2/3">
          <p class="text-base font-semibold tracking-wider text-main-dark opacity-80">
            # LONGDONGCAPE
          </p>
          <h1 class="animate__animated animate__bounceInDown m-0">
            <span class="relative">
              <span
                class="animate__animated animate__lightSpeedInLeft animate__faster animate__delay-1s absolute -left-4 bottom-0 block h-[24px] w-[130%] bg-highlight"
                aria-hidden="true"></span>
              <span class="relative inline-block first-letter:text-[36px] md:first-letter:text-7xl"
                >龍洞岬</span
              >
            </span>
            <br />裝備與潛水中心
          </h1>
          <h2 class="animate__animated animate__fadeIn mt-2 md:w-1/2 lg:w-3/4">
            提供東北角浮潛、SUP、自由潛水、水肺潛水課程與各式裝備租借
          </h2>
          <button
            class="animate__animated animate__fadeIn btn btn-primary btn-lg group relative mt-12 w-full animate-bounce md:mt-12 md:w-auto"
            @click="emit('scroll-to', 'feature')">
            <span
              class="triangle absolute transition-colors duration-300 group-hover:border-b-[#2f9e9e]"
              aria-hidden="true"></span>
            查看更多
          </button>
          <div class="mt-12 hidden items-center md:flex md:gap-2 lg:gap-4">
            <span
              class="mr-2 flex h-12 w-12 min-w-[48px] items-center justify-center overflow-hidden rounded-full bg-main-bg-gray text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:transform">
              <Icon name="mdi:diving-scuba-mask" size="32px" color="#abaaaa" />
            </span>
            <span
              class="mr-2 flex h-12 w-12 min-w-[48px] items-center justify-center overflow-hidden rounded-full bg-main-bg-gray text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:transform">
              <Icon
                name="game-icons:mountain-climbing"
                size="45px"
                color="#abaaaa"
                class="relative -right-2 -top-[1px]" />
            </span>
            <span
              class="mr-2 flex h-12 w-12 min-w-[48px] items-center justify-center overflow-hidden rounded-full bg-main-bg-gray text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:transform">
              <Icon name="ic:round-scuba-diving" size="32px" color="#abaaaa" />
            </span>
            <span
              class="mr-2 flex h-12 w-12 min-w-[48px] items-center justify-center overflow-hidden rounded-full bg-main-bg-gray text-white shadow-md transition-transform duration-200 hover:-translate-y-1 hover:transform">
              <Icon name="mdi:diving-scuba-tank" size="32px" color="#abaaaa" />
            </span>
          </div>
        </div>
        <img
          src="@/assets/image/substract-front-xs.svg"
          alt="overlay"
          class="animate__animated animate__slideInRight absolute right-0 top-[4%] md:hidden" />
        <img
          src="@/assets/image/substract-back-xs.svg"
          alt="overlay"
          class="animate__animated animate__slideInLeft absolute bottom-[12px] left-0 md:hidden" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const emit = defineEmits(['scroll-to'])
</script>

<style scoped>
  @media (min-width: 768px) {
    .hero-bg {
      background-image: url('@/assets/image/hero-bg.png');
      border-top-right-radius: 80px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
  }

  .triangle {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent #34b1b1 transparent;
    transform: rotate(180deg) translateX(50%);
    top: 100%;
    left: 50%;
    color: #abaaaa;
  }
</style>
