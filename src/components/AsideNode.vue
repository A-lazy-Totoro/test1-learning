<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
    router="true"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.name"
      @click="clickMenu(item)"
    >
      <el-icon v-html="item.icon" ></el-icon>
      <template #title>{{ item.label }}</template>
    </el-menu-item>
    <el-sub-menu v-for="(item, index) in hasChildren" :key="index">
      <template #title>
        <el-icon v-html="item.icon"></el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="itemC in item.children" :index="itemC.path" :key="itemC.name" @click="clickMenu(itemC)">
          <el-icon v-html="itemC.icon"></el-icon>{{itemC.label}}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
    <!-- <el-menu-item index="/home">
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
    </el-sub-menu> -->
  </el-menu>
</template>

<script>
/* import { defineComponent } from "vue";
import {
  Setting,
  User,
  Shop,
  HomeFilled,
  Location,
  /*  Document, */
/* Menu as IconMenu, */
/* Setting,
} from "@element-plus/icons-vue"; */

export default {
  /*   components: {
    Setting,
    User,
    Shop,
    HomeFilled,
    Location,
    /*   Document, */
  /* IconMenu, */
  /*  Setting,
  }, */
  /*  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  }, */
  data() {
    return {
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"></path></svg>`,
          url: "",
        },
        {
          path: "/shop",
          name: "shop",
          label: "商品管理",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 000-768 384 384 0 000 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656l249.472 166.336a48 48 0 010 79.872L474.624 718.272A48 48 0 01400 678.336V345.6a48 48 0 0174.624-39.936z"></path></svg>`,
          url: "",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M628.736 528.896A416 416 0 01928 928H96a415.872 415.872 0 01299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 11-416 0 208 208 0 01416 0z"></path></svg>`,
          url: "",
        },
        {
          label: "其他",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M800 416a288 288 0 10-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 01704 0c0 149.312-117.312 330.688-352 544z"></path><path fill="currentColor" d="M512 512a96 96 0 100-192 96 96 0 000 192zm0 64a160 160 0 110-320 160 160 0 010 320z"></path></svg>`,
          children: [
            {
              path: "page1",
              name: "page1",
              label: "页面1",
              icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z"></path></svg>`,
              url: "",
            },
            {
              path: "page2",
              name: "page2",
              label: "页面2",
              icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M600.704 64a32 32 0 0130.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0134.432 15.36L944.32 364.8a32 32 0 01-4.032 37.504l-77.12 85.12a357.12 357.12 0 010 49.024l77.12 85.248a32 32 0 014.032 37.504l-88.704 153.6a32 32 0 01-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 01600.704 960H423.296a32 32 0 01-30.464-22.208L357.696 828.48a351.616 351.616 0 01-42.56-24.64l-112.32 24.256a32 32 0 01-34.432-15.36L79.68 659.2a32 32 0 014.032-37.504l77.12-85.248a357.12 357.12 0 010-48.896l-77.12-85.248A32 32 0 0179.68 364.8l88.704-153.6a32 32 0 0134.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 01423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 00-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 000 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0034.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0034.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 000-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 00-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 110 384 192 192 0 010-384zm0 64a128 128 0 100 256 128 128 0 000-256z"></path></svg>`,
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
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$store.commit("selectMenu", item);
    },
  },
};

/*   setup() {
     const isCollapse = ref(false);
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
  },*/
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
