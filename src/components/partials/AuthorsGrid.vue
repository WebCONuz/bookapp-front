<script setup>
import AuthorCard from "../cards/AuthorCard.vue";
import Title from "../ui/Title.vue";

const props = defineProps({
  title: String,
  authors: Array,
  getAll: Function,
});
</script>

<template>
  <section class="books-grid pb-5 md:pb-5">
    <div class="container">
      <Title :text="props.title" />
      <div class="flex flex-wrap">
        <div
          class="grid_item"
          v-for="(item, index) in props.authors"
          :key="index + '-author-item'"
        >
          <AuthorCard :data="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid_item {
  width: calc(100% / 6 - 16px);
  margin: 0 8px 16px 8px;
}
@media screen and (max-width: 1280px) {
  .grid_item {
    width: calc(100% / 5 - 12px);
    margin: 0 6px 12px 6px;
  }
}
@media screen and (max-width: 1024px) {
  .grid_item {
    width: calc(100% / 4 - 10px);
    margin: 0 5px 10px 5px;
  }
}
@media screen and (max-width: 768px) {
  .grid_item {
    width: calc(100% / 3 - 10px);
  }
}
@media screen and (max-width: 640px) {
  .grid_item {
    width: calc(100% / 2 - 10px);
  }
}
</style>
