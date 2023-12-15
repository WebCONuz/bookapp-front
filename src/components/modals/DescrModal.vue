<script setup>
import AppModal from "./AppModal.vue";
import { ref } from "vue";
import { useBookStore } from "../../stores/book";

const bookStore = useBookStore();
const props = defineProps({
  userId: String,
  bookId: String,
  getAll: Function,
});
const text = ref();
const dialog = ref(false);

// open modal
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

// send data to back
const submitData = async () => {
  await bookStore.postComment({
    book_id: +props.bookId,
    user_id: +props.userId,
    text: text.value,
  });
  props.getAll();
  dialog.value = false;
};
</script>

<template>
  <AppModal v-model="dialog" width="600px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-5 right-5 cursor-pointer"
      @click="dialog = !dialog"
    ></i>

    <!-- form -->
    <form class="block" @submit.prevent="submitData">
      <h3 class="text-gray-500 mb-4 text-center font-semibold text-xl">
        O'z fikringizni qoldiring
      </h3>
      <textarea
        class="outline-none py-2 px-4 rounded-lg w-full border border-gray-400 mb-2 h-[200px] resize-none"
        placeholder="Kitob haqida fikringiz"
        v-model="text"
        required
      ></textarea>

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
        Fikr bildirish
      </button>
    </form>
  </AppModal>
</template>

<style></style>
