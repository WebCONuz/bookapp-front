<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner1 from "../../assets/images/banners/banner1.jpeg";
import Banner2 from "../../assets/images/banners/banner2.jpg";
import Banner3 from "../../assets/images/banners/banner3.jpg";

const modules = ref([Autoplay, Pagination]);
const bg_images = [Banner1, Banner2, Banner3];
</script>

<template>
  <section class="intro py-4">
    <div class="container">
      <div class="px-2">
        <swiper
          :slidesPerView="1"
          :spaceBetween="25"
          :pagination="{
            clickable: true,
          }"
          :loop="true"
          :centeredSlides="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in bg_images"
            :key="index + '-caroucel-item'"
          >
            <img
              :src="item"
              alt="banner"
              class="w-full h-[350px] object-cover rounded-md"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.intro .swiper-pagination {
  width: auto;
  top: auto;
  bottom: 15px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  overflow: visible;
}
.intro .swiper-pagination .swiper-pagination-bullet {
  background-color: #fff;
  width: 10px;
  height: 10px;
  opacity: 1;
  margin-right: 10px;
}
.intro .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #701bf8;
  position: relative;
}
.intro .swiper-pagination .swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  top: 0;
  left: -0.05px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0.5px solid #701bf8;
  border-radius: 50%;
  transform: scale(2);
  transform-origin: center;
}
</style>
