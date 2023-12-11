<script setup>
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import CategoryGrid from "@/components/partials/CategoryGrid.vue";
import { useBookStore } from "../stores/book";
import { useCategoryStore } from "../stores/category";
import { ref, onMounted } from "vue";

const bookStore = useBookStore();
const categoryStore = useCategoryStore();

const getAllBook = () => {
  bookStore.getBooks({ page: 1, limit: 12 });
  categoryStore.getOneCategory(2);
  categoryStore.getCategories();
};

onMounted(() => {
  getAllBook();
});
</script>

<template>
  <div class="home">
    <Intro />
    <BooksGrid title="Kitoblar" :books="bookStore.books.data" />
    <CategoryGrid />
    <MainSlider title="Saralangan adabiyotlar" sliderType="book" />
    <MainSlider title="Eng ko'p o'qilgan adabiyotlar" sliderType="book" />
    <MainSlider title="Mualliflar" sliderType="author" />
  </div>
</template>

<style scoped></style>
