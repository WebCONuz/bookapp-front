<script setup>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import Avatar from "@/assets/images/ui/avatar.png";
const datas = [
  { name: "Home", link: "/" },
  { name: "Profile", link: "/profile" },
];
</script>

<template>
  <div class="user-profile pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- profile info -->
    <section class="pt-5 sm:pt-10 pb-10 sm:pb-20">
      <div class="container flex flex-col items-center mb-5 sm:mb-10">
        <img
          :src="Avatar"
          alt="profile-image"
          class="w-[150px] h-[150px] rounded-full mb-4"
        />
        <h1
          class="text-xl text-gray-600 font-semibold uppercase mb-2 md:mb-3 xl:mb-5"
        >
          O'tkir Hoshimov
        </h1>
      </div>
      <div class="container flex flex-wrap lg:flex-nowrap lg:gap-x-8">
        <form class="w-full lg:w-1/2 block mb-8 sm:mb-10 lg:mb-0">
          <h3
            class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-3"
          >
            Profilni yangilash
          </h3>
          <label for="fullname" class="mb-1 inline-block">Ism-sharif</label>
          <input
            id="fullname"
            type="text"
            class="py-2 sm:py-3 px-4 w-full mb-2 border border-gray-300 outline-none rounded-md"
          />
          <label for="login" class="mb-1 inline-block">Login</label>
          <input
            id="login"
            type="text"
            class="py-2 sm:py-3 px-4 w-full mb-2 border border-gray-300 outline-none rounded-md"
          />
          <label for="image" class="mb-1 inline-block">Profile rasmi</label>
          <input
            id="image"
            type="file"
            class="py-[6px] sm:py-2 px-2 w-full mb-4 border border-gray-300 outline-none rounded-md bg-white"
          />
          <input
            type="submit"
            value="Profilni yangilash"
            class="py-2 sm:py-3 px-4 w-full bg-blue-600 text-white outline-none rounded-md"
          />
        </form>
        <form class="w-full lg:w-1/2 block">
          <h3
            class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-3"
          >
            Parolni O'zgartirish
          </h3>
          <label for="password-1" class="mb-1 inline-block">Eski parol</label>
          <input
            id="password-1"
            type="password"
            class="py-2 sm:py-3 px-4 w-full mb-2 border border-gray-300 outline-none rounded-md"
          />
          <label for="password-2" class="mb-1 inline-block">Yangi parol</label>
          <input
            id="password-2"
            type="password"
            class="py-2 sm:py-3 px-4 w-full mb-2 border border-gray-300 outline-none rounded-md"
          />
          <label for="password-3" class="mb-1 inline-block"
            >Takroriy yangi parol</label
          >
          <input
            id="password-3"
            type="password"
            class="py-2 sm:py-3 px-4 w-full mb-4 border border-gray-300 outline-none rounded-md"
          />
          <input
            type="submit"
            value="Parolni o'zgartirish"
            class="py-2 sm:py-3 px-4 w-full bg-blue-600 text-white outline-none rounded-md"
          />
        </form>
      </div>
    </section>

    <!-- favorite books -->
    <MainSlider title="Yoqtirgan kitoblarim" sliderType="book" />
  </div>
</template>

<style></style>
