<template>
  <section class="section container mx-auto px-6 py-12 lg:py-24">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <h3 class="">現在就與我們聯繫！</h3>
        <p class="mt-4 text-base leading-relaxed tracking-wider">
          想要預約課程、租借裝備、詢問下水等任何問題都歡迎聯絡我們
        </p>
        <div class="mt-8 flex flex-col items-start gap-6">
          <!-- Card -->
          <IconInfo icon="material-symbols:location-on" title="地圖資訊"
            >新北市貢寮區龍洞街1-5號</IconInfo
          >
          <IconInfo icon="material-symbols:call" title="聯絡電話">0939-098-057</IconInfo>
          <IconInfo icon="material-symbols:mail-outline" title="信箱 Email"
            >longdongcape@gmail.com</IconInfo
          >
        </div>
      </div>
      <div class="mt-8 h-[483px] w-full overflow-hidden rounded-md md:ml-6 md:mt-0 md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6922214563933!2d121.91652557569961!3d25.112277877765788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439e07d52ec9%3A0xabcd6322b8d21227!2z6b6N5rSe5bKs6KOd5YKZ5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1686813235795!5m2!1szh-TW!2stw"
          width="600"
          height="500"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped></style>
