<script setup>
import BreadCrumb from "@/components/ui/BreadCrumb.vue";
import PartSlider from "@/components/partials/PartSlider.vue";
const datas = [
  { name: "Home", link: "/" },
  { name: "Mualliflar", link: "/authors" },
  { name: "O'tkir Hoshimov", link: "/authors/1" },
];
</script>

<template>
  <div class="author pt-6 sm:pt-8 md:pt-10 lg:pt-12">
    <!-- breadcrumb -->
    <section class="container">
      <BreadCrumb :content="datas" />
    </section>

    <section
      class="container flex flex-col sm:flex-row items-start pt-4 sm:pt-6 md:pt-10 pb-4 md:pb-8 xl:pb-16"
    >
      <div class="sm:w-1/4 md:w-[40%]">
        <img
          src="../assets/images/authors/author8.jpg"
          alt="author-image"
          class="w-[100px] sm:w-full rounded-lg md:rounded-[50px] mb-2 md:mb-4 xl:mb-8"
        />
        <p
          class="hidden sm:block text-gray-600 text-base md:text-2xl xl:text-4xl text-center font-semibold"
        >
          ( 1941 - 2013 )
        </p>
      </div>
      <div class="w-full sm:w-3/4 md:w-[60%] sm:pl-4 md:pl-8 2xl:pl-10">
        <!-- title -->
        <h1
          class="text-lg sm:text-xl md:text-3xl xl:text-5xl text-gray-600 font-semibold uppercase mb-2 md:mb-3 xl:mb-5"
        >
          O'tkir Hoshimov
        </h1>
        <p class="text-sm md:text-base md:mb-6 xl:mb-8">
          Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
          Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
          mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
          (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida
          oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963
          yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy”
          gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng
          “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent
          oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi
          Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985)
          boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik
          qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy
          Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi.
          2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.
        </p>
        <div class="hidden lg:block xl:mb-10">
          <div class="flex items-start mb-2">
            <i
              class="bx bxs-bookmark-star text-2xl xl:text-3xl mr-2 xl:mr-3 text-gray-600"
            ></i>
            <h3
              class="text-lx xl:text-xl uppercase font-semibold text-gray-600"
            >
              ijodi
            </h3>
          </div>
          <p class="w-[400px] xl:w-[363px]">
            Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
            ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
            muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
            qaytmaydi“ qissasi boʻldi.
          </p>
        </div>
        <div class="hidden xl:block">
          <div class="flex items-start mb-4">
            <i class="bx bxs-bookmark-alt text-3xl mr-4 text-gray-600"></i>
            <h3 class="text-xl uppercase font-semibold text-gray-600">
              asarlari
            </h3>
          </div>
          <PartSlider />
        </div>
      </div>
    </section>
    <section>
      <div class="container mb-5 sm:mb-6 md:mb-10 lg:hidden">
        <div class="flex items-start mb-1 sm:mb-2">
          <i
            class="bx bxs-bookmark-star text-2xl md:text-3xl mr-2 md:mr-3 text-gray-600"
          ></i>
          <h3 class="text-lg md:text-xl uppercase font-semibold text-gray-600">
            ijodi
          </h3>
        </div>
        <p class="text-sm md:text-base w-full">
          Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar
          toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat
          keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi
          boʻldi.
        </p>
      </div>
      <div class="container xl:hidden">
        <div class="flex items-start mb-2 sm:mb-3 md:mb-4">
          <i
            class="bx bxs-bookmark-alt text-2xl md:text-3xl mr-2 md:mr-3 lg:mr-4 text-gray-600"
          ></i>
          <h3 class="text-lg md:text-xl uppercase font-semibold text-gray-600">
            asarlari
          </h3>
        </div>
        <PartSlider />
      </div>
    </section>
  </div>
</template>

<style></style>
