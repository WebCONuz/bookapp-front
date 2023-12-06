<script setup>
import { onMounted, ref } from "vue";
import SubMenu from "../ui/SubMenu.vue";

const isLogin = ref(false);
const categories = [
  {
    title: "Arts & Photography",
    subCategories: ["subCategory", "subCategory", "subCategory", "subCategory"],
  },
  {
    title: "Biographies",
    subCategories: [
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
    ],
  },
  {
    title: "Geography",
    subCategories: ["subCategory", "subCategory", "subCategory"],
  },
  {
    title: "Languages",
  },
  {
    title: "Novels",
  },
  {
    title: "Medicines",
    subCategories: [
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
      "subCategory",
    ],
  },
  {
    title: "Algorithms & IT",
  },
];

const scrolling = ref(false);
function scrollHeader() {
  if (window.scrollY === 0) {
    scrolling.value = false;
  } else {
    scrolling.value = true;
  }
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollHeader();
  });
});
</script>

<template>
  <header
    class="header bg-white sticky top-0 left-0 z-30 w-full duration-200"
    :class="scrolling ? 'shadow-xl' : ''"
  >
    <div class="container py-4">
      <div class="header__top flex items-center justify-between px-2">
        <!-- logo -->
        <router-link to="/" class="flex items-center">
          <!-- <img src="../../assets/images/logo/book.png" alt="logo" class="w-8 mr-2" /> -->
          <h3 class="text-2xl font-bold text-[#701BF8] uppercase">Book App</h3>
        </router-link>

        <!-- menu -->
        <ul class="flex items-center">
          <li
            class="category mr-2 relative flex px-4 items-center border border-gray-300 rounded cursor-pointer"
          >
            <i class="bx bx-menu text-lg"></i>
            <span class="py-2 ml-2 mr-1">Kategoriyalar</span>
            <i class="bx bx-chevron-down text-lg"></i>
            <SubMenu :data="categories" class="open-sub-menu" />
          </li>
          <li class="relative mr-6">
            <input
              type="text"
              placeholder="search"
              class="py-2 pl-4 pr-9 rounded outline-none border border-gray-300 w-[350px]"
            />
            <i
              class="bx bx-search text-2xl text-gray-400 absolute right-2 top-1/2 -translate-y-1/2"
            ></i>
          </li>
          <li class="mr-6">
            <router-link
              to="/authors"
              class="py-2 hover:text-[#701BF8] duration-200"
              >Mualliflar</router-link
            >
          </li>
          <li class="mr-6">
            <router-link
              to="/books"
              class="py-2 hover:text-[#701BF8] duration-200"
              >Kitoblar</router-link
            >
          </li>
          <li class="mr-6">
            <router-link
              to="/books?more=ture"
              class="py-2 hover:text-[#701BF8] duration-200"
            >
              Eng ko'p o'qilgan
            </router-link>
          </li>
        </ul>

        <!-- avatar -->
        <!-- <ul>
          <li v-if="isLogin" class="flex items-center">
            <img
              src="../../assets/images/ui/profile.png"
              alt="profile"
              class="w-12 mr-1"
            />
            <i class="bx bx-chevron-down text-lg ml-1"></i>
          </li>
          <li v-else class="flex">
            <router-link
              to="auth"
              class="flex items-center py-[6px] px-4 bg-[#701BF8] text-white text-sm rounded-md outline-none border-none"
            >
              <i class="bx bxs-lock mr-1 text-lg"></i>
              <span>AUTH</span>
            </router-link>
          </li>
        </ul> -->
      </div>
      <!-- <div class="header__bottom"></div> -->
    </div>
  </header>
</template>

<style scoped>
.category .open-sub-menu {
  opacity: 0;
  visibility: hidden;
}
.category:hover .open-sub-menu {
  opacity: 1;
  visibility: visible;
}
</style>
