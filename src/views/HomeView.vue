<script setup>
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BookSlider from "@/components/partials/BookSlider.vue";
import CategoryGrid from "@/components/partials/CategoryGrid.vue";
</script>

<template>
  <div class="home">
    <Intro />
    <BooksGrid title="Kitoblar" />
    <CategoryGrid />
    <BookSlider title="Saralangan adabiyotlar" />
    <BookSlider title="Eng ko'p o'qilgan adabiyotlar" />
  </div>
</template>

<style scoped></style>
