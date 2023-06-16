<template>
  <div>
    <!-- Info -->
    <ContentSlot :use="$slots.info" />
    <!-- Tab -->
    <ContentSlot :use="$slots.tab" />
    <!-- Relative -->
    <ContentSlot :use="$slots.relative" />
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
