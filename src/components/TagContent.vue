<template>
  <div class="tags">
    <el-tag
      v-for="(item, index) in tag"
      :key="item.name"
      :closable="item.name != 'home'"
      size="small"
      :effect="$route.path == item.path ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      >{{ item.label }}</el-tag
    >
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      tag: (state) => state.tabMenuData,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({ path: item.path });
    },
    handleClose(item, index) {
      const tagIndex = this.tag.length - 1;
      this.close(index);
      if (this.$route.path != item.path) {
        return;
      } else if (index == tagIndex) {
        this.$router.push({ path: this.tag[index - 1].path });
      } else {
        this.$router.push({ path: this.tag[index].path });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
