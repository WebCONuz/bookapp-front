<script setup>
import { onMounted, ref } from "vue";
import SubMenu from "../ui/SubMenu.vue";
import Accordion from "../ui/Accordion.vue";
import { useRoute, useRouter } from "vue-router";
import { useCategoryStore } from "../../stores/category";

const route = useRoute();
const router = useRouter();
const categoryStore = useCategoryStore();
const openSubMenu = ref(false);
const searchWord = ref("");

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

const token = localStorage.getItem("book_app_token");
function goProfile() {
  if (token) {
    router.push({ name: "user-profile" });
  } else {
    router.push({ name: "auth" });
  }
}

onMounted(() => {
  categoryStore.getCategories({ page: 1, limit: 10 });
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
          <img
            src="../../assets/images/logo/book.png"
            alt="logo"
            class="w-8 mr-2"
          />
          <h3
            class="text-lg sm:text-xl xl:text-2xl font-bold text-[#701BF8] uppercase"
          >
            Book App
          </h3>
        </router-link>

        <!-- burger -->
        <div class="flex items-center lg:hidden">
          <router-link to="/profile" class="relative mr-4">
            <i class="bx bx-heart text-2xl text-gray-500"></i>
            <div
              class="absolute w-[18px] h-[18px] rounded-full bg-gray-500 -right-[7px] -bottom-[1px] flex items-center justify-center"
            >
              <span class="text-[10px] text-white font-medium">12</span>
            </div>
          </router-link>
          <router-link to="/profile" class="relative mr-3">
            <i class="bx bx-user-circle text-2xl text-gray-500"></i>
          </router-link>
          <div
            @click="openSubMenu = !openSubMenu"
            class="text-gray-500 w-9 h-8 border-2 border-gray-500 flex items-center justify-center rounded"
          >
            <i v-if="!openSubMenu" class="bx bx-menu text-2xl"></i>
            <i v-else class="bx bx-x text-3xl"></i>
          </div>
        </div>

        <!-- menu -->
        <ul class="hidden lg:flex items-center">
          <li
            class="category relative flex px-4 items-center border border-gray-300 rounded cursor-pointer"
            :class="
              route.path !== '/books' && route.path !== '/authors'
                ? 'mr-[6px] xl:mr-2'
                : 'mr-4 xl:mr-6'
            "
          >
            <i class="bx bx-menu text-lg"></i>
            <span class="py-2 ml-2 mr-1">Kategoriyalar</span>
            <i class="bx bx-chevron-down text-lg"></i>
            <SubMenu
              :data="categoryStore.categories.data"
              class="open-sub-menu"
            />
          </li>
          <li
            class="relative mr-4 xl:mr-6"
            v-if="route.path !== '/books' && route.path !== '/authors'"
          >
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
            <!-- search -->
            <h4 class="mb-2 text-lg font-semibold text-gray-700">Search</h4>
            <div class="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                class="py-2 pl-3 sm:pl-4 pr-8 sm:pr-9 w-full rounded outline-none border border-gray-300 text-sm sm:text-base"
                v-model="searchWord"
              />
              <i
                class="bx bx-search text-xl sm:text-2xl text-gray-400 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2"
              ></i>
            </div>

            <!-- menu -->
            <h4 class="mb-2 text-lg font-semibold text-gray-700">Menu</h4>
            <ul class="flex flex-col mb-4">
              <li class="mb-2 pl-4">
                <router-link
                  to="/books"
                  class="py-2 hover:text-[#701BF8] duration-200"
                  >Kitoblar</router-link
                >
              </li>
              <li class="mb-2 pl-4">
                <router-link
                  to="/authors"
                  class="py-2 hover:text-[#701BF8] duration-200"
                  >Mualliflar</router-link
                >
              </li>
            </ul>

            <!-- kategoriyalar -->
            <h4 class="mb-1 sm:mb-2 text-lg font-semibold text-gray-700">
              Kategoriyalar
            </h4>
            <Accordion
              v-for="(item, index) in categoryStore.categories.data"
              :key="index + '-res-menu-item'"
              :data="item"
            />
          </div>
        </div>

        <!-- avatar -->
        <ul class="hidden lg:flex items-center">
          <li class="mr-4 relative" @click="goProfile">
            <i class="bx bx-heart text-2xl text-gray-600"></i>
            <div
              class="absolute w-[18px] h-[18px] rounded-full bg-gray-600 -right-[7px] -bottom-[1px] flex items-center justify-center"
            >
              <span class="text-[10px] text-white font-medium">12</span>
            </div>
          </li>
          <li class="relative" @click="goProfile">
            <i class="bx bx-user-circle text-2xl text-gray-600"></i>
          </li>
        </ul>
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
