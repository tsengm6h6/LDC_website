<template>
  <div>
    <Head>
      <Title>{{ page?.title || '' }}</Title>
      <Meta name="description" :content="page?.description || page?.title || ''" />
    </Head>
    <ListContainer :title="page?.title || ''">
      <AlbumCourse :data="childItems" />
    </ListContainer>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    pageTransition: false,
  })
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

  const contentQuery = await queryContent(path)
    .only(['title', 'description', 'img', 'alt', '_path'])
    .find()

  interface Image {
    src: string
    alt: string
    title: string
    description: string
    path: string
  }

  const getCourseList = (): Image[] => {
    return (
      contentQuery
        .filter((c) => c._path !== path)
        .map((item) => ({
          title: item?.title || '',
          description: item?.description || '',
          src: item?.img || '',
          alt: item?.alt || '',
          path: item?._path || '',
        })) || []
    )
  }

  const childItems = getCourseList()
</script>
