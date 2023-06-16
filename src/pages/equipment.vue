<template>
  <ListContainer :title="page?.title || ''">
    <AlbumEquipment :data="childItems" />
  </ListContainer>
</template>

<script setup lang="ts">
  definePageMeta({
    pageTransition: false,
  })
  const { path } = useRoute()
  const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
  )

  const childItems = [
    {
      src: 'euip-1.png',
      alt: 'euip',
      title: '裝備',
      price: 'NT$ 100',
    },
    {
      src: 'euip-1.png',
      alt: 'euip',
      title: '裝備 2',
      price: 'NT$ 100',
    },
    {
      src: 'euip-1.png',
      alt: 'euip',
      title: '裝備 3',
      price: 'NT$ 100',
    },
  ]
</script>
