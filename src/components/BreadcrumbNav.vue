<template>
  <ul class="flex items-center text-sm font-medium tracking-wide text-main-bg-dark">
    <li class="hidden after:mx-2 after:content-['>'] md:inline-block">
      <NuxtLink to="/">
        <Icon name="ic:sharp-home" size="24" />
      </NuxtLink>
    </li>

    <template v-for="(b, i) in breadcrumb">
      <li v-if="b.path === path" :key="`breadcrumb-${i}-${b.title}`" class="hidden md:inline-block">
        <span class="text-[#8A6659]">
          {{ b.title }}
        </span>
      </li>
      <li
        v-else
        :key="`breadcrumb-${i}-${b.path}`"
        class="hidden after:mx-2 after:content-['>'] md:inline-block">
        <NuxtLink :to="b.path">{{ b.title }}</NuxtLink>
      </li>
    </template>

    <li class="text-[#8A6659] md:hidden">
      <NuxtLink :to="prev?.path || '/'">
        <span class="relative bottom-[1px]"
          ><Icon name="ic:round-arrow-back-ios-new" size="14px"
        /></span>
        {{ curr.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
  const { path } = useRoute()
  const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())

  const formatStructure = (arr, result) => {
    for (const item of arr) {
      const path = item._path
      result[path] = item.title
      if (item.children) {
        formatStructure(item.children, result)
      }
    }
    return result
  }

  const navWithoutPage = nav.value?.filter((n) => n.children).map((n) => n._path)

  const pathAndTitleMap = formatStructure(nav.value, {})
  const pathArray = path.split('/').filter((o) => o !== '')

  const crumbs = []

  let route = ''
  pathArray.forEach((p) => {
    route = `${route}/${p}`
    if (navWithoutPage?.includes(route)) {
      return
    }
    crumbs.push(route)
  })

  const breadcrumb = crumbs.map((crumb) => ({
    title: pathAndTitleMap[crumb],
    path: crumb,
  }))

  const curr = breadcrumb[breadcrumb.length - 1]
  const prev = breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2] : null
</script>
