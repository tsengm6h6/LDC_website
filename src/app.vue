<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: '【龍洞岬】北部水上活動 - 浮潛、水肺潛水、SUP、攀岩、自由潛水裝備租借',
    ogTitle: '【龍洞岬】北部水上活動 - 浮潛、水肺潛水、SUP、攀岩、自由潛水裝備租借',
    description:
      '提供浮潛裝備、自由潛水裝備、水肺氣瓶租借，浮潛、SUP 立槳、PADI 水肺潛水課程/體驗/FUN DIVE、攀岩，龍洞岬裝備中心位於龍洞和美國小旁是距離自由潛水、水肺潛水、浮潛地點最近的一間潛店！',
    ogDescription:
      '提供浮潛裝備、自由潛水裝備、水肺氣瓶租借，浮潛、SUP 立槳、PADI 水肺潛水課程/體驗/FUN DIVE、攀岩，龍洞岬裝備中心位於龍洞和美國小旁是距離自由潛水、水肺潛水、浮潛地點最近的一間潛店！',
    ogImage: 'https://longdongcape.com/images/logo.png',
  })
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
