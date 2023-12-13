<script setup>
import { onMounted } from "vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import FilterBox from "@/components/partials/FilterBox.vue";
import AuthorsGrid from "@/components/partials/AuthorsGrid.vue";
import { useAuthorStore } from "../stores/author";

const authorStore = useAuthorStore();
const getAllData = (params) => {
  authorStore.getAuthors(params);
};

const datas = [
  { name: "Home", link: "/" },
  { name: "Mualliflar", link: "/authors" },
];

onMounted(() => {
  getAllData({ page: 1, limit: 18 });
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
  </div>
</template>

<style></style>
