<script setup>
const props = defineProps({
  data: Array,
});
</script>

<template>
  <ul
    class="absolute top-[42px] right-0 bg-white border border-gray-300 w-[250px] rounded-md duration-200 shadow-lg"
  >
    <li
      class="sub-menu-item px-3 text-sm relative hover:bg-gray-100 hover:text-[#701BF8] duration-150"
      v-for="(item, index) in props.data"
      :key="index + '-sub-menu-item'"
    >
      <!-- sub menu content -->
      <router-link
        class="p-3 w-full flex items-center justify-between"
        :class="
          index + 1 === props.data?.length ? '' : 'border-b border-gray-200'
        "
        :to="'/books?category=' + item?.category_name"
      >
        <span>{{ item.category_name }}</span>
        <i
          class="bx bx-chevron-right"
          v-if="item?.subcategories?.length > 0"
        ></i>
      </router-link>
      <!-- sub menu chid -->
      <div
        class="sub-child-menu w-[200px] bg-white absolute top-0 border border-gray-300 duration-200"
        v-if="item?.subcategories?.length > 0"
      >
        <router-link
          v-for="(sub, i) in item?.subcategories"
          :key="i + '-sub-child-item'"
          class="px-3 text-black hover:bg-gray-100 hover:text-[#701BF8] duration-150 block"
          :to="'/books?subcategory=' + sub?.subcategory_name"
        >
          <div
            class="p-3"
            :class="
              i + 1 === item?.subcategories?.length
                ? ''
                : 'border-b border-gray-200'
            "
          >
            {{ sub?.subcategory_name }}
          </div>
        </router-link>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.sub-menu-item .sub-child-menu {
  opacity: 0;
  visibility: hidden;
  left: 265px;
  border-radius: 0 8px 8px 8px;
}
.sub-menu-item:hover .sub-child-menu {
  opacity: 1;
  visibility: visible;
  left: 100%;
}
</style>
