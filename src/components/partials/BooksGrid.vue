<script setup>
import BookCard from "../cards/BookCard.vue";
import Title from "../ui/Title.vue";

import Book1 from "../../assets/images/books/book1.jpg";
import Book2 from "../../assets/images/books/book2.jpg";
import Book3 from "../../assets/images/books/book3.jpg";
import Book4 from "../../assets/images/books/book4.jpg";
import Book5 from "../../assets/images/books/book5.jpg";
import Book6 from "../../assets/images/books/book6.jpg";
const books = [
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
];
</script>

<template>
  <div class="books-grid my-5 md:my-10">
    <div class="container">
      <Title text="Kitoblar" />
      <div class="flex flex-wrap">
        <div
          class="item"
          v-for="(item, index) in books"
          :key="index + '-book-item'"
        >
          <BookCard :img="item" />
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
  </div>
</template>

<style scoped>
.item {
  width: calc(100% / 6 - 16px);
  margin: 0 8px 16px 8px;
}
@media screen and (max-width: 1280px) {
  .item {
    width: calc(100% / 5 - 12px);
    margin: 0 6px 12px 6px;
  }
}
@media screen and (max-width: 1024px) {
  .item {
    width: calc(100% / 4 - 10px);
    margin: 0 5px 10px 5px;
  }
}
@media screen and (max-width: 768px) {
  .item {
    width: calc(100% / 3 - 10px);
  }
}
@media screen and (max-width: 640px) {
  .item {
    width: calc(100% / 2 - 10px);
  }
}
</style>
