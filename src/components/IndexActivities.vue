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
    <div class="mt-12 w-full overflow-hidden pb-24">
      <div
        class="flex max-h-[80vh] snap-x snap-mandatory scroll-pl-8 flex-col gap-8 overflow-auto px-6 pb-4 md:flex-row md:items-start md:px-0 md:pl-8">
        <!-- Card -->
        <div
          v-for="(data, i) in dataWithImage"
          :key="`course-${i}-${data.title}`"
          class="h-[250px] w-full shrink-0 grow-0 cursor-pointer snap-start overflow-hidden rounded-30 md:w-1/4">
          <HoverImage :src="data.src" :title="data.title" :alt="data.alt" :path="data.path" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { data: courses } = await useAsyncData('courses', () =>
    queryContent().only(['title', 'img', '_path']).find()
  )
  const dataWithImage = courses.value
    ?.filter((course) => course.img)
    .map((course) => ({
      src: course.img,
      alt: 'activity-image',
      title: course.title,
      path: course._path,
    }))
</script>

<style lang="scss" scoped></style>
