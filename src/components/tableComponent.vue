<template>
  <div class="table-node">
    <el-table :data="tabledata" height="90%" stripe>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tablelabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template #default="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <el-button size="small" @click="handleEdit">编辑</el-button>
        <el-button type="danger" size="small" @click="handleDelete"
          >删除</el-button
        >
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page="config.page"
      @current-change="changePage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    tabledata: Array,
    tablelabel: Array,
    config: Object,
  },

  methods: {
    handleEdit(val) {
      this.$emit("edit", val);
    },
    handleDelete(val) {
      this.$emit("del", val);
    },
    changePage(val) {
      this.$emit("changePage", val);
    },
  },
};
</script>
<style lang="less">
.table-node {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
