<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
</script>

<template>
  <Header />
  <main class="main bg-[#FAFAFA]">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 264px - 73.6px);
}
</style>
