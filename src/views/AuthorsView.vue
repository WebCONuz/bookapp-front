<script setup>
import { onMounted, ref } from "vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import FilterBox from "@/components/partials/FilterBox.vue";
import AuthorsGrid from "@/components/partials/AuthorsGrid.vue";
import { useAuthorStore } from "../stores/author";
import Paginate from "vuejs-paginate-next";

const authorStore = useAuthorStore();
const paginationCount = ref(0);
const limit = 12;
const currentPage = ref(1);
const getAllData = async (params) => {
  await authorStore.getAuthors({
    ...params,
    page: currentPage.value,
    limit: limit,
  });
  paginationCount.value = authorStore.authors.count;
};

const datas = [
  { name: "Home", link: "/" },
  { name: "Mualliflar", link: "/authors" },
];

onMounted(() => {
  getAllData({});
});
</script>

<template>
  <div class="authors pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- sections -->
    <FilterBox class="pt-3 pb-8" :searchFunction="getAllData" />
    <AuthorsGrid
      title="Barcha Mualliflar"
      :authors="authorStore.authors.data"
      :getAll="getAllData"
    />
    <div class="container pb-10 sm:pb-16">
      <Paginate
        v-if="paginationCount > 1"
        :page-count="paginationCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="getAllData"
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
