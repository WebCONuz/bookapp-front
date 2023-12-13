<script setup>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import PartSlider from "@/components/partials/PartSlider.vue";
import { useAuthorStore } from "../stores/author";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const authorStore = useAuthorStore();
const fullName = ref(null);
const getAllData = async () => {
  await authorStore.getOneAuthor(route.params.id);
  fullName.value =
    authorStore.author.data?.first_name +
    " " +
    authorStore.author.data?.last_name;
};
const datas = [
  { name: "Bosh sahifa", link: "/" },
  { name: "Barcha Mualliflar", link: "/authors" },
  {
    name: fullName.value || "Muallif",
    link: "/authors/" + route.params.id,
  },
];

onMounted(() => {
  getAllData();
});
</script>

<template>
  <div class="author pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <section
      class="container flex flex-col sm:flex-row items-start pt-4 sm:pt-6 md:pt-10 pb-4 md:pb-8 xl:pb-16"
    >
      <div class="sm:w-1/4 md:w-[40%]">
        <img
          :src="authorStore.author.data?.avatar_url"
          alt="author-image"
          class="w-[100px] sm:w-full rounded-lg md:rounded-xl mb-2 md:mb-4"
        />
        <p
          class="hidden sm:block text-gray-600 text-base md:text-2xl xl:text-3xl text-center font-semibold"
        >
          ( {{ authorStore.author.data?.birth_day?.slice(0, 4) }} -
          {{ authorStore.author.data?.died_year?.slice(0, 4) || "..." }} )
        </p>
      </div>
      <div class="w-full sm:w-3/4 md:w-[60%] sm:pl-4 md:pl-8 2xl:pl-10">
        <!-- title -->
        <h1
          class="text-lg sm:text-xl md:text-3xl xl:text-5xl text-gray-600 font-semibold uppercase mb-2 md:mb-3 xl:mb-5"
        >
          {{ authorStore.author.data?.first_name }}
          {{ authorStore.author.data?.last_name }}
        </h1>
        <p class="text-sm md:text-base md:mb-6 xl:mb-8">
          {{ authorStore.author.data?.about_text }}
        </p>
        <div class="hidden lg:block xl:mb-10">
          <div class="flex items-start mb-2">
            <i
              class="bx bxs-bookmark-star text-2xl xl:text-3xl mr-2 xl:mr-3 text-gray-600"
            ></i>
            <h3
              class="text-lx xl:text-xl uppercase font-semibold text-gray-600"
            >
              ijodi
            </h3>
          </div>
          <p class="w-[400px] xl:w-[363px]">
            {{ authorStore.author.data?.creativity }}
          </p>
        </div>
        <div class="hidden xl:block">
          <div class="flex items-start mb-4">
            <i class="bx bxs-bookmark-alt text-3xl mr-4 text-gray-600"></i>
            <h3 class="text-xl uppercase font-semibold text-gray-600">
              asarlari
            </h3>
          </div>
          <PartSlider :data="authorStore.author.data?.books" />
        </div>
      </div>
    </section>
    <section>
      <div class="container mb-5 sm:mb-6 md:mb-10 lg:hidden">
        <div class="flex items-start mb-1 sm:mb-2">
          <i
            class="bx bxs-bookmark-star text-2xl md:text-3xl mr-2 md:mr-3 text-gray-600"
          ></i>
          <h3 class="text-lg md:text-xl uppercase font-semibold text-gray-600">
            ijodi
          </h3>
        </div>
        <p class="text-sm md:text-base w-full">
          {{ authorStore.author.data?.creativity }}
        </p>
      </div>
      <div class="container xl:hidden">
        <div class="flex items-start mb-2 sm:mb-3 md:mb-4">
          <i
            class="bx bxs-bookmark-alt text-2xl md:text-3xl mr-2 md:mr-3 lg:mr-4 text-gray-600"
          ></i>
          <h3 class="text-lg md:text-xl uppercase font-semibold text-gray-600">
            asarlari
          </h3>
        </div>
        <PartSlider :data="authorStore.author.data?.books" />
      </div>
    </section>
  </div>
</template>

<style></style>
