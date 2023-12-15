<script setup>
import Avatar from "@/assets/images/ui/avatar.png";
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="test_card bg-white rounded-md py-3 lg:py-6 px-4 lg:px-8 border border-gray-300 cursor-default"
  >
    <div class="flex items-center mb-4">
      <img
        :src="props.data?.user?.avatar_url || Avatar"
        alt="avatar"
        class="w-10 lg:w-12 h-10 lg:h-12 object-cover mr-3 lg:mr-4 shadow-lg rounded-full"
      />
      <div>
        <h4 class="font-semibold text-gray-700 lg:mb-[2px]">
          {{ props.data?.user?.full_name }}
        </h4>
        <p class="text-gray-500 italic text-sm">Kitobxon</p>
      </div>
    </div>
    <p
      class="text-sm lg:text-base h-20 sm:h-[100px] md:h-[120px] overflow-hidden"
    >
      {{ props.data?.text }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
