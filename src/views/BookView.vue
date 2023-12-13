<script setup>
import Testimotional from "@/components/partials/Testimotional.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import { useBookStore } from "../stores/book";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const showPlayer = ref(false);
const route = useRoute();
const router = useRouter();
const bookStore = useBookStore();
const getAllData = async () => {
  await bookStore.getOneBook(route.params.id);
};

const datas = [
  { name: "Bosh sahifa", link: "/" },
  { name: "Barcha kitoblar", link: "/books" },
  { name: "Kitob sahifasi", link: "/books/" + route.params.id },
];

const token = localStorage.getItem("book_app_token");
function addToCart() {
  if (token) {
    console.log("Javonga qo'shildi");
  } else {
    router.push({ name: "auth" });
  }
}

function writeDescription() {
  if (token) {
    console.log("Fikr qo'shildi");
  } else {
    router.push({ name: "auth" });
  }
}

onMounted(() => {
  getAllData();
});
</script>

<template>
  <div class="single-book pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container mb-5 sm:mb-8">
      <BreadCrumb :content="datas" />
    </section>
    <!-- info book -->
    <section class="container mb-10 sm:mb-12 md:mb-16 lg:mb-20">
      <div
        class="flex flex-col sm:flex-row sm:items-center px-5px lg:px-[6px] xl:px-2"
      >
        <!-- 1 -->
        <img
          :src="bookStore.book.data?.image"
          alt="wrapper-image"
          class="w-[100px] sm:hidden lg:block sm:w-1/2 xl:w-[45%] 2xl:w-[40%] rounded-md bg-gray-300 mb-4 sm:mb-0"
        />
        <!-- 2 -->
        <div
          class="w-full lg:w-1/2 xl:w-[55%] 2xl:w-[60%] lg:pl-8 xl:pl-10 2xl:pl-12"
        >
          <div class="flex items-center lg:block mb-4 sm:mb-8 lg:mb-0">
            <img
              :src="bookStore.book.data?.image"
              alt="wrapper-image"
              class="w-[44%] sm:w-1/3 rounded-md bg-gray-300 hidden sm:block lg:hidden"
            />
            <div class="w-full sm:w-2/3 sm:pl-6 lg:pl-0 lg:w-full">
              <!-- title -->
              <h1
                class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-bold uppercase mb-2"
              >
                {{ bookStore.book.data?.title }}
              </h1>

              <!-- raiting -->
              <div class="flex mb-3 sm:mb-6 xl:mb-8">
                <span class="text-lg mr-3 sm:mr-4 text-gray-700 font-bold">
                  {{ bookStore.book.data?.author_first_name }}
                  {{ bookStore.book.data?.author_last_name }}
                </span>
                <span class="flex items-center mr-2">
                  <i class="bx bxs-star mr-1"></i>
                  <span>{{ bookStore.book.data?.like_count }}</span>
                </span>
                <span>|</span>
                <span class="flex items-center ml-2">
                  <i class="bx bx-show-alt mr-1"></i>
                  <span>{{ bookStore.book.data?.view_count }}</span>
                </span>
              </div>

              <!-- info -->
              <!-- <ul class="lg:mb-6 xl:mb-8">
                <li class="flex sm:text-lg mb-1 sm:mb-2">
                  <span class="text-gray-600">Sahifalar soni:</span>
                  <span class="ml-3">376 ta</span>
                </li>
                <li class="flex sm:text-lg mb-1 sm:mb-2">
                  <span class="text-gray-600">Chop etilgan:</span>
                  <span class="ml-3">2022 yil</span>
                </li>
                <li class="flex sm:text-lg mb-1 sm:mb-2">
                  <span class="text-gray-600">Janri:</span>
                  <span class="ml-3">{{ bookStore.book.data?.book_type }}</span>
                </li>
                <li class="flex sm:text-lg mb-1 sm:mb-2">
                  <span class="text-gray-600">Nashriyot</span>
                  <span class="ml-3">Nihol nashr</span>
                </li>
              </ul> -->
            </div>
          </div>

          <!-- description -->
          <div class="mb-4 sm:mb-6 xl:mb-8">
            <h4 class="text-lg mb-2 sm:mb-4 text-gray-700 font-bold">
              Qisqacha ma'lumot
            </h4>
            <p>
              {{ bookStore.book.data?.description }}
            </p>
          </div>

          <!-- files -->
          <div class="mb-4 sm:mb-6 xl:mb-8">
            <h4 class="text-lg mb-3 sm:mb-4 text-gray-700 font-bold">
              Mavjud formatlar
            </h4>
            <div class="flex">
              <div
                class="text-center mr-7"
                v-if="bookStore.book.data?.audio_url"
                @click="showPlayer = true"
              >
                <i
                  class="bx bx-headphone text-xl sm:text-3xl text-gray-700"
                ></i>
                <p class="mt-2 sm:mb-1 text-sm sm:text-base">Audio kitob</p>
                <!-- <span class="text-gray-600 text-sm sm:text-base"
                  >7:23 soat</span 
                > -->
              </div>
              <a
                v-if="bookStore.book.data?.download_url"
                :href="bookStore.book.data?.download_url"
                class="text-center inline-block"
                target="_blank"
              >
                <i class="bx bx-mobile text-xl sm:text-3xl text-gray-700"></i>
                <p class="mt-2 sm:mb-1 text-sm sm:text-base">Electron</p>
                <!-- <span class="text-gray-600 text-sm sm:text-base"
                  >pdf, epub</span
                > -->
              </a>
            </div>
            <audio
              v-if="showPlayer"
              :src="bookStore.book.data?.audio_url"
              controls
              class="mt-4"
            ></audio>
          </div>

          <!-- add to cart -->
          <div class="flex">
            <button
              @click="addToCart"
              class="bg-transparent mr-2 text-gray-700 font-semibold py-2 sm:py-4 px-4 sm:px-8 text-sm sm:text-base rounded-md outline-none border border-gray-700 sm:hover:bg-gray-700 sm:hover:text-white duration-200"
            >
              Javonga qo'shish
            </button>
            <button
              @click="writeDescription"
              class="bg-transparent text-gray-700 font-semibold py-2 sm:py-4 px-4 sm:px-8 text-sm sm:text-base rounded-md outline-none border border-gray-700 sm:hover:bg-gray-700 sm:hover:text-white duration-200"
            >
              Fikr bildirish
            </button>
          </div>
        </div>
      </div>
    </section>
    <Testimotional
      title="Foydalanuvchilar fikri"
      :data="bookStore.book.data?.comments"
    />
    <MainSlider
      title="Sizga yoqishi mumkin"
      sliderType="book"
      :data="bookStore.book.data?.similar_books"
    />
  </div>
</template>

<style></style>
