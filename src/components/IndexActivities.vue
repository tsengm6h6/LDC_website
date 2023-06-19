<template>
  <section class="bg-main-bg-dark text-main-bg-white">
    <div class="container mx-auto px-6 pt-24">
      <h3 class="mb-4">最豐富的活動選擇</h3>
      <p class="text-base leading-relaxed tracking-wider md:text-lg">
        除了東北角老少閒宜的水上活動浮潛和 SUP 立槳之外，也有潛水專業的 PADI 水肺潛水考證、體驗、FUN
        DIVE、AIDA 自由潛水課程，及挑戰國際級岩場的攀岩體驗，最多樣的選擇等你來嘗試！
      </p>
    </div>
    <!-- Slider -->
    <div class="container mx-auto px-6 pb-14 pt-6">
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
          class="h-[200px] w-full shrink-0 grow-0 cursor-pointer md:w-1/4">
          <div class="overflow-hidden rounded-xl">
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
    '/diving/freediving/aida2',
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
