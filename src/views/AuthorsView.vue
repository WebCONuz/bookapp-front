<script setup>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import FilterBox from "@/components/partials/FilterBox.vue";
import AuthorsGrid from "@/components/partials/AuthorsGrid.vue";
const datas = [
  { name: "Home", link: "/" },
  { name: "Mualliflar", link: "/authors" },
];
</script>

<template>
  <div class="authors pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- sections -->
    <FilterBox class="pt-3 pb-8" />
    <AuthorsGrid title="Barcha Mualliflar" />
  </div>
</template>

<style></style>
