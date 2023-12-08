<script setup>
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BookSlider from "@/components/partials/BookSlider.vue";
import CategoryGrid from "@/components/partials/CategoryGrid.vue";
</script>

<template>
  <main class="home bg-[#FAFAFA]">
    <Intro />
    <BooksGrid />
    <CategoryGrid />
    <BookSlider title="Saralangan adabiyotlar" />
    <BookSlider title="Eng ko'p o'qilgan adabiyotlar" />
  </main>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 70px);
}
</style>
