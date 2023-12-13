import { defineStore } from "pinia";
import HttpModel from "@/services/httpModel";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: {
      data: null,
      loading: false,
    },
    books: {
      data: null,
      loading: false,
    },
    category: {
      data: null,
      loading: false,
    },
  }),
  actions: {
    // CREATE CATEGORY
    async createCategory(params) {
      try {
        const response = await HttpModel.post({
          url: "/category",
          payload: params,
          file: false,
        });
        if (response.status === 201) {
          toast.success("Kategoriya yaratildi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // GET ALL CATEGORYS
    async getCategories() {
      this.categories.loading = true;
      try {
        const res = await HttpModel.get("/category/list");
        this.categories.data = res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.categories.loading = false;
      }
    },

    // GET ONE CATEGORY
    async getOneCategory(id) {
      this.category.loading = true;
      try {
        const res = await HttpModel.get(`/category/${id}`);
        this.category.data = res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.category.loading = false;
      }
    },

    // GET ONE CATEGORY
    async getCategoryBooks(id) {
      this.books.loading = true;
      try {
        const res = await HttpModel.get(`/category/books?id=${id}`);
        this.books.data = res.data.books;
      } catch (error) {
        console.log(error);
      } finally {
        this.books.loading = false;
      }
    },

    // UPDATE CATEGORY
    async updateCategory(params) {
      try {
        const { id, data } = params;
        const response = await HttpModel.put({
          url: `/category/${id}`,
          payload: data,
          file: false,
        });
        if (response.status === 200) {
          toast.success("Kategoriya yangilandi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // DELETE CATEGORY
    async deleteCategory(id) {
      try {
        const res = await HttpModel.delete(`/category/${id}`);
        if (res.status === 200) {
          toast.success("Kategoriya o'chirildi");
        } else {
          toast.error("Kategoriya o'chirishda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
