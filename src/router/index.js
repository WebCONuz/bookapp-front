import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: "/authors",
      name: "author",
      component: () => import("../views/AuthorsView.vue"),
    },
    {
      path: "/authors/:id",
      name: "one-author",
      component: () => import("../views/AuthorView.vue"),
    },
    {
      path: "/books",
      name: "books",
      component: () => import("../views/BooksView.vue"),
    },
    {
      path: "/books/:id",
      name: "one-book",
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/profile",
      name: "user-profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
