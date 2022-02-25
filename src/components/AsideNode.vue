<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
    @click="clickMenu"
    router="true"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item index="/home">
      <el-icon><home-filled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/shop">
      <el-icon><shop /></el-icon>
      <template #title>商品管理</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><user /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-sub-menu index="/setting">
      <template #title>
        <el-icon><location /></el-icon>
        <span>其他</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <el-icon><setting /></el-icon>页面1</el-menu-item
        >
        <el-menu-item index="1-2">
          <el-icon><setting /></el-icon>页面2</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { defineComponent } from "vue";
import {
  Setting,
  User,
  Shop,
  HomeFilled,
  Location,
  /*  Document, */
  /* Menu as IconMenu, */
  /* Setting, */
} from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    Setting,
    User,
    Shop,
    HomeFilled,
    Location,
    /*   Document, */
    /* IconMenu, */
    /*  Setting, */
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
  /*data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页"  , icon: "s-home" ,
          url: "",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
         icon: "video-play",
          url: "",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "avatar",
          url: "",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },*/
  setup() {
    /* const isCollapse = ref(false); */
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    margin: 0px;
  }
}
</style>
