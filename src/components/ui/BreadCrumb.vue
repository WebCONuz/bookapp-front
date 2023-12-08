<script setup>
const props = defineProps({
  content: Array,
});
</script>

<template>
  <div class="flex mb-5 sm:mb-8 px-5px lg:px-[6px] xl:px-2">
    <span
      class="flex items-center mr-2 text-sm sm:text-base lg:text-lg"
      v-for="(item, index) in props.content"
      :key="index + '-breadcrumb'"
    >
      <router-link :to="item.link" class="text-gray-500 mr-2">{{
        item.name
      }}</router-link>
      <span class="text-gray-400" v-if="index + 1 !== props.content.length"
        >/</span
      >
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
