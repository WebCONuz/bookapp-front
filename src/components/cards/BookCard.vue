<script setup>
import { ref } from "vue";
const props = defineProps({
  data: Object,
});
const like = ref(false);
</script>

<template>
  <div class="card p-2 border border-gray-300 bg-white rounded-md relative">
    <div
      @click="like = !like"
      class="absolute top-3 right-3 sm:right-4 border border-gray-300 bg-white rounded-md w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center cursor-pointer"
    >
      <i v-if="like" class="bx bxs-heart text-lg sm:text-xl text-red-500"></i>
      <i v-else class="bx bx-heart text-lg sm:text-xl text-gray-400"></i>
    </div>
    <router-link to="/books/1" class="block mb-2">
      <img
        :src="props.data?.image"
        alt="card_img"
        class="w-full h-[200px] xl:h-[240px] object-cover rounded-md"
      />
    </router-link>
    <router-link
      to="/books/1"
      class="block text-sm sm:text-base text-gray-700 font-semibold uppercase h-[22px] sm:h-[28px] overflow-hidden overflow-ellipsis whitespace-nowrap"
    >
      {{ props.data?.title }}
    </router-link>
    <p
      class="mb-[6px] sm:mb-2 text-gray-600 overflow-hidden overflow-ellipsis whitespace-nowrap"
    >
      {{ props.data?.author_first_name }}
      {{ props.data?.author_last_name }}
    </p>
    <div class="flex items-center justify-between">
      <div class="flex">
        <p class="flex items-center text-gray-500">
          <i class="bx bx-show-alt text-lg sm:text-xl mr-[2px]"></i>
          <span class="text-sm sm:text-base">{{ props.data?.view_count }}</span>
        </p>
        <p class="flex items-center text-gray-500 ml-2">
          <i class="bx bx-heart text-lg sm:text-xl mr-[2px]"></i>
          <span class="text-sm sm:text-base">{{ props.data?.like_count }}</span>
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
