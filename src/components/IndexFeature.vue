<template>
  <section
    class="section relative -mt-4 rounded-tl-30 bg-main-bg-gray md:mt-0 md:rounded-none md:bg-main-bg-white">
    <img
      src="@/assets/image/subtract-front-2.svg"
      alt="overlay"
      class="absolute bottom-0 right-0 hidden lg:inline-block" />
    <div class="container mx-auto px-6 py-12 lg:py-24">
      <h3 class="mb-12 text-center">為什麼選擇龍洞岬？</h3>
      <div class="features flex flex-col items-center gap-10 md:flex-row md:items-start">
        <FeatureCard
          icon="material-symbols:person-play-outline"
          feature="多樣活動與專業團隊"
          description="玩水入門的浮潛、SUP 立槳到水肺潛水證照課程、龍洞攀岩，多樣活動等你來體驗！" />
        <FeatureCard
          icon="mdi:diving-flippers"
          feature="東北角最齊全裝備供應"
          description="提供東北角最齊全的裝備租借，浮潛、自潛裝備，或水肺全套輕重裝，大小尺寸應有盡有！" />
        <FeatureCard
          icon="material-symbols:pin-drop"
          feature="絕佳地理位置"
          description="龍洞在地店家，位於和美國小旁邊，距離活動下水點皆在咫尺距離，地點絕佳，輕鬆玩無負擔！" />
      </div>
    </div>
  </section>
</template>

<script setup>
  onMounted(() => {
    const featureObserver = new IntersectionObserver(
      (entries) => {
        const features = entries[0]
        features.target.classList.toggle('show', features.isIntersecting)
        if (features.isIntersecting) featureObserver.unobserve(features.target)
      },
      {
        threshold: 0.5,
      }
    )

    const features = document.querySelector('.features')

    if (features) {
      featureObserver.observe(features)
    }
  })
</script>

<style>
  .features {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .features.show {
    opacity: 1;
  }

  .features .feature-card {
    opacity: 1;
    /* transform: translateY(-50%); */
    transition: all 0.6s ease-in-out;
  }

  .features.show .feature-card {
    opacity: 1;
  }

  .features.show .feature-card:nth-child(1) {
    transform: translateY(0);
    transition-delay: 0.3s;
  }

  .features.show .feature-card:nth-child(2) {
    transform: translateY(0);
    transition-delay: 0.6s;
  }

  .features.show .feature-card:nth-child(3) {
    transform: translateY(0);
    transition-delay: 0.9s;
  }
</style>
