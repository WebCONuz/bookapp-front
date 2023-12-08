<script setup>
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import FilterBox from "@/components/partials/FilterBox.vue";

const datas = [
  { name: "Home", link: "/" },
  { name: "Books", link: "/books" },
];
</script>

<template>
  <div class="books pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- sections -->
    <FilterBox class="pt-3 pb-8" />
    <BooksGrid title="Barcha kitoblar" />
  </div>
</template>

<style></style>
