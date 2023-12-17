<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Object,
  openLeft: Function,
});

const open = ref(false);
const openAccordion = () => {
  open.value = !open.value;
};
</script>

<template>
  <!-- <pre>{{ props.data?.subcategories }}</pre> -->
  <div v-if="props.data?.subcategories" class="pt-2">
    <!-- title   -->
    <div
      class="px-4 py-1 mb-1 w-full flex items-center justify-between cursor-pointer duration-200"
      :class="open ? 'text-[#701BF8] bg-gray-100' : ''"
      @click="openAccordion"
    >
      <div class="flex items-center">
        {{ props.data?.category_name }}
      </div>
      <i
        class="bx bx-chevron-down text-base duration-500"
        :class="open ? 'rotate-180' : 'rotate-0'"
      ></i>
    </div>
    <!-- accordion -->
    <div
      class="px-4 flex flex-col overflow-hidden transition-all duration-500"
      :class="open ? 'max-h-[400px]' : 'max-h-0'"
    >
      <router-link
        class="block py-1 pl-2 duration-200"
        v-for="(item, i) in props.data?.subcategories"
        :to="'/books?subcategory=' + item?.id"
        :key="i + '-item-sum-ttt'"
        @click="props.openLeft"
      >
        <i class="bx bx-radio-circle text-[10px] mr-2"></i>
        <span>{{ item?.subcategory_name }}</span>
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
