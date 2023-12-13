import { defineStore } from "pinia";
import HttpModel from "@/services/httpModel";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useAuthorStore = defineStore("author", {
  state: () => ({
    authors: {
      data: null,
      loading: false,
      count: 0,
    },
    author: {
      data: null,
      loading: false,
    },
  }),
  actions: {
    // CREATE AUTHOR
    async createAuthor(params) {
      const { data, formData } = params;

      // file upload
      const res = await HttpModel.post({
        url: "/store/upload",
        data: formData,
        file: true,
      });

      // post
      if (res.status === 200) {
        const response = await HttpModel.post({
          url: "/author",
          payload: {
            ...data,
            avatar_url: res.file_url,
          },
          file: false,
        });
        if (response.status === 201) {
          toast.success("Muallif yaratildi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } else {
        toast.error("Fayl yuklashda xatolik yuz berdi");
      }
    },

    // GET ALL AUTHORS
    async getAuthors(params) {
      this.authors.loading = true;
      try {
        const { page = 1, limit = 10, search } = params;
        let getUrl = "/author/list?page=" + page + "&limit=" + limit;
        if (search) {
          getUrl = getUrl + "&search=" + search;
        }
        const res = await HttpModel.get(getUrl);
        this.authors.data = res.data.authors;
        this.authors.count = res.data.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.authors.loading = false;
      }
    },

    // GET ONE AUTHOR
    async getOneAuthor(id) {
      this.author.loading = true;
      try {
        const res = await HttpModel.get(`/author/${id}`);
        this.author.data = res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.author.loading = false;
      }
    },

    // UPDATE AUTHOR
    async updateAuthor(params) {
      try {
        const { id, data, formData } = params;
        let newFile;

        // file upload
        if (typeof formData !== "string") {
          const res = await HttpModel.post({
            url: "/store/upload",
            data: formData,
            file: true,
          });

          if (res.status === 200) {
            newFile = res.file_url;
          } else {
            toast.error("Fayl yuklashda xatolik yuz berdi");
          }
        } else {
          newFile = formData;
        }

        // put
        const response = await HttpModel.put({
          url: `/author/${id}`,
          payload: {
            ...data,
            avatar_url: newFile,
          },
          file: false,
        });
        if (response.status === 200) {
          toast.success("Muallif yangilandi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // DELETE AUTHOR
    async deleteAuthor(id) {
      try {
        const res = await HttpModel.delete(`/author/${id}`);
        if (res.status === 200) {
          toast.success("Muallif o'chirildi");
        } else {
          toast.error("Muallif o'chirishda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
