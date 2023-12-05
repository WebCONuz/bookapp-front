<script setup>
const props = defineProps({
  text: String,
});
</script>

<template>
  <h2 class="text-3xl font-bold mb-8 text-gray-700 px-2 uppercase">
    {{ props.text }}
  </h2>
</template>

<style lang="scss" scoped></style>
