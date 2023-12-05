<script setup>
import CategoryCard from "../cards/CategoryCard.vue";
import Title from "@/components/ui/Title.vue";
const categories = [
  { name: "Category1", bgColor: "#F0FCFF", color: "#2ACEFF" },
  { name: "Category2", bgColor: "#EBEFFE", color: "#315CF3" },
  { name: "Category3", bgColor: "#FEF7E6", color: "#ECAA00" },
  { name: "Category4", bgColor: "#FFEEEE", color: "#FF5555" },
  { name: "Category5", bgColor: "#FFF0F5", color: "#F66791" },
  { name: "Category6", bgColor: "#E7F5ED", color: "#009944" },
  { name: "Category7", bgColor: "#E8ECF1", color: "#103971" },
  { name: "Category8", bgColor: "#FFF6F5", color: "#F8644B" },
];
</script>

<template>
  <div class="books-grid my-10">
    <div class="container">
      <Title text="Kategoriyalar" />
      <div class="flex flex-wrap">
        <div
          class="item"
          v-for="(item, index) in categories"
          :key="index + '-book-item'"
        >
          <CategoryCard :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: calc(100% / 4 - 16px);
  margin: 0 8px 16px 8px;
}
</style>
