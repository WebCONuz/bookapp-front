<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="rounded-xl flex items-center justify-center h-[120px] text-2xl font-semibold"
    :style="`background-color: ${props.data.bgColor}; color: ${props.data.color};`"
  >
    {{ props.data.name }}
  </div>
</template>

<style lang="scss" scoped></style>
