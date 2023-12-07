<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Object,
});

const open = ref(false);
const openAccordion = () => {
  open.value = !open.value;
};
</script>

<template>
  <div v-if="props.data?.subCategories" class="pt-2">
    <!-- title   -->
    <div
      class="px-4 py-1 mb-1 w-full flex items-center justify-between cursor-pointer duration-200"
      :class="open ? 'text-[#701BF8] bg-gray-100' : ''"
      @click="openAccordion"
    >
      <div class="flex items-center">
        {{ props.data.title }}
      </div>
      <i
        class="bx bx-chevron-down text-base duration-500"
        :class="open ? 'rotate-180' : 'rotate-0'"
      ></i>
    </div>
    <!-- accordion -->
    <ul
      class="px-4 overflow-hidden transition-all duration-500"
      :class="open ? 'max-h-[400px]' : 'max-h-0'"
    >
      <li
        class="py-1 pl-2 duration-200"
        v-for="(item, i) in props.data?.subCategories"
        :key="i + '-item-sum-ttt'"
      >
        <i class="bx bx-radio-circle text-[10px] mr-2"></i>
        <router-link to="#" class="">{{ item }}</router-link>
      </li>
    </ul>
  </div>
  <div v-else class="pt-2">
    <router-link
      to="#"
      class="px-4 py-1 w-full flex items-center justify-between mb-2 cursor-pointer"
    >
      {{ props.data.title }}
    </router-link>
  </div>
</template>

<style scoped></style>
