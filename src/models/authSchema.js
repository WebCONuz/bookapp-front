import * as Yup from "yup";

export const login_schema = Yup.object().shape({
  userEmail: Yup.string()
    .required("Emailni kiritish majburiy")
    .email("email yaroqsiz"),
  userPassword: Yup.string()
    .min(6, "Parol 6ta belgilan uzun bo'lishi kerak")
    .required("Parol kiritish majburiy"),
});

export const sign_schema = Yup.object().shape({
  userName: Yup.string().required("Ism-sharifni kiritish majburiy"),
  userEmail: Yup.string()
    .required("Emailni kiritish majburiy")
    .email("email yaroqsiz"),
  userPassword: Yup.string()
    .min(6, "Parol 6ta belgilan uzun bo'lishi kerak")
    .required("Parol kiritish majburiy"),
});
