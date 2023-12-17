<script setup>
import NotFound from "@/components/ui/NotFound.vue";
</script>

<template>
  <section class="not_found w-full flex items-center justify-center py-10">
    <div class="text-center">
      <NotFound title="404" text="Bunday sahifa topilmadi" />
      <router-link
        to="/"
        class="py-3 text-blue-600 text-xs sm:text-sm lg:taxt-base"
      >
        Bosh sahifaga
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.not_found {
  min-height: calc(100vh - 264px - 73.6px);
}
</style>
