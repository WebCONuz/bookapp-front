import { defineStore } from "pinia";
import HttpModel from "@/services/httpModel";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useBookStore = defineStore("book", {
  state: () => ({
    books: {
      data: null,
      loading: false,
      count: 0,
    },
    book: {
      data: null,
      loading: false,
    },
  }),
  actions: {
    // CREATE BOOK
    async createBook(params) {
      const { data, formDataArray } = params;
      let status = true;

      //   file upload
      const files = [];
      for (let i = 0; i < formDataArray?.length; i++) {
        const res = await HttpModel.post({
          url: "/store/upload",
          data: formDataArray[i],
          file: true,
        });

        if (res.status === 200) {
          files[i] = res.data.file_url;
        } else {
          status = false;
          break;
        }
      }

      //   post
      if (status) {
        const response = await HttpModel.post({
          url: "/book",
          payload: {
            ...data,
            image: files[0],
            audio_url: files[1],
            download_url: files[2],
          },
          file: false,
        });
        if (response.status === 201) {
          toast.success("Kitob yaratildi");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } else {
        toast.error("Fayl yuklashda xatolik yuz berdi");
      }
    },

    // GET ALL BOOKS
    async getBooks(params) {
      this.books.loading = true;
      try {
        const { page, limit, search, category, subcategory, authorId } = params;
        const res = await HttpModel.get({
          url: `/book/filter?page=${page}&limit=${limit}&search=${search}&category_id=${category}&subcategory_id=${subcategory}&author_id=${authorId}`,
        });
        this.books.data = res.data;
        this.books.count = res.data.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.books.loading = false;
      }
    },

    // SEARCH BOOKS
    async searchBook(params) {
      this.books.loading = true;
      try {
        const { page, limit, search } = params;
        const res = await HttpModel.get({
          url: `/book/filter?limit=${page}&limit=${limit}&search=${search}`,
        });
        this.books.data = res.data;
        this.books.count = res.data.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.books.loading = false;
      }
    },

    // GET ONE BOOK
    async getOneBook(id) {
      this.book.loading = true;
      try {
        const res = await HttpModel.get({ url: `/books/${id}` });
        this.book.data = res.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.book.loading = false;
      }
    },

    // UPDATE BOOK
    async updateBook(params) {
      try {
        const { id, data, formDataArray } = params;
        let status = true;

        // file upload
        const files = [];
        for (let i = 0; i < formDataArray?.length; i++) {
          if (typeof formDataArray[i] !== "string") {
            const res = await HttpModel.post({
              url: "/store/upload",
              data: formDataArray[i],
              file: true,
            });

            if (res.status === 200) {
              files[i] = res.data.file_url;
            } else {
              status = false;
              break;
            }
          } else {
            files[i] = formDataArray[i];
          }
        }

        // put
        if (status) {
          const response = await HttpModel.put({
            url: `/books/${id}`,
            payload: {
              ...data,
              image: files[0],
              audio_url: files[1],
              download_url: files[2],
            },
            file: false,
          });
          if (response.status === 201) {
            toast.success("Kitob yangilandi");
          } else {
            toast.error("Ma'lumotlarni yuklashda xatolik");
          }
        } else {
          toast.error("Fayl yuklashda xatolik yuz berdi");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // DELETE BOOK
    async deleteBook(id) {
      try {
        const res = await HttpModel.delete({ url: `/books/${id}` });
        if (res.status === 200) {
          toast.success("Kitob o'chirildi");
        } else {
          toast.error("Kitob o'chirilda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
