<script setup>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import MainSlider from "@/components/partials/MainSlider.vue";
import Avatar from "@/assets/images/ui/avatar.png";
import EditProfile from "../components/modals/EditProfile.vue";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const datas = [
  { name: "Home", link: "/" },
  { name: "Profile", link: "/profile" },
];
const userId = localStorage.getItem("book_app_user");
const openEditModal = ref(null);
const userStore = useAuthStore();

const getAllData = async () => {
  await userStore.getMe(userId);
};

onMounted(() => {
  getAllData();
});
</script>

<template>
  <EditProfile ref="openEditModal" :getAll="getAllData" />
  <div class="user-profile pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <!-- profile info -->
    <section class="py-5 sm:py-10">
      <div class="container flex items-center justify-center">
        <img
          :src="userStore.client.data?.avatar_url || Avatar"
          alt="profile-image"
          class="w-[150px] h-[150px] rounded-full mb-4 shadow-lg object-cover"
        />
        <div class="ml-8">
          <h1 class="text-xl text-gray-600 font-semibold uppercase mb-2">
            {{ userStore.client.data?.full_name }}
          </h1>
          <p v-if="userStore.client.data?.login" class="mb-4">
            {{ userStore.client.data?.login }}
          </p>
          <button
            @click="openEditModal.openModal(userStore.client.data)"
            class="py-2 px-6 bg-blue-600 text-white rounded-md"
          >
            Edit Data
          </button>
        </div>
      </div>
    </section>

    <!-- favorite books -->
    <MainSlider
      v-if="userStore.client.data?.like_books?.length > 0"
      title="Yoqtirgan kitoblarim"
      sliderType="book"
      :data="userStore.client.data?.like_books"
    />
  </div>
</template>

<style></style>
