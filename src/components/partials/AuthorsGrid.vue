<script setup>
import AuthorCard from "../cards/AuthorCard.vue";
import Title from "../ui/Title.vue";

import Author1 from "../../assets/images/authors/author1.jpg";
import Author2 from "../../assets/images/authors/author2.jpg";
import Author3 from "../../assets/images/authors/author3.jpg";
import Author4 from "../../assets/images/authors/author4.jpg";
import Author5 from "../../assets/images/authors/author5.jpg";
import Author6 from "../../assets/images/authors/author6.jpg";
import Author7 from "../../assets/images/authors/author7.jpg";

const props = defineProps({
  title: String,
});

const authors = [
  Author1,
  Author2,
  Author3,
  Author4,
  Author5,
  Author6,
  Author7,
  Author1,
  Author2,
  Author3,
  Author4,
  Author5,
];
</script>

<template>
  <section class="books-grid pb-5 md:pb-10">
    <div class="container">
      <Title :text="props.title" />
      <div class="flex flex-wrap">
        <div
          class="grid_item"
          v-for="(item, index) in authors"
          :key="index + '-author-item'"
        >
          <AuthorCard :img="item" />
        </div>
      </div>
      <div class="text-center mt-3">
        <button
          class="rounded-md py-1 sm:py-2 px-3 sm:px-5 text-sm sm:text-base border border-[#701BF8] text-[#701BF8] outline-none hover:text-white hover:bg-[#701BF8] duration-200"
        >
          See more
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid_item {
  width: calc(100% / 6 - 16px);
  margin: 0 8px 16px 8px;
}
@media screen and (max-width: 1280px) {
  .grid_item {
    width: calc(100% / 5 - 12px);
    margin: 0 6px 12px 6px;
  }
}
@media screen and (max-width: 1024px) {
  .grid_item {
    width: calc(100% / 4 - 10px);
    margin: 0 5px 10px 5px;
  }
}
@media screen and (max-width: 768px) {
  .grid_item {
    width: calc(100% / 3 - 10px);
  }
}
@media screen and (max-width: 640px) {
  .grid_item {
    width: calc(100% / 2 - 10px);
  }
}
</style>
