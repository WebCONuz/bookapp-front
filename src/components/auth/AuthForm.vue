<script setup>
import { Form, Field } from "vee-validate";
import { login_schema, sign_schema } from "../../models/authSchema.js";
import { reactive, ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
const isLogin = ref(true);
const userData = reactive({
  login: "user78@gmail.com",
  password: "12345678",
  full_name: "",
  avatar_url: "https://shorturl.at/akpDK",
  refresh_token: "",
  role_id: 3,
});

function onSubmit() {
  if (isLogin.value) {
    authStore.login({ login: userData.login, password: userData.password });
  } else {
    authStore.register(userData);
  }
}
</script>

<template>
  <div class="p-8 rounded-lg box-shadow">
    <div class="title py-2 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
      <i class="bx bx-lock-open-alt text-[40px] text-gray-600 mr-3"></i>
      <div class="text-gray-600">
        <h1 class="text-xl font-semibold mb-1">
          {{ isLogin ? "Tizimga kirish" : "Ro'yxatdan o'tish" }}
        </h1>
        <p class="text-sm">Marxamat qilib ma'lumotlarni to'ldiring.</p>
      </div>
    </div>
    <Form
      action="#"
      class="block w-full"
      @submit="onSubmit"
      :validation-schema="isLogin ? login_schema : sign_schema"
      v-slot="{ errors }"
    >
      <div class="form-item mb-3" v-if="!isLogin">
        <label class="text-sm text-gray-700 font-semibold">Ism-sharif</label>
        <Field
          name="userName"
          type="text"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          :class="{ 'is-invalid': errors.userName }"
          placeholder="John Doe"
          v-model="userData.full_name"
        />
        <p class="text-xs text-red-600" v-if="errors.userName">
          {{ errors.userName }}
        </p>
      </div>
      <div class="form-item mb-3">
        <label class="text-sm text-gray-700 font-semibold">Email</label>
        <Field
          name="userEmail"
          type="email"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          :class="{ 'is-invalid': errors.userEmail }"
          placeholder="example@gmail.com"
          v-model="userData.login"
        />
        <p class="text-xs text-red-600" v-if="errors.userEmail">
          {{ errors.userEmail }}
        </p>
      </div>
      <div class="form-item mb-5">
        <label class="text-sm text-gray-700 font-semibold">Parol</label>
        <Field
          name="userPassword"
          type="password"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          :class="{ 'is-invalid': errors.userPassword }"
          placeholder="******"
          v-model="userData.password"
        />
        <p class="text-xs text-red-600" v-if="errors.userPassword">
          {{ errors.userPassword }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <input
            type="reset"
            class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm"
            value="Tozalash"
          />
          <input
            type="submit"
            class="py-2 px-4 bg-green-500 text-white rounded text-sm"
            value="Kirish"
          />
        </div>
        <!-- <router-link to="/admin/register" class="text-blue-500">
          Ro'yxatdan o'tish
        </router-link> -->
        <p class="text-blue-500 cursor-pointer" @click="isLogin = !isLogin">
          {{ isLogin ? "Ro'yxatdan o'tish" : "Tizimga kirish" }}
        </p>
      </div>
    </Form>
  </div>
</template>

<style scoped></style>
