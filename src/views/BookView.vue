<script setup>
import Testimotional from "@/components/partials/Testimotional.vue";
import BookSlider from "@/components/partials/BookSlider.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";

const datas = [
  { name: "Home", link: "/" },
  { name: "Books", link: "/books" },
  { name: "O'tgan kunlar", link: "/books/1" },
];
</script>

<template>
  <main class="single-book min-h-[70vh] bg-[#FAFAFA] pt-12">
    <!-- breadcrumb -->
    <div class="container">
      <BreadCrumb :content="datas" />
    </div>
    <!-- info book -->
    <div class="container mb-20">
      <div class="flex flex-col sm:flex-row sm:items-center px-[10px]">
        <!-- 1 -->
        <img
          src="@/assets/images/books/book6.jpg"
          alt="wrapper-image"
          class="w-1/3 sm:hidden lg:block sm:w-1/2 xl:w-[45%] 2xl:w-[40%] rounded-md bg-gray-300 mb-6 sm:mb-0"
        />
        <!-- 2 -->
        <div
          class="w-full lg:w-1/2 xl:w-[55%] 2xl:w-[60%] lg:pl-8 xl:pl-10 2xl:pl-12"
        >
          <div class="flex items-center lg:block mb-8 lg:mb-0">
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
              <div class="flex mb-6 xl:mb-8">
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
          <div class="mb-6 xl:mb-8">
            <h4 class="text-lg mb-4 text-[#701BF8]">Qisqacha ma'lumot</h4>
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
          <div class="mb-6 xl:mb-8">
            <h4 class="text-lg mb-4 text-[#701BF8]">Mavjud formatlar</h4>
            <div class="flex">
              <div class="text-center">
                <i class="bx bxs-book-alt text-3xl text-gray-700"></i>
                <p class="mt-2 mb-1">Qog’oz kitob</p>
                <span class="text-gray-600">27 000 so’m</span>
              </div>
              <div class="text-center mx-7">
                <i class="bx bx-headphone text-3xl text-gray-700"></i>
                <p class="mt-2 mb-1">Audio kitob</p>
                <span class="text-gray-600">7:23 soat</span>
              </div>
              <div class="text-center">
                <i class="bx bx-mobile text-3xl text-gray-700"></i>
                <p class="mt-2 mb-1">Electron</p>
                <span class="text-gray-600">pdf, epub</span>
              </div>
            </div>
          </div>

          <!-- add to cart -->
          <button
            class="bg-transparent text-[#701BF8] py-4 px-8 rounded-md outline-none border border-[#701BF8] hover:bg-[#701BF8] hover:text-white duration-200"
          >
            Javonga qo'shish
          </button>
        </div>
      </div>
    </div>
    <Testimotional title="Foydalanuvchilar fikri" />
    <BookSlider title="Sizga yoqishi mumkin" />
  </main>
</template>

<style></style>
