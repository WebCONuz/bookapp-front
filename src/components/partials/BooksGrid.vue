<script setup>
import BookCard from "../cards/BookCard.vue";
import Title from "../ui/Title.vue";

import Book1 from "../../assets/images/books/book1.jpg";
import Book2 from "../../assets/images/books/book2.jpg";
import Book3 from "../../assets/images/books/book3.jpg";
import Book4 from "../../assets/images/books/book4.jpg";
import Book5 from "../../assets/images/books/book5.jpg";
import Book6 from "../../assets/images/books/book6.jpg";

const props = defineProps({
  title: String,
  books: Array,
});

// const books = [
//   Book1,
//   Book2,
//   Book3,
//   Book4,
//   Book5,
//   Book6,
//   Book1,
//   Book2,
//   Book3,
//   Book4,
//   Book5,
//   Book6,
// ];
</script>

<template>
  <section class="books-grid pb-5 md:pb-10">
    <div class="container">
      <Title :text="props.title" />
      <div class="flex flex-wrap">
        <div
          class="grid_item"
          v-for="(item, index) in props.books"
          :key="index + '-book-item'"
        >
          <BookCard :data="item" />
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
