<script setup>
const props = defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <section class="flex flex-col items-center text-[#1C1C1C] text-center">
    <img
      src="../../assets/images/ui/not_found.webp"
      alt="404"
      class="max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] mb-2 sm:mb-[30px]"
    />
    <h2
      class="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-[12.5px] lg:mb-[15px] max-w-[391px] font-semibold"
    >
      {{ props.title }}
    </h2>
    <p class="text-[13px] sm:text-[15.5px] lg:text-lg leading-[140%]">
      {{ props.text }}
    </p>
  </section>
</template>

<style lang="scss" scoped></style>
