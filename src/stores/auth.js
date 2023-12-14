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
    client: {
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
          localStorage.setItem("book_app_user", response.data.id);
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
          localStorage.setItem("book_app_user", response.data.id);
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

    // ME
    async getMe(id) {
      this.client.loading = true;
      try {
        const res = await HttpModel.get(`/client/${id}`);
        this.client.data = res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.client.loading = false;
      }
    },
  },
});
