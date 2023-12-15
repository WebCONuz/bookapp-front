<script setup>
import AppModal from "./AppModal.vue";
import { reactive, ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const userStore = useAuthStore();
const props = defineProps({
  getAll: Function,
});
const userData = reactive({
  full_name: "",
  login: "",
  password: "",
});

// open modal
const dialog = ref(false);
let oldData;
const openModal = (data) => {
  oldData = data;
  dialog.value = true;
};
defineExpose({ openModal });

// get values
const userImage = ref(null);
function uploadFile(e) {
  userImage.value = e.target.files[0];
}

// send data to back
const submitData = async () => {
  let formData;
  if (userImage.value) {
    formData = userImage.value;
  } else {
    formData = oldData?.avatar_url;
  }

  await userStore.editProfile(formData, {
    id: +oldData?.id,
    full_name: userData.full_name || oldData?.full_name,
    login: userData.login || oldData?.login,
    password: userData.password || "",
  });
  props.getAll();
  dialog.value = false;
};
</script>

<template>
  <AppModal v-model="dialog" width="600px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-3 sm:top-5 right-5 cursor-pointer"
      @click="dialog = !dialog"
    ></i>

    <!-- form -->
    <form class="block" @submit.prevent="submitData">
      <h3
        class="text-gray-500 mb-2 sm:mb-4 text-center font-semibold text-lg sm:text-xl"
      >
        Shaxsiy ma'lumotlarni o'zgartirish
      </h3>
      <input
        type="text"
        class="outline-none py-2 px-4 rounded-lg w-full border border-gray-400 mb-2"
        placeholder="Ism-sharif"
        v-model="userData.full_name"
      />
      <input
        type="email"
        class="outline-none py-2 px-4 rounded-lg w-full border border-gray-400 mb-2"
        placeholder="Email"
        v-model="userData.login"
      />
      <input
        type="password"
        class="outline-none py-2 px-4 rounded-lg w-full border border-gray-400 mb-2"
        placeholder="Parol"
        v-model="userData.password"
      />
      <input
        type="file"
        class="outline-none py-2 px-4 rounded-lg w-full border border-gray-400 mb-4"
        @input="uploadFile"
      />

      <!-- action -->
      <button
        type="button"
        @click="dialog = !dialog"
        class="py-2 px-4 rounded-lg text-white bg-red-500 mr-2"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="py-2 px-4 rounded-lg bg-green-500 text-white"
      >
        Yangilash
      </button>
    </form>
  </AppModal>
</template>

<style></style>
