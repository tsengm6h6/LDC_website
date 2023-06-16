<template>
  <section class="relative">
    <div class="container mx-auto px-6 py-12">
      <div class="flex flex-col items-start justify-between gap-5 md:flex-row">
        <div class="mb-8 w-full md:mb-0 md:w-1/2">
          <div>
            <h3 class="mb-4">
              週末不知道如何安排？<br />
              <span class="relative">
                <span
                  class="absolute -left-3 bottom-0 block h-[16px] w-[110%] bg-highlight"
                  aria-hidden="true"></span>
                <span class="relative inline-block">交給我們就對了！</span>
              </span>
            </h3>
            <p class="mb-8 text-base leading-relaxed tracking-wider md:w-11/12">
              上山下海，多種組合任你挑選。行程包含海味小吃，並帶你品嚐來龍洞不能錯過的名產「石花凍」，體驗一趟沁涼消暑的週末小旅行！
            </p>
            <ul
              class="list-inside list-disc space-y-3 pl-4 text-lg font-semibold tracking-wide marker:text-primary">
              <li>龍洞一日體驗海人生活</li>
              <li>龍洞一日海陸生活</li>
              <li>龍洞一日秘境探索</li>
            </ul>
            <div class="relative">
              <p class="mt-8 inline-block text-lg font-semibold tracking-wide">
                多人團報更享優惠，手刀揪團來報名！
              </p>
              <span
                class="absolute -z-10 after:absolute after:-right-0 after:top-3 after:content-abstractwaves md:after:-right-12"
                aria-hidden="true"></span>
            </div>
            <button
              class="btn btn-primary btn-lg relative mt-8"
              @click="$router.push('/experience/snorkeling')">
              查看詳細行程
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex items-end">
            <div class="h-[304px] w-[354px] flex-auto overflow-hidden rounded-tl-60">
              <img
                src="@/assets/image/banner-1.jpeg"
                alt=""
                class="inline-block h-full w-full object-cover object-center" />
            </div>
            <span
              class="ml-3 inline-block h-[115px] w-[116px] shrink grow-0 rounded-tr-60 bg-primary"></span>
          </div>
          <div class="mt-3 flex items-start">
            <span
              class="mr-3 inline-block h-[172px] w-[116px] shrink grow-0 rounded-bl-60 bg-secondary"></span>
            <div class="h-[423px] w-[354px] flex-auto overflow-hidden rounded-br-60">
              <img
                src="@/assets/image/banner-2.jpg"
                alt=""
                class="inline-block h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/image/subtract-back-2.svg"
      alt="overlay"
      class="absolute bottom-0 left-0 hidden lg:inline-block" />
  </section>
</template>
