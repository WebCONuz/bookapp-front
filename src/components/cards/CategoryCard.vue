<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <router-link
    :to="'/books?category=' + props.data?.category_name"
    class="rounded-xl flex items-center justify-center h-20 md:h-[110px] xl:h-[120px] text-lg sm:text-xl xl:text-2xl font-semibold"
    :style="`background-color: ${props.data.bgColor}; color: ${props.data.color};`"
  >
    {{ props.data?.category_name }}
  </router-link>
</template>

<style scoped></style>
