<script setup lang="ts">
import { ref } from "vue";
import BookCard from "../cards/BookCard.vue";
import Title from "../ui/Title.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Book1 from "@/assets/images/books/book1.jpg";
import Book2 from "@/assets/images/books/book2.jpg";
import Book3 from "@/assets/images/books/book3.jpg";
import Book4 from "@/assets/images/books/book4.jpg";
import Book5 from "@/assets/images/books/book5.jpg";
import Book6 from "@/assets/images/books/book6.jpg";

const props = defineProps({
  title: String,
});
const modules = ref([Navigation]);
const books = [Book1, Book2, Book3, Book4, Book5, Book6, Book1, Book2, Book3];
</script>

<template>
  <section class="book_slider overflow-x-hidden w-full pb-20">
    <div class="container"><Title :text="props.title" /></div>
    <div class="w-[120%]">
      <swiper
        :slidesPerView="8"
        :spaceBetween="16"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :centeredSlides="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(item, index) in books"
          :key="index + '-caroucel-book-item'"
        >
          <BookCard :img="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style>
.book_slider .swiper-pagination {
  width: auto;
  bottom: 15px;
  top: auto;
  display: flex;
  align-items: center;
}
.book_slider .swiper-pagination .swiper-pagination-bullet {
  background-color: #fff;
  width: 12px;
  height: 12px;
  opacity: 1;
  margin-right: 16px;
}
.book_slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #95bef3;
  width: 20px;
  height: 20px;
}
</style>
