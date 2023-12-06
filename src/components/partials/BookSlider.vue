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
    <div class="container">
      <Title :text="props.title" />
      <div class="px-2">
        <swiper
          :slidesPerView="6"
          :spaceBetween="16"
          :navigation="true"
          :loop="true"
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
    </div>
  </section>
</template>

<style>
.book_slider .swiper-button-prev,
.book_slider .swiper-button-next {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0;
  transition: 0.2s;
}
.mySwiper:hover .swiper-button-prev,
.mySwiper:hover .swiper-button-next {
  opacity: 1;
}
.book_slider .swiper-button-prev::after,
.book_slider .swiper-button-next::after {
  font-size: 14px;
  color: #00000095;
  font-weight: bold;
}
.book_slider .swiper-button-prev {
  left: 1.5rem;
  right: auto;
}
.book_slider .swiper-button-next {
  left: auto;
  right: 1.5rem;
}
</style>
