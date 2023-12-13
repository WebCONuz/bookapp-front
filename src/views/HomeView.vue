<script setup>
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import CategoryGrid from "@/components/partials/CategoryGrid.vue";
import { useBookStore } from "../stores/book";
import { useCategoryStore } from "../stores/category";
import { useAuthorStore } from "../stores/author";
import { onMounted } from "vue";

const bookStore = useBookStore();
const categoryStore = useCategoryStore();
const authorStore = useAuthorStore();

const getAllData = () => {
  bookStore.getBooks({ page: 1, limit: 12 });
  categoryStore.getCategories({ page: 1, limit: 8 });
  bookStore.topBooks({ page: 1, limit: 10 });
  bookStore.mostReadBooks({ page: 1, limit: 10 });
  authorStore.getAuthors({ page: 1, limit: 10 });
};

onMounted(() => {
  getAllData();
});
</script>

<template>
  <div class="home">
    <Intro />
    <BooksGrid title="Kitoblar" :books="bookStore.books.data" />
    <CategoryGrid :category="categoryStore.categories.data" />
    <MainSlider
      title="Saralangan adabiyotlar"
      sliderType="book"
      :data="bookStore.topBook.data"
    />
    <MainSlider
      title="Eng ko'p o'qilgan adabiyotlar"
      sliderType="book"
      :data="bookStore.readBook.data"
    />
    <MainSlider
      title="Mualliflar"
      sliderType="author"
      :data="authorStore.authors.data"
    />
  </div>
</template>

<style scoped></style>
