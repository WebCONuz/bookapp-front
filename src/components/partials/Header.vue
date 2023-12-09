<script setup>
import { onMounted, ref } from "vue";
import SubMenu from "../ui/SubMenu.vue";
import Accordion from "../ui/Accordion.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const openSubMenu = ref(false);
const isSearchLength = ref(false);
const searchWord = ref("");
function openSerachlength() {
  if (!isSearchLength.value) {
    isSearchLength.value = true;
  } else if (searchWord.value) {
    console.log(searchWord.value);
  }
}

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
    class="header bg-white sticky top-0 left-0 z-30 w-full duration-200 h-[61.6px] sm:h-[73.6px] flex items-center"
    :class="scrolling ? 'shadow-xl' : ''"
  >
    <div class="container py-4">
      <div
        class="header__top flex items-center justify-between px-[5px] lg:px-2"
      >
        <!-- logo -->
        <router-link to="/" class="flex items-center">
          <!-- <img src="../../assets/images/logo/book.png" alt="logo" class="w-8 mr-2" /> -->
          <h3
            class="text-lg sm:text-xl xl:text-2xl font-bold text-[#701BF8] uppercase"
          >
            Book App
          </h3>
        </router-link>

        <!-- burger -->
        <div class="flex items-center lg:hidden">
          <div class="relative mr-[6px] sm:mr-3" v-if="route.path !== '/books'">
            <input
              type="text"
              :placeholder="isSearchLength ? 'search' : ''"
              class="py-1 sm:py-2 rounded outline-none border border-gray-300 text-sm sm:text-base"
              :class="
                isSearchLength
                  ? 'w-[190px] sm:w-[250px] pl-2 sm:pl-4 pr-8 sm:pr-9'
                  : 'w-[38px] sm:w-[50px]'
              "
              :disabled="!isSearchLength ? true : false"
              v-model="searchWord"
            />
            <i
              @click="openSerachlength"
              class="bx bx-search text-xl sm:text-2xl text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2"
            ></i>
          </div>
          <div
            @click="openSubMenu = !openSubMenu"
            class="w-[22px] h-[28px] overflow-hidden"
          >
            <i v-if="!openSubMenu" class="bx bx-menu text-xl"></i>
            <i v-else class="bx bx-x text-2xl"></i>
          </div>
        </div>

        <!-- menu -->
        <ul class="hidden lg:flex items-center">
          <li
            class="category relative flex px-4 items-center border border-gray-300 rounded cursor-pointer"
            :class="
              route.path !== '/books' ? 'mr-[6px] xl:mr-2' : 'mr-4 xl:mr-6'
            "
          >
            <i class="bx bx-menu text-lg"></i>
            <span class="py-2 ml-2 mr-1">Kategoriyalar</span>
            <i class="bx bx-chevron-down text-lg"></i>
            <SubMenu :data="categories" class="open-sub-menu" />
          </li>
          <li class="relative mr-4 xl:mr-6" v-if="route.path !== '/books'">
            <input
              type="text"
              placeholder="search"
              class="py-2 pl-4 pr-9 rounded outline-none border border-gray-300 w-[250px] xl:w-[350px]"
            />
            <i
              class="bx bx-search text-2xl text-gray-400 absolute right-2 top-1/2 -translate-y-1/2"
            ></i>
          </li>
          <li class="mr-4 xl:mr-6">
            <router-link to="/" class="py-2 hover:text-[#701BF8] duration-200">
              Bosh sahifa
            </router-link>
          </li>
          <li class="mr-4 xl:mr-6">
            <router-link
              to="/books"
              class="py-2 hover:text-[#701BF8] duration-200"
              >Kitoblar</router-link
            >
          </li>
          <li class="">
            <router-link
              to="/authors"
              class="py-2 hover:text-[#701BF8] duration-200"
              >Mualliflar</router-link
            >
          </li>
        </ul>

        <!-- responsive menu -->
        <div
          class="res_menu absolute top-[61.5px] sm:top-[73.3px] w-full bg-white flex lg:hidden flex-col border-t border-gray-300 overflow-y-auto duration-200"
          :class="openSubMenu ? 'left-0' : '-left-full'"
        >
          <div class="container pt-4">
            <h4 class="mb-2 text-lg font-semibold text-gray-700">Menu</h4>
            <ul class="flex flex-col mb-4">
              <li class="mb-2 pl-4">
                <router-link
                  to="/authors"
                  class="py-2 hover:text-[#701BF8] duration-200"
                  >Mualliflar</router-link
                >
              </li>
              <li class="mb-2 pl-4">
                <router-link
                  to="/books"
                  class="py-2 hover:text-[#701BF8] duration-200"
                  >Barcha Kitoblar</router-link
                >
              </li>
              <li class="mb-2 pl-4">
                <router-link
                  to="/books?more=ture"
                  class="py-2 hover:text-[#701BF8] duration-200"
                >
                  Ko'p o'qilgan kitoblar
                </router-link>
              </li>
            </ul>
            <h4 class="mb-2 text-lg font-semibold text-gray-700">
              Kategoriyalar
            </h4>
            <Accordion
              v-for="(item, index) in categories"
              :key="index + '-res-menu-item'"
              :data="item"
            />
          </div>
        </div>

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
.res_menu {
  height: calc(100vh - 73.3px);
}
@media screen and (max-width: 768px) {
  .res_menu {
    height: calc(100vh - 61.5px);
  }
}
</style>
