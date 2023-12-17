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
    topBook: {
      data: null,
      loading: false,
      count: 0,
    },
    readBook: {
      data: null,
      loading: false,
      count: 0,
    },
  }),
  actions: {
    // GET ALL BOOKS
    async getBooks(params) {
      this.books.loading = true;
      try {
        // console.log(params);
        // create url
        const {
          page = 1,
          limit = 10,
          search,
          category,
          subcategory,
          authorId,
        } = params;
        let getUrl = "/book/filter?page=" + page + "&limit=" + limit;
        if (search) {
          getUrl = getUrl + "&search=" + search;
        }
        if (category) {
          getUrl = getUrl + "&category_id=" + category;
        }
        if (subcategory) {
          getUrl = getUrl + "&subcategory_id=" + subcategory;
        }
        if (authorId) {
          getUrl = getUrl + "&author_id=" + authorId;
        }
        console.log(getUrl);
        // get
        const res = await HttpModel.get(getUrl);
        this.books.data = res.data.books;
        this.books.count = res.data._meta.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.books.loading = false;
      }
    },

    //
    async postComment(data) {
      try {
        const response = await HttpModel.post({
          url: "/comment/post",
          payload: data,
          file: false,
        });
        if (response.status === "CREATED") {
          toast.success("Bildirgan fikingiz uchun raxmat");
        } else {
          toast.error("Ma'lumotlarni yuklashda xatolik");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // SEARCH BOOKS
    async searchBooks(params) {
      this.books.loading = true;
      try {
        const { page = 1, limit = 10, search } = params;
        let getUrl = "/book/search?page=" + page + "&limit=" + limit;
        if (search) {
          getUrl = getUrl + "&search=" + search;
        }
        const res = await HttpModel.get(getUrl);
        this.books.data = res.data.books;
        this.books.count = res.data._meta.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.books.loading = false;
      }
    },

    // TOP BOOKS
    async topBooks(params) {
      this.topBook.loading = true;
      try {
        const { page = 1, limit = 10 } = params;
        const res = await HttpModel.get(
          `/book/top?page=${page}&limit=${limit}`
        );
        this.topBook.data = res.data.books;
        this.topBook.count = res.data._meta.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.topBook.loading = false;
      }
    },

    // MOST READ BOOKS
    async mostReadBooks(params) {
      this.readBook.loading = true;
      try {
        const { page = 1, limit = 10 } = params;
        const res = await HttpModel.get(
          `/book/mostread?page=${page}&limit=${limit}`
        );
        this.readBook.data = res.data.books;
        this.readBook.count = res.data._meta.page_count;
      } catch (error) {
        console.log(error);
      } finally {
        this.readBook.loading = false;
      }
    },

    // GET ONE BOOK
    async getOneBook(id) {
      this.book.loading = true;
      try {
        const res = await HttpModel.get(`/book/${id}`);
        this.book.data = res.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.book.loading = false;
      }
    },

    // LIKE
    async favoriteBook(data) {
      try {
        const res = await HttpModel.post({
          url: "/book/like",
          payload: data,
          file: false,
        });

        if (res.status === "CREATED") {
          toast.success("Bu kitob javonga qo'shildi");
        } else {
          toast.error("Javonga qo'shishda xatolik!");
        }
      } catch (error) {
        console.log(error);
      }
    },

    // DISLIKE
    async dislikeBook(data) {
      try {
        const res = await HttpModel.deleteData({
          url: "/book/like",
          payload: data,
        });

        if (res.status === "OK") {
          toast.success("Bu kitob javondan o'chirildi");
        } else {
          toast.error("Javondan o'chirishda xatolik!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
