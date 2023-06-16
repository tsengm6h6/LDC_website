<template>
  <!-- Relative -->
  <div class="mt-4 md:mt-12">
    <h3 class="px-2 pb-2 text-center text-base font-normal md:px-4 md:pb-4 md:text-lg">相關活動</h3>
    <div class="grid grid-cols-6 gap-6 border-t-2 border-solid border-t-main-bg-gray py-4 md:py-6">
      <div
        v-for="(item, i) in relativeItems"
        :key="`relative-${i}-${item.title}`"
        class="col-span-full overflow-hidden rounded-30 sm:col-span-3 md:col-span-2">
        <HoverImage v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { path } = useRoute()
  const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
  )
  const relative = await useAsyncData('content-cat', () =>
    queryContent()
      .where({ category: { $contains: page.value.category } })
      .find()
  )
  const relativeItems = relative.data.value
    .filter((c) => c._path !== path)
    .map((item) => ({
      title: item.title || item.navigation.title,
      description: item.description || item.navigation.description,
      src: item.img,
      alt: item.alt || 'relative-image',
      path: item._path,
    }))
    .slice(0, 3)
</script>

<style lang="scss" scoped></style>
