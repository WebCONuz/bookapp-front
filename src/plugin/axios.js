import axios from "axios";
// import { storeAuth } from "@/stores/user/storeAuth";

axios.defaults.baseURL = "https://bookapp.gofurov.com.uz/v1";

// === Add a request interceptor ===
axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("book_app_token");
    req.headers["Authorization"] = `${token}`;
    req.headers["Accsess-Control-Allow-Origin"] = "*";
    return req;
  },
  (error) => Promise.reject(error)
);

// === Add a response interceptor ===
// axios.interceptors.response.use(
//   function (res) {
//     return res;
//   },
//   async function (error) {
//     const originalConfig = error.config;
//     const code = parseInt(error?.response && error?.response?.status);
//     const data = error.response?.data;
//     const store = storeAuth();
//     if (code === 401 && !originalConfig._retry) {
//       originalConfig._retry = true;
//       if (!getCookie("refresh_token")) {
//         delete axios.defaults.headers.common["Authorization"];
//         await store.logoOut();
//       } else if (!getCookie("access_token")) {
//         await store.refreshToken();
//       }
//       return axios(originalConfig);
//     } else if (code === 500) {
//       await store.createError("error-500");
//     } else if (code === 400) {
//       if (!(data?.status === 0 && data?.msg === "Phone not found")) {
//         await store.createError("error-400");
//       }
//     } else if (code === 504) {
//       await store.createError("error-504");
//     }
//     return Promise.reject(error);
//   }
// );

export default axios;
