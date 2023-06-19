<template>
  <ListContainer :title="page?.title || ''">
    <AlbumEquipment :data="currentList" />
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

  interface Item {
    src: string
    alt: string
    title: string
    price: string
  }

  console.log(page)
  const snorkelingItems = [
    {
      src: 'snorkeling/mask.png',
      alt: 'mask',
      title: '一般蛙鏡（含呼吸管）',
      price: 'NT$ 80',
    },
    {
      src: 'snorkeling/mask.png',
      alt: 'mask-degree',
      title: '有度數蛙鏡（含呼吸管）',
      price: 'NT$ 100',
    },
    {
      src: 'snorkeling/snorkel.png',
      alt: 'snorkel',
      title: '呼吸管',
      price: 'NT$ 40',
    },
    {
      src: 'snorkeling/swim-goggles.png',
      alt: 'swim-goggles',
      title: '泳鏡',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/life-jacket.png',
      alt: 'life-jacket',
      title: '救生衣',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/kick-board.png',
      alt: 'kick-board',
      title: '浮板',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/buoy.png',
      alt: 'buoy',
      title: '浮標',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/life-buoy.png',
      alt: 'life-buoy',
      title: '救生圈',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/water-shoes.png',
      alt: 'water-shoes',
      title: '防滑鞋',
      price: 'NT$ 60',
    },
    {
      src: 'snorkeling/parasol.png',
      alt: 'parasol',
      title: '陽傘',
      price: 'NT$ 300',
    },
    {
      src: 'snorkeling/open-heeled-fins.png',
      alt: 'open-heeled-fins',
      title: '套鞋式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'snorkeling/closed-heel-fins.png',
      alt: 'closed-heel-fins',
      title: '套腳式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'snorkeling/diving-suit.png',
      alt: 'diving-suit',
      title: '連身防寒衣',
      price: 'NT$ 160',
    },
    {
      src: 'snorkeling/wetsuit-top.png',
      alt: 'wetsuit-top',
      title: '防寒衣',
      price: 'NT$ 130',
    },
    {
      src: 'snorkeling/wetsuit-bottom.png',
      alt: 'wetsuit-bottom',
      title: '防寒褲',
      price: 'NT$ 120',
    },
    {
      src: 'snorkeling/rashguard-top.png',
      alt: 'rashguard-top',
      title: '水母衣',
      price: 'NT$ 100',
    },
    {
      src: 'snorkeling/',
      alt: 'rashguard-bottom',
      title: '水母褲',
      price: 'NT$ 100',
    },
    {
      src: 'snorkeling/rashguard.png',
      alt: 'rashguard',
      title: '水母上衣 + 水母褲',
      price: 'NT$ 160',
    },
    {
      src: 'snorkeling/rashguard-and-wetsuit.png',
      alt: 'rashguard-and-wetsuit',
      title: '水母上衣 + 防寒褲',
      price: 'NT$ 200',
    },
  ]

  const freeDivingItems = [
    {
      src: 'free-diving/snorkel.png',
      alt: 'snorkel',
      title: '呼吸管',
      price: 'NT$ 40',
    },
    {
      src: 'free-diving/mask.png',
      alt: 'mask',
      title: '自潛蛙鏡（含呼吸管）',
      price: 'NT$ 100',
    },
    {
      src: 'free-diving/fins.png',
      alt: 'fins',
      title: '中蛙鞋',
      price: 'NT$ 160',
    },
    {
      src: 'free-diving/long-fins.png',
      alt: 'long-fins',
      title: '長蛙鞋',
      price: 'NT$ 200',
    },
    {
      src: 'free-diving/lanyard.png',
      alt: 'lanyard',
      title: '安全繫鎖',
      price: 'NT$ 100',
    },
    {
      src: 'free-diving/buoy.png',
      alt: 'buoy',
      title: '浮球一組',
      price: 'NT$ 300',
    },
    {
      src: 'free-diving/lope.png',
      alt: 'lope',
      title: '繩子',
      price: 'NT$ 80',
    },
    {
      src: 'free-diving/bottom-weight.png',
      alt: 'bottom-weight',
      title: '底鉛',
      price: 'NT$ 80',
    },
    {
      src: 'free-diving/weight.png',
      alt: 'weight',
      title: '鉛塊（1 kg）',
      price: 'NT$ 20',
    },
    {
      src: 'free-diving/weight-belt.png',
      alt: 'weight-belt',
      title: '鉛帶',
      price: 'NT$ 60',
    },
    {
      src: 'free-diving/diving-suit.png',
      alt: 'diving-suit',
      title: '自潛防寒衣',
      price: 'NT$ 300',
    },
  ]

  const scubaDivingItems = [
    {
      src: 'scuba-diving/bcd.jpg',
      alt: 'bcd',
      title: 'BCD',
      price: 'NT$ ???',
    },
    {
      src: 'scuba-diving/regulator.jpg',
      alt: 'regulator',
      title: '調節器',
      price: 'NT$ ???',
    },
    {
      src: 'scuba-diving/diving-suit.png',
      alt: 'diving-suit',
      title: '防寒衣',
      price: 'NT$ 160',
    },
    {
      src: 'scuba-diving/open-heeled-fins.png',
      alt: 'open-heeled-fins',
      title: '套鞋式蛙鞋',
      price: 'NT$ 100',
    },
    {
      src: 'scuba-diving/closed-heel-fins.png',
      alt: 'closed-heel-fins',
      title: '套腳式蛙鞋',
      price: 'NT$ 100',
    },
  ]

  const getCurrentList = (pageTitle: string) => {
    switch (pageTitle) {
      case '自潛裝備':
        return freeDivingItems
      case '水肺裝備':
        return scubaDivingItems
      default:
        return snorkelingItems
    }
  }

  let currentList: Item[] = []
  if (page.value?.title) {
    currentList = getCurrentList(page.value.title)
  }
</script>
