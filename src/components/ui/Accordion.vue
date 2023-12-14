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
  <div v-if="props.data?.subcategories" class="pt-2">
    <!-- title   -->
    <router-link
      class="px-4 py-1 mb-1 w-full flex items-center justify-between cursor-pointer duration-200"
      :class="open ? 'text-[#701BF8] bg-gray-100' : ''"
      @click="openAccordion"
      :to="'/books?category=' + props.data?.id"
    >
      <div class="flex items-center">
        {{ props.data?.category_name }}
      </div>
      <i
        class="bx bx-chevron-down text-base duration-500"
        :class="open ? 'rotate-180' : 'rotate-0'"
      ></i>
    </router-link>
    <!-- accordion -->
    <div
      class="px-4 overflow-hidden transition-all duration-500"
      :class="open ? 'max-h-[400px]' : 'max-h-0'"
    >
      <router-link
        class="inline-block py-1 pl-2 duration-200"
        v-for="(item, i) in props.data?.subCategories"
        :to="'/books?subcategory=' + item?.id"
        :key="i + '-item-sum-ttt'"
      >
        <i class="bx bx-radio-circle text-[10px] mr-2"></i>
        <router-link to="#" class="">{{ item?.subcategory_name }}</router-link>
      </router-link>
    </div>
  </div>
  <div v-else class="pt-2">
    <router-link
      :to="'/books?category=' + props.data?.category_name"
      class="px-4 py-1 w-full flex items-center justify-between mb-2 cursor-pointer"
    >
      {{ props.data?.category_name }}
    </router-link>
  </div>
</template>

<style scoped></style>
