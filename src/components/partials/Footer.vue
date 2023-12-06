<script setup></script>

<template>
  <footer class="footer pt-12 bg-[#2A2C2E]">
    <div class="container flex pb-8">
      <div class="w-1/4">
        <h2 class="text-white mb-4 text-2xl font-bold">Contact</h2>
        <h2 class="text-gray-300 mb-1">
          <b class="text-white">Email:</b> example@gmail.com
        </h2>
        <h2 class="text-gray-300">
          <b class="text-white">Tel:</b> +998 99 542 10 10
        </h2>
      </div>
      <div class="w-1/2 flex justify-evenly">
        <div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Shaxsiy kabinet
          </div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Murojaat yo'llash
          </div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            So'ngi yangiliklar
          </div>
        </div>
        <div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Qidiruv
          </div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Barcha kitoblar
          </div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Yangi kitoblar
          </div>
          <div class="text-gray-300 mb-2 hover:text-white duration-200">
            Eng ko'p o'qilganlar
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <div class="mb-2">
          <p class="mb-5 text-white">
            Bizni ijtimoiy tarmoqlar orqali ham kuzatib boring:
          </p>
          <div class="flex text-2xl">
            <i
              class="bx bxl-telegram mr-[10px] text-gray-300 hover:text-white duration-200"
            ></i>
            <i
              class="bx bxl-instagram mr-[10px] text-gray-300 hover:text-white duration-200"
            ></i>
            <i
              class="bx bxl-facebook-circle mr-[10px] text-gray-300 hover:text-white duration-200"
            ></i>
            <i
              class="bx bxl-twitter mr-[10px] text-gray-300 hover:text-white duration-200"
            ></i>
            <i
              class="bx bxl-linkedin text-gray-300 hover:text-white duration-200"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex items-center justify-between py-4 bg-[#383a3c]">
      <p class="text-white">
        &copy; {{ new Date().getFullYear() }}. Barcha huquqlar himoyalangan.
        BookApp
      </p>
      <p class="text-white">Ishlab chiquvchi: <q>Winners Group</q></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
