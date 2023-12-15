<script setup>
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import FilterBox from "@/components/partials/FilterBox.vue";
import { useBookStore } from "../stores/book";
import { useRoute } from "vue-router";
import { onMounted, watch, onUpdated, ref, reactive } from "vue";
import Paginate from "vuejs-paginate-next";

const bookStore = useBookStore();
const route = useRoute();
const queryString = reactive({
  category: null,
  subcategory: null,
  search: null,
});
const linkUrl = ref(null);
const paginationCount = ref(0);
const limit = 12;
const currentPage = ref(1);
const getAllData = async (params) => {
  await bookStore.getBooks(params);
  queryString.category = null;
  queryString.subcategory = null;
  queryString.search = null;
  paginationCount.value = bookStore.books.count;
};

const datas = [
  { name: "Bosh sahifa", link: "/" },
  { name: "Kitoblar", link: "/books" },
];

const getByQuery = () => {
  if (route.query.category) {
    queryString.category = route.query.category;
  } else if (route.query.subcategory) {
    queryString.subcategory = route.query.subcategory;
  } else if (route.query.search) {
    queryString.search = route.query.search;
  }
  getAllData({ page: currentPage.value, limit: limit, ...queryString });
};

onUpdated(() => {
  linkUrl.value = route.fullPath;
});
watch(linkUrl, getByQuery);

onMounted(() => {
  getByQuery();
});
</script>

<template>
  <div class="books pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- sections -->
    <FilterBox
      class="pt-3 pb-8"
      :getData="getAllData"
      :searchFunction="getAllData"
    />
    <BooksGrid title="Kitoblar" :books="bookStore.books.data" />
    <div class="container pb-10 sm:pb-16" v-if="route.path !== '/'">
      <Paginate
        v-if="paginationCount > 1"
        :page-count="paginationCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="getByQuery"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        v-model="currentPage"
      >
      </Paginate>
    </div>
  </div>
</template>

<style></style>
