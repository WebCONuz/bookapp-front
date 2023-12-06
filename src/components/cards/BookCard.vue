<script setup>
import { ref } from "vue";
const props = defineProps({
  img: String,
});
const like = ref(false);
</script>

<template>
  <div class="card p-2 border border-gray-300 bg-white rounded-md relative">
    <div
      @click="like = !like"
      class="absolute top-3 right-4 border border-gray-300 bg-white rounded-md w-7 h-7 flex items-center justify-center cursor-pointer"
    >
      <i v-if="like" class="bx bxs-heart text-xl text-red-500"></i>
      <i v-else class="bx bx-heart text-xl text-gray-400"></i>
    </div>
    <router-link to="/books/1" class="block mb-2">
      <img
        :src="props.img"
        alt="card_img"
        class="w-full h-[240px] object-cover rounded-md"
      />
    </router-link>
    <router-link
      to="/books/1"
      class="block text- text-gray-700 font-semibold uppercase h-[28px] overflow-hidden overflow-ellipsis whitespace-nowrap"
    >
      Dunyoning ishlari
    </router-link>
    <p class="mb-2 text-gray-600">O’tkir Hoshimov</p>
    <div class="flex items-center justify-between">
      <div class="flex">
        <p class="flex text-gray-500">
          <i class="bx bx-show-alt text-xl mr-[2px]"></i>
          <span>35</span>
        </p>
        <p class="flex text-gray-500 ml-2">
          <i class="bx bx-heart text-xl mr-[2px]"></i>
          <span>17</span>
        </p>
      </div>
      <button
        class="px-[6px] rounded-[4px] bg-gray-400 text-white outline-none hover:bg-[#701BF8] duration-200"
      >
        <i class="bx bx-book-open text-sm"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
