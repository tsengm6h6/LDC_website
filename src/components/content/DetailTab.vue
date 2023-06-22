<template>
  <!-- Tab -->
  <div class="mt-12">
    <ul
      class="flex items-center justify-start border-b-2 border-solid border-b-main-bg-gray text-base md:text-lg">
      <li
        v-for="(t, i) in tabList"
        :key="`tab-${i}-${t.name}`"
        :class="`relative top-[0.125rem] cursor-pointer border-b-4 px-2 py-2 text-center transition-all duration-300 hover:text-[#8A6659] md:px-4 ${
          tab === t.key ? 'border-b-highlight' : 'border-b-transparent'
        }`"
        @click="changeTab(t.key)">
        {{ t.name }}
      </li>
    </ul>
    <div class="py-12 md:px-4">
      <ContentSlot v-if="tab === 'detail'" :use="$slots.detail" />
      <ContentSlot v-if="tab === 'include'" :use="$slots.include" />
      <ContentSlot v-if="tab === 'notice'" :use="$slots.notice" />
      <ContentSlot v-if="tab === 'policy'" :use="$slots.policy" />
    </div>
  </div>
</template>

<script setup>
  const { path } = useRoute()
  const router = useRouter()

  const tab = ref('detail')
  const changeTab = (tabName) => {
    router.push({ path, query: { tab: tabName } })
    tab.value = tabName
  }

  const tabList = [
    { name: '行程細節', key: 'detail' },
    { name: '費用包含', key: 'include' },
    { name: '注意事項', key: 'notice' },
    { name: '取消政策', key: 'policy' },
  ]
</script>
