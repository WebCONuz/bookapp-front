<script setup>
import Testimotional from "@/components/partials/Testimotional.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";

const datas = [
  { name: "Home", link: "/" },
  { name: "Books", link: "/books" },
  { name: "O'tgan kunlar", link: "/books/1" },
];
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
          src="@/assets/images/books/book7.jpg"
          alt="wrapper-image"
          class="w-1/3 sm:hidden lg:block sm:w-1/2 xl:w-[45%] 2xl:w-[40%] rounded-md bg-gray-300 mb-6 sm:mb-0"
        />
        <!-- 2 -->
        <div
          class="w-full lg:w-1/2 xl:w-[55%] 2xl:w-[60%] lg:pl-8 xl:pl-10 2xl:pl-12"
        >
          <div class="flex items-center lg:block mb-6 sm:mb-8 lg:mb-0">
            <img
              src="@/assets/images/books/book6.jpg"
              alt="wrapper-image"
              class="w-[44%] sm:w-1/3 rounded-md bg-gray-300 hidden sm:block lg:hidden"
            />
            <div class="w-full sm:w-2/3 sm:pl-6 lg:pl-0 lg:w-full">
              <!-- title -->
              <h1
                class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#701BF8] font-semibold uppercase mb-2"
              >
                "Ajdar"ning tavbasi
              </h1>

              <!-- raiting -->
              <div class="flex mb-3 sm:mb-6 xl:mb-8">
                <span class="text-lg mr-3 sm:mr-4 text-[#701BF8]">
                  O'tkir Hoshimov
                </span>
                <span class="flex items-center mr-2">
                  <i class="bx bxs-star mr-1"></i>
                  <span>4.2</span>
                </span>
                <span>|</span>
                <span class="flex items-center ml-2">
                  <i class="bx bx-show-alt mr-1"></i>
                  <span>37</span>
                </span>
              </div>

              <!-- info -->
              <ul class="lg:mb-6 xl:mb-8">
                <li class="flex text-lg mb-2">
                  <span class="text-gray-600">Sahifalar soni:</span>
                  <span class="ml-3">376 ta</span>
                </li>
                <li class="flex text-lg mb-2">
                  <span class="text-gray-600">Chop etilgan:</span>
                  <span class="ml-3">2022 yil</span>
                </li>
                <li class="flex text-lg mb-2">
                  <span class="text-gray-600">Janri:</span>
                  <span class="ml-3">Badiiy</span>
                </li>
                <li class="flex text-lg mb-2">
                  <span class="text-gray-600">Nashriyot</span>
                  <span class="ml-3">Nihol nashr</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- description -->
          <div class="mb-4 sm:mb-6 xl:mb-8">
            <h4 class="text-lg mb-2 sm:mb-4 text-[#701BF8]">
              Qisqacha ma'lumot
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              nisi assumenda aspernatur numquam nemo, iusto cupiditate molestiae
              soluta, qui consectetur quam blanditiis officia eum nihil incidunt
              tempore voluptatem repellendus. Rerum aspernatur obcaecati eius
              nihil blanditiis doloremque velit odio dolorem facere non. Illum
              porro officia facere. Tenetur adipisci iste repudiandae molestias
              consequatur officia vero nesciunt labore voluptas, pariatur quod
              totam quae!
            </p>
          </div>

          <!-- files -->
          <div class="mb-4 sm:mb-6 xl:mb-8">
            <h4 class="text-lg mb-3 sm:mb-4 text-[#701BF8]">
              Mavjud formatlar
            </h4>
            <div class="flex">
              <div class="text-center">
                <i
                  class="bx bxs-book-alt text-xl sm:text-3xl text-gray-700"
                ></i>
                <p class="mt-2 sm:mb-1 text-sm sm:text-base">Qog’oz kitob</p>
                <span class="text-gray-600 text-sm sm:text-base"
                  >27 000 so’m</span
                >
              </div>
              <div class="text-center mx-7">
                <i
                  class="bx bx-headphone text-xl sm:text-3xl text-gray-700"
                ></i>
                <p class="mt-2 sm:mb-1 text-sm sm:text-base">Audio kitob</p>
                <span class="text-gray-600 text-sm sm:text-base"
                  >7:23 soat</span
                >
              </div>
              <div class="text-center">
                <i class="bx bx-mobile text-xl sm:text-3xl text-gray-700"></i>
                <p class="mt-2 sm:mb-1 text-sm sm:text-base">Electron</p>
                <span class="text-gray-600 text-sm sm:text-base"
                  >pdf, epub</span
                >
              </div>
            </div>
          </div>

          <!-- add to cart -->
          <button
            class="bg-transparent text-[#701BF8] py-2 sm:py-4 px-4 sm:px-8 text-sm sm:text-base rounded-md outline-none border border-[#701BF8] hover:bg-[#701BF8] hover:text-white duration-200"
          >
            Javonga qo'shish
          </button>
        </div>
      </div>
    </section>
    <Testimotional title="Foydalanuvchilar fikri" />
    <MainSlider title="Sizga yoqishi mumkin" sliderType="book" />
  </div>
</template>

<style></style>
