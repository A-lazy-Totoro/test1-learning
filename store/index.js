import { createStore } from "vuex";

export const store = createStore({
  //状态
  state() {
    return {
      isCollapse: false,
      //存储面包屑用的数据
      tabMenuData: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"></path></svg>`,
        },
      ],
      //存储当前活动的路由
      activeMenu: null,
    };
  },
  //操作
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name != "home") {
        state.acriveMenu = val;
        const result = state.tabMenuData.findIndex(
          (item) => item.name === val.name
        );
        if (result == -1) {
          state.tabMenuData.push(val);
        }
      } else {
        state.activeMenu = null;
      }
    },
    closeTag(state, val) {
      state.tabMenuData.splice(val, 1);
    },
  },
});
