<script setup>
import CategoryCard from "../cards/CategoryCard.vue";
import Title from "@/components/ui/Title.vue";

const props = defineProps({
  category: Array,
});

const categories = [
  { bgColor: "#F0FCFF", color: "#2ACEFF" },
  { bgColor: "#EBEFFE", color: "#315CF3" },
  { bgColor: "#FEF7E6", color: "#ECAA00" },
  { bgColor: "#FFEEEE", color: "#FF5555" },
  { bgColor: "#FFF0F5", color: "#F66791" },
  { bgColor: "#E7F5ED", color: "#009944" },
  { bgColor: "#E8ECF1", color: "#103971" },
  { bgColor: "#FFF6F5", color: "#F8644B" },
];
</script>

<template>
  <section class="books-grid my-10">
    <div class="container">
      <Title text="Kategoriyalar" />
      <!-- <pre>{{ props.category }}</pre> -->
      <div class="flex flex-wrap">
        <div
          class="item"
          v-for="(item, index) in props.category"
          :key="index + '-book-item'"
        >
          <CategoryCard :data="{ ...item, ...categories[index] }" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.item {
  width: calc(100% / 4 - 16px);
  margin: 0 8px 16px 8px;
}
@media screen and (max-width: 1280px) {
  .item {
    margin: 0 6px 12px 6px;
  }
}
@media screen and (max-width: 1024px) {
  .item {
    width: calc(100% / 3 - 10px);
    margin: 0 5px 10px 5px;
  }
}
@media screen and (max-width: 640px) {
  .item {
    width: calc(100% / 2 - 10px);
  }
}
</style>
