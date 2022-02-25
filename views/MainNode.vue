<template>
  <el-container style="height: 100vh">
    <!-- Aside -->
    <el-aside width="auto">
      <aside-node></aside-node>
    </el-aside>
    <!-- Aside end -->
    <el-container>
      <el-header><header-node></header-node></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNode from "../src/components/AsideNode.vue";
import HeaderNode from "../src/components/HeaderNode.vue";
export default {
  components: {
    AsideNode,
    HeaderNode,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-main {
  padding-top: 0px;
}
.el-aside {
  height: 100%;
}
</style>
