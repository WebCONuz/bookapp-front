import axios from "../plugin/axios";

class httpModel {
  constructor() {}

  // GET
  get(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  // POST
  post(parameter) {
    return new Promise((resolve, reject) => {
      const { url, payload, file } = parameter;
      console.log({
        "Content-Type": file ? "multipart/form-data" : "application/json",
      });
      axios
        .post(url, payload, {
          headers: {
            "Content-Type": file ? "multipart/form-data" : "application/json",
          },
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  // PUT
  put(parameter) {
    return new Promise((resolve, reject) => {
      const { url, payload, file } = parameter;
      axios
        .put(url, payload, {
          headers: {
            "Content-Type": file ? "multipart/form-data" : "application/json",
          },
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }

  // DELETE
  delete(url) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}

const HttpModel = new httpModel();
export default HttpModel;
