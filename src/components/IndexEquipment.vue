<template>
  <section class="relative mt-8 rounded-tr-60 bg-main-bg-gray md:mt-0 md:rounded-none">
    <div class="absolute right-0 top-0 h-[8%] w-[233px] rounded-tr-60 bg-primary md:hidden"></div>
    <div class="container mx-auto px-6 py-24">
      <div class="flex flex-col-reverse items-stretch justify-between md:flex-row">
        <div class="px-0 md:w-1/3 md:p-0">
          <img
            src="@/assets/image/banner-2.jpg"
            alt=""
            class="h-full min-h-[200px] w-full rounded-br-30 rounded-tl-30 object-fill object-center md:rounded-tl-60" />
        </div>
        <div class="relative flex-1 py-8 md:w-2/3 md:px-8">
          <div
            class="absolute right-0 top-0 hidden h-[15%] w-[233px] rounded-tr-60 bg-primary md:block"></div>
          <h3 class="mb-4">裝備租借</h3>
          <p class="text-base leading-relaxed tracking-wider md:text-lg">
            專業浮潛裝備、自由潛水裝備、水肺輕重裝及氣瓶租借。
            浮潛必備的救生衣、面鏡呼吸管、防滑鞋、水母衣，到自由潛水的中、長蛙或是水肺潛水的輕、重裝備，都可以在這裡一次租齊。
            北海岸週末人潮較多，想來東北角玩水的朋友建議提前預約唷！
          </p>
          <button class="btn btn-primary btn-lg mt-8" @click="$router.push('/equipment')">
            查詢裝備與價目表
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped></style>
