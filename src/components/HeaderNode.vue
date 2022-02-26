<template>
  <div class="l-content">
    <el-button size="mini" @click="closeMenu">
      <el-icon><Menu /></el-icon>
    </el-button>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in tag"
        :key="item.name"
        :to="{ path: item.path }"
        >{{ item.label }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
  <div class="r-content">
    <el-dropdown trigger="click" size="small">
      <span>
        <img :src="userImg" style="width: 40px" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { Menu } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Menu,
  },
  data() {
    return {
      userImg: require("../assets/user1.png"),
    };
  },
  methods: {
    closeMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      tag: (state) => state.tabMenuData,
    }),
  },
});
</script>

<style lang="less" scoped>
.l-content {
  display: flex;
  align-items: center;
  h5 {
    color: #fff;
  }
  .el-button {
    margin-right: 10px;
  }
}
.r-content {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
