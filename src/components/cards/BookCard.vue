<script setup>
const props = defineProps({
  img: String,
});
</script>

<template>
  <div class="card p-2 border border-gray-300 bg-white rounded-md">
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
      <p class="flex text-gray-500">
        <i class="bx bx-show-alt text-xl mr-1"></i>
        <span>35</span>
      </p>
      <div class="flex">
        <button
          class="px-[6px] rounded-[4px] bg-gray-400 text-white mr-1 outline-none"
        >
          <i class="bx bxl-deezer text-sm"></i>
        </button>
        <button
          class="px-[6px] rounded-[4px] bg-gray-400 text-white outline-none"
        >
          <i class="bx bx-book-open text-sm"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
