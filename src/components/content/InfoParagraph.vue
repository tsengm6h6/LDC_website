<template>
  <div class="my-4 text-base">
    <slot />
    <h2 class="mt-8 text-base" :class="`${infoType === 'warn' ? 'text-red-400' : ''}`">
      {{ title }}
    </h2>
    <div :class="`${listStyle} mt-2 text-base`">
      <ContentSlot :use="$slots.list" unwrap="p" />
    </div>
    <p class="mt-6 text-base">
      <ContentSlot :use="$slots.text" unwrap="p" />
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    infoType: {
      type: String,
      required: false,
      default: 'normal',
    },
    listType: {
      type: String,
      required: false,
      default: 'normal',
    },
    title: {
      type: String,
      required: true,
    },
  })

  const listStyle = computed(() => {
    switch (props.listType) {
      case 'checked':
        return 'checked-list'
      case 'unchecked':
        return 'unchecked-list'
      case 'number':
        return 'number-list'
      case 'normal':
        return 'normal-list'
    }
  })
</script>

<style scoped>
  /* normal list */
  .normal-list :deep(ul li::before),
  .normal-list :deep(ol li::before) {
    content: '➪';
    margin-right: 0.5em;
  }

  .checked-list :deep(ul li::before),
  .checked-list :deep(ol li::before),
  .unchecked-list :deep(ul li::before),
  .unchecked-list :deep(ol li::before) {
    margin-right: 0.5em;
    width: 1.2em;
    height: 1.2em;
    background-color: #34b1b1;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* checked list */
  .checked-list :deep(ul li::before),
  .checked-list :deep(ol li::before) {
    content: '✓';
  }

  /* unchecked list */
  .unchecked-list :deep(ul li::before),
  .unchecked-list :deep(ol li::before) {
    content: '✘';
  }

  /* number list */
  .number-list :deep ol {
    list-style: none;
    counter-reset: steps;
  }
  .number-list :deep(ol li) {
    counter-increment: steps;
  }

  .number-list :deep(ol li::before) {
    content: counter(steps);
    margin-right: 0.5em;
    width: 1.2em;
    height: 1.2em;
    background-color: #34b1b1;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
