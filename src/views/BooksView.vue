<script setup>
import BooksGrid from "@/components/partials/BooksGrid.vue";
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
const datas = [
  { name: "Home", link: "/" },
  { name: "Books", link: "/books" },
];
</script>

<template>
  <div class="books pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- filter -->
    <section
      class="container flex flex-wrap sm:gap-x-3 md:gap-x-0 sm:flex-nowrap md:justify-between pt-3 pb-8"
    >
      <!-- search -->
      <div
        class="flex w-full sm:w-[70%] md:w-[400px] relative xl:mr-6 mb-2 sm:mb-0"
      >
        <input
          type="text"
          placeholder="search"
          class="py-2 px-4 rounded-l outline-none border border-gray-300 w-[85%]"
        />
        <button
          class="py-2 rounded-r outline-none w-[15%] bg-gray-400 relative border-none"
        >
          <i
            class="bx bx-search text-xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          ></i>
        </button>
      </div>

      <!-- select -->
      <select
        class="w-full sm:w-[30%] md:w-auto py-2 px-4 rounded outline-none border border-gray-300"
      >
        <option value="1">Barcha kitoblar</option>
        <option value="2">Saralangan kitoblar</option>
        <option value="3">Eng ko'p o'qilgan kitoblar</option>
      </select>
    </section>

    <!-- sections -->
    <BooksGrid title="Barcha kitoblar" />
  </div>
</template>

<style></style>
