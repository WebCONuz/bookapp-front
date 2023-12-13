import { defineStore } from "pinia";
import HttpModel from "@/services/httpModel";
import router from "../router/index";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    auth: {
      data: null,
      loading: false,
    },
  }),
  actions: {
    // LOGIN
    async login(params) {
      try {
        const response = await HttpModel.post({
          url: "/client/login",
          payload: params,
          file: false,
        });
        if (response.status === "OK") {
          localStorage.setItem("book_app_token", response.data.access_token);
          router.push({ name: "home" });
          toast.success("Foydalanuvchi tizimga kirdi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.data?.message);
      }
    },

    // REGISTER
    async register(params) {
      try {
        const response = await HttpModel.post({
          url: "/client/register",
          payload: params,
          file: false,
        });
        if (response.status === "CREATED") {
          localStorage.setItem("book_app_token", response.data.access_token);
          toast.success("Foydalanuvchi ro'yxatdan o'tdi");
          router.push({ name: "home" });
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.data?.message);
      }
    },
  },
});
