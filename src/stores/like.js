import { defineStore } from "pinia";

export const useLikeStore = defineStore("like", {
  state: () => ({
    likeData: [],
    length: 0,
  }),
  actions: {
    // ALL DATA
    getAll() {
      this.likeData = JSON.parse(globalThis?.localStorage?.getItem("like"));
    },

    // ADD TO CART
    addCart(data) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("like"));
      if (this.likeData.length === 0 && old != null) {
        this.likeData = [...old];
      }
      this.likeData.push(data);
      this.saveLike();
    },

    // DELETE FROM CART
    deleteCart(id) {
      let old = JSON.parse(globalThis?.localStorage?.getItem("like"));
      this.likeData = old?.filter((item) => item.id !== id);
      this.saveLike();
    },

    // EMPTY CART
    empty() {
      this.likeData = [];
      this.saveLike();
    },

    // INCREMENT
    counterPlus(id) {
      let index = null;
      let selectArr = null;

      let old = JSON.parse(globalThis?.localStorage?.getItem("like"));
      if (this.likeData.length === 0 && old != null) {
        this.likeData = [...old];
      }
      this.likeData.forEach((item, i) => {
        if (item.id === id) {
          selectArr = item;
          index = i;
        }
      });
      selectArr.count += 1;

      this.likeData.splice(index, 1, selectArr);
      this.saveLike();
    },

    // SAVE TO LOCALSTRORAGE
    saveLike() {
      globalThis?.localStorage?.setItem("like", JSON.stringify(this.likeData));
    },
  },
  getters: {
    getLike(state) {
      const cardDataToObj = globalThis?.localStorage?.getItem("like") || "[]";
      state.likeData = JSON.parse(cardDataToObj);
      return state.likeData;
    },
  },
});
