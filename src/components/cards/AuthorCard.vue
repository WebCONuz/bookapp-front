<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="card p-2 border border-gray-300 bg-white rounded-md relative">
    <router-link :to="'/authors/' + props.data?.id" class="block mb-2">
      <img
        :src="props.data?.avatar_url"
        alt="card_img"
        class="w-full h-[200px] xl:h-[240px] object-cover rounded-md"
      />
    </router-link>
    <div class="card-body pb-2">
      <router-link
        to="/authors/1"
        class="block text-sm sm:text-base text-gray-700 font-semibold text-center uppercase h-[22px] sm:h-[28px] overflow-hidden overflow-ellipsis whitespace-nowrap"
      >
        {{ props.data?.first_name }} {{ props.data?.last_name }}
      </router-link>
      <div class="mb-1 text-gray-600 flex justify-center">
        <span>{{ props.data?.birth_day }}</span>
        <span class="mx-1">-</span>
        <span>{{ props.data?.died_year || "" }}</span>
      </div>
      <div v-if="props.data?.books" class="flex items-center justify-center">
        <div class="flex items-center mr-4">
          <i class="bx bxs-book-alt text-2xl text-gray-700 mr-1"></i>
          <span>22</span>
        </div>
        <div class="flex items-center">
          <i class="bx bx-headphone text-2xl text-gray-700 mr-1"></i>
          <span>11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
