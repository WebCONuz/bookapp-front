<script setup>
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import { useLikeStore } from "@/stores/like";
import { useBookStore } from "../stores/book";
import { onMounted } from "vue";

const likeStore = useLikeStore();
const bookStore = useBookStore();
const datas = [
  { name: "Bosh sahifa", link: "/" },
  { name: "Yoqtirgan kitoblarim", link: "/favorite" },
];

onMounted(() => {
  likeStore.getAll();
  bookStore.topBooks({ page: 1, limit: 10 });
});
</script>

<template>
  <div class="books pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container mb-2">
      <BreadCrumb :content="datas" />
    </section>
    <BooksGrid title="Mening javonim" :books="likeStore.likeData" />
    <MainSlider
      title="Saralangan adabiyotlar"
      sliderType="book"
      :data="bookStore.topBook.data"
    />
  </div>
</template>

<style></style>
