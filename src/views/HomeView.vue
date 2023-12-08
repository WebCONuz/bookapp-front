<script setup>
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import CategoryGrid from "@/components/partials/CategoryGrid.vue";
</script>

<template>
  <div class="home">
    <Intro />
    <BooksGrid title="Kitoblar" />
    <CategoryGrid />
    <MainSlider title="Saralangan adabiyotlar" sliderType="book" />
    <MainSlider title="Eng ko'p o'qilgan adabiyotlar" sliderType="book" />
    <MainSlider title="Mualliflar" sliderType="author" />
  </div>
</template>

<style scoped></style>
