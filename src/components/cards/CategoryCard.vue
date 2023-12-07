<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="rounded-xl flex items-center justify-center h-20 md:h-[110px] xl:h-[120px] text-lg sm:text-xl xl:text-2xl font-semibold"
    :style="`background-color: ${props.data.bgColor}; color: ${props.data.color};`"
  >
    {{ props.data.name }}
  </div>
</template>

<style scoped></style>
