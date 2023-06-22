<template>
  <div class="container mx-auto px-4 py-8 md:px-6 md:py-12">
    <BreadcrumbNav />
    <ContentDoc />
  </div>
</template>

<script setup>
  const { path } = useRoute()

  const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).only(['title', 'description', 'img']).findOne()
  )

  useSeoMeta({
    title: page.value?.title || '',
    ogTitle: page.value?.title || '',
    description: page.value?.description || page.value?.title,
    ogDescription: page.value?.description || page.value?.title,
    ogImage: `_nuxt/assets/image/${page.value?.img}` || '_nuxt/assets/image/about-1.jpg',
  })
</script>
