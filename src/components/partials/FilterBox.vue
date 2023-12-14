<script setup>
import { onMounted, ref } from "vue";
import { useCategoryStore } from "../../stores/category";
import { useRoute, useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();
const route = useRoute();
const props = defineProps({
  searchFunction: Function,
  getData: Function,
});

const searchString = ref(null);
const categoryId = ref(null);
const search = () => {
  if (route.path === "/authors") {
    props.searchFunction({
      page: 1,
      limit: 18,
      search: searchString.value,
    });
  } else {
    router.push({ name: "books", query: { search: searchString.value } });
  }
};

const filterData = (e) => {
  searchString.value = "";
  categoryId.value = e.target.value;
  if (categoryId.value !== "all") {
    router.push({ name: "books", query: { category: categoryId.value } });
  } else {
    router.push({ name: "books" });
  }
};

onMounted(() => {
  categoryStore.getCategories({ page: 1, limit: 10 });
});
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
        v-model="searchString"
      />
      <button
        @click="search"
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
      @input="filterData"
    >
      <option value="" selected hidden>Kategoriyani tanlang</option>
      <option value="all">Barcha kitoblar</option>
      <option
        v-for="(item, index) in categoryStore.categories.data"
        :value="item?.id"
        :key="index + '-category-option'"
      >
        {{ item?.category_name }}
      </option>
    </select>
  </section>
</template>

<style scoped></style>
