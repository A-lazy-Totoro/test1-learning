import { createStore } from "vuex";

export const store = createStore({
  //状态
  state() {
    return {
      isCollapse: false,
    };
  },
  //操作
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
});
