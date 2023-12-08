<script setup>
const props = defineProps({
  img: String,
});
</script>

<template>
  <div class="card p-2 border border-gray-300 bg-white rounded-md relative">
    <router-link to="/authors/1" class="block mb-2">
      <img
        :src="props.img"
        alt="card_img"
        class="w-full h-[200px] xl:h-[240px] object-cover rounded-md"
      />
    </router-link>
    <div class="card-body pb-2">
      <router-link
        to="/authors/1"
        class="block text-sm sm:text-base text-gray-700 font-semibold text-center uppercase h-[22px] sm:h-[28px] overflow-hidden overflow-ellipsis whitespace-nowrap"
      >
        Abdulla Qodiriy
      </router-link>
      <div class="mb-1 text-gray-600 flex justify-center">
        <span>1878</span>
        <span class="mx-1">-</span>
        <span>1932</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex items-center mr-4">
          <i class="bx bxs-book-alt text-2xl text-gray-700 mr-1"></i>
          <span>22</span>
        </div>
        <div class="flex items-center">
          <i class="bx bx-headphone text-2xl text-gray-700 mr-1"></i>
          <span>11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
