<template>
  <div>
    <Head>
      <Title>{{ page?.title || '' }}</Title>
      <Meta name="description" :content="page?.description || page?.title || ''" />
    </Head>
    <ListContainer :title="page?.title || ''">
      <AlbumEquipment :data="currentList" />
    </ListContainer>
  </div>
</template>

<script setup>
  import useAssets from '~/composables/useAssets'

  definePageMeta({
    pageTransition: false,
  })
  const { path } = useRoute()
  const { data: page } = await useAsyncData(`content-${path}`, () =>
    queryContent().where({ _path: path }).findOne()
  )

  useSeoMeta({
    title: page.value?.title || '',
    ogTitle: page.value?.title || '',
    description: page.value?.description || page.value?.title,
    ogDescription: page.value?.description || page.value?.title,
    ogImage: useAssets(page.value?.img) || useAssets('about-1.jpg'),
  })

  const snorkelingItems = [
    {
      src: 'mask.png',
      alt: 'mask',
      title: '一般蛙鏡（含呼吸管）',
      price: 'NT$ 80',
    },
    {
      src: 'mask.png',
      alt: 'mask-degree',
      title: '有度數蛙鏡（含呼吸管）',
      price: 'NT$ 100',
    },
    {
      src: 'snorkel.png',
      alt: 'snorkel',
      title: '呼吸管',
      price: 'NT$ 40',
    },
    {
      src: 'swim-goggles.png',
      alt: 'swim-goggles',
      title: '泳鏡',
      price: 'NT$ 60',
    },
    {
      src: 'life-jacket.png',
      alt: 'life-jacket',
      title: '救生衣',
      price: 'NT$ 60',
    },
    {
      src: 'kick-board.png',
      alt: 'kick-board',
      title: '浮板',
      price: 'NT$ 60',
    },
    {
      src: 'buoy.png',
      alt: 'buoy',
      title: '浮標',
      price: 'NT$ 60',
    },
    {
      src: 'life-buoy.png',
      alt: 'life-buoy',
      title: '救生圈',
      price: 'NT$ 60',
    },
    {
      src: 'water-shoes.png',
      alt: 'water-shoes',
      title: '防滑鞋',
      price: 'NT$ 60',
    },
    {
      src: 'parasol.png',
      alt: 'parasol',
      title: '陽傘',
      price: 'NT$ 300',
    },
    {
      src: 'open-heeled-fins.png',
      alt: 'open-heeled-fins',
      title: '套鞋式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'closed-heel-fins.png',
      alt: 'closed-heel-fins',
      title: '套腳式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'diving-suit.png',
      alt: 'diving-suit',
      title: '連身防寒衣',
      price: 'NT$ 160',
    },
    {
      src: 'wetsuit-top.png',
      alt: 'wetsuit-top',
      title: '防寒衣',
      price: 'NT$ 130',
    },
    {
      src: 'wetsuit-bottom.png',
      alt: 'wetsuit-bottom',
      title: '防寒褲',
      price: 'NT$ 120',
    },
    {
      src: 'rashguard-top.png',
      alt: 'rashguard-top',
      title: '水母衣',
      price: 'NT$ 100',
    },
    {
      src: 'rashguard-bottom.png',
      alt: 'rashguard-bottom',
      title: '水母褲',
      price: 'NT$ 100',
    },
    {
      src: 'rashguard.png',
      alt: 'rashguard',
      title: '水母上衣 + 水母褲',
      price: 'NT$ 160',
    },
    {
      src: 'rashguard-and-wetsuit.png',
      alt: 'rashguard-and-wetsuit',
      title: '水母上衣 + 防寒褲',
      price: 'NT$ 200',
    },
  ]

  const freeDivingItems = [
    {
      src: 'snorkel.png',
      alt: 'snorkel',
      title: '呼吸管',
      price: 'NT$ 40',
    },
    {
      src: 'mask.png',
      alt: 'mask',
      title: '自潛蛙鏡（含呼吸管）',
      price: 'NT$ 100',
    },
    {
      src: 'fins.png',
      alt: 'fins',
      title: '中蛙鞋',
      price: 'NT$ 160',
    },
    {
      src: 'long-fins.png',
      alt: 'long-fins',
      title: '長蛙鞋',
      price: 'NT$ 200',
    },
    {
      src: 'lanyard.png',
      alt: 'lanyard',
      title: '安全繫鎖',
      price: 'NT$ 100',
    },
    {
      src: 'buoy.png',
      alt: 'buoy',
      title: '浮球一組',
      price: 'NT$ 300',
    },
    {
      src: 'lope.png',
      alt: 'lope',
      title: '繩子',
      price: 'NT$ 80',
    },
    {
      src: 'bottom-weight.png',
      alt: 'bottom-weight',
      title: '底鉛',
      price: 'NT$ 80',
    },
    {
      src: 'weight.png',
      alt: 'weight',
      title: '鉛塊（1 kg）',
      price: 'NT$ 20',
    },
    {
      src: 'weight-belt.png',
      alt: 'weight-belt',
      title: '鉛帶',
      price: 'NT$ 60',
    },
    {
      src: 'diving-suit.png',
      alt: 'diving-suit',
      title: '自潛防寒衣',
      price: 'NT$ 300',
    },
  ]

  const scubaDivingItems = [
    {
      src: 'bcd.jpg',
      alt: 'bcd',
      title: 'BCD',
      price: 'NT$ 300',
    },
    {
      src: 'regulator.jpg',
      alt: 'regulator',
      title: '調節器',
      price: 'NT$ 300',
    },
    {
      src: 'diving-suit.png',
      alt: 'diving-suit',
      title: '防寒衣',
      price: 'NT$ 160',
    },
    {
      src: 'open-heeled-fins.png',
      alt: 'open-heeled-fins',
      title: '套鞋式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'closed-heel-fins.png',
      alt: 'closed-heel-fins',
      title: '套腳式蛙鞋',
      price: 'NT$ 100',
    },
  ]

  const getCurrentList = (pagePath) => {
    switch (pagePath) {
      case '/equipment/renting-freediving':
        return freeDivingItems
      case '/equipment/renting-scubadiving':
        return scubaDivingItems
      default:
        return snorkelingItems
    }
  }

  let currentList = []
  if (page.value?._path) {
    currentList = getCurrentList(page.value._path)
  }
</script>
