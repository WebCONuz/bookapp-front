<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  searchFunction: Function,
});

const search = (e) => {
  props.searchFunction({
    page: 1,
    limit: 18,
    search: e.target.value,
  });
};
</script>

<template>
  <section
    class="filter container flex flex-wrap sm:gap-x-3 md:gap-x-0 sm:flex-nowrap md:justify-between"
  >
    <!-- search -->
    <div
      class="flex w-full sm:w-[70%] md:w-[400px] relative xl:mr-6 mb-2 sm:mb-0"
    >
      <input
        type="text"
        placeholder="search"
        class="py-2 px-4 rounded-l outline-none border border-gray-300 w-[85%]"
        @input="search"
      />
      <button
        class="py-2 rounded-r outline-none w-[15%] bg-gray-400 relative border-none"
      >
        <i
          class="bx bx-search text-xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        ></i>
      </button>
    </div>

    <!-- select -->
    <select
      v-if="route.path === '/books'"
      class="w-full sm:w-[30%] md:w-auto py-2 px-4 rounded outline-none border border-gray-300"
    >
      <option value="1">Barcha kitoblar</option>
      <option value="2">Saralangan kitoblar</option>
      <option value="3">Eng ko'p o'qilgan kitoblar</option>
    </select>
  </section>
</template>

<style scoped></style>
