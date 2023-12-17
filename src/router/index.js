import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

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
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoriteView.vue"),
    },
    {
      path: "/profile",
      name: "user-profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return { top: 0 };
    }
  },
});

// === NProgress start ===
router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("book_app_token");

  if (to.name === "favorite" || to.name === "user-profile") {
    if (!token) {
      return next({ name: "auth" });
    }
  } else {
    if (to.name === "auth") {
      if (token) {
        return next({ name: from.name || "home" });
      }
    }
  }

  return next();
});

// === NProgress done ===
router.afterEach(() => {
  NProgress.done();
});

export default router;
