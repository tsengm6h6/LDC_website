<template>
  <section class="section bg-main-bg-dark text-main-bg-white">
    <div class="container mx-auto px-6 pt-12 lg:pt-24">
      <h3 class="mb-4">最豐富的活動選擇</h3>
      <p class="text-base leading-relaxed tracking-wide md:text-lg">
        想走出戶外又不知道如何開始嗎？
        龍洞岬裝備中心提供多種不同選擇，不論你是新手入門還是冒險老手，和我們一起上山下海，體驗不一樣的東北角！
      </p>
    </div>
    <!-- Slider -->
    <div class="container mx-auto px-6 pb-6 pt-6 lg:pb-14">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !transition-all !duration-800',
          bulletActiveClass:
            'swiper-pagination-bullet-active !w-8 !rounded !bg-main-bg-gray !opacity-20',
        }"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }">
        <SwiperSlide
          v-for="(data, i) in dataWithImage"
          :key="`course-${i}-${data.title}`"
          class="w-full shrink-0 grow-0 cursor-pointer md:w-1/4">
          <div class="h-[300px] w-full overflow-hidden rounded-xl md:h-[200px]">
            <HoverImage :src="data.src" :title="data.title" :alt="data.alt" :path="data.path" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { data: courses } = await useAsyncData('courses', () =>
    queryContent().only(['title', 'img', '_path']).find()
  )

  const highlight = [
    '/experience/snorkeling/snorkeling-long',
    '/experience/snorkeling/snorkeling-short',
    '/experience/sup/sup-long',
    '/experience/sup/sup-short',
    '/diving/scubadiving/experience',
    '/diving/scubadiving/open-water',
    '/diving/scubadiving/fundive-long',
  ]

  const dataWithImage = courses.value
    ?.filter((course) => highlight.includes(course._path))
    .map((course) => ({
      src: course.img,
      alt: 'activity-image',
      title: course.title,
      path: course._path,
    }))
</script>

<style scoped>
  ::v-deep.swiper {
    padding-bottom: 40px !important;
    border-radius: 12px !important;
  }
</style>
