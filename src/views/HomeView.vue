<script setup>
import Header from "@/components/partials/Header.vue";
import Intro from "@/components/partials/Intro.vue";
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BookSlider from "../components/partials/BookSlider.vue";
import CategoryGrid from "../components/partials/CategoryGrid.vue";
import Testimotional from "../components/partials/Testimotional.vue";
import Footer from "../components/partials/Footer.vue";
</script>

<template>
  <Header />
  <div class="home bg-[#FAFAFA]">
    <Intro />
    <BooksGrid />
    <CategoryGrid />
    <BookSlider title="Saralangan adabiyotlar" />
    <BookSlider title="Eng ko'p o'qilgan adabiyotlar" />
    <Testimotional title="Foydalanuvchilar fikri" />
    <Footer />
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 70px);
}
</style>
