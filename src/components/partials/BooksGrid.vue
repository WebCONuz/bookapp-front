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
  <div class="books-grid my-10">
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
    </div>
  </div>
</template>

<style scoped>
.item {
  width: calc(100% / 6 - 16px);
  margin: 0 8px 16px 8px;
}
</style>
