<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <user-form :formlabel="BtnFormLabel" :form="searchForm" :inline="true">
        <el-button type="primary" @clik="getList">搜索</el-button>
      </user-form>
    </div>
    <el-dialog
      :title="operateType == 'add' ? '新增用户' : '更新用户'"
      v-model="isShow"
    >
      <user-form
        :formlabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
      ></user-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false">取消</el-button>
          <el-button type="primary" @click="confirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
  <table-component
    :tabledata="tableData"
    :tablelabel="tableLabel"
    :config="config"
    @changePage="getList()"
    @edit="editUser"
    @del="delUser"
  ></table-component>
</template>

<script>
import UserForm from "../src/components/UserForm.vue";
import TableComponent from "../src/components/tableComponent.vue";
import { getUser } from "../api/data";
export default {
  components: {
    UserForm,
    TableComponent,
  },
  data() {
    return {
      isShow: false,
      operateType: "add",
      testForm: [
        { model: "name", label: "姓名", type: "input" },
        { model: "age", label: "年龄", type: "input" },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            { label: "男", value: 1 },
            { label: "女", value: 0 },
          ],
        },
      ],
      //表单配置 数据
      operateFormLabel: [
        { model: "name", label: "姓名", type: "input" },
        { model: "age", label: "年龄", type: "input" },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            { label: "男", value: 1 },
            { label: "女", value: 0 },
          ],
        },
        { model: "brith", label: "出生日期", type: "date" },
        { model: "addr", label: "地址", type: "input" },
      ],
      operateForm: {
        name: "",
        age: "",
        addr: "",
        birth: "",
        sex: "",
      },
      BtnFormLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "edit") {
        this.$Http.post("/user/edit", this.operateForm).then((res) => {
          console.log(res);
          this.isShow = false;
          this.getList();
        });
      } else {
        this.$Http.post("/user/add", this.operateForm).then((res) => {
          console.log(res);
          this.isShow = false;
          this.getList();
        });
      }
    },

    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = {
        name: "",
        age: "",
        addr: "",
        birth: "",
        sex: "",
      };
    },
    editUser(val) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = val;
    },
    delUser(val) {
      //调用通知栏组件
      this.$confirm("此操作将永久删除该组件，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = val.id;
        this.$Http
          .get("user/del", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.getList();
          });
      });
    },
    getList(name = "") {
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      getUser({
        page: this.config.page,
        name,
      }).then(({ data: res }) => {
        console.log(res);
        res.list.map((item) => {
          item.sexLabel = item.sex == 0 ? "女" : "男";
          this.tableData.push(item);
          return item;
        });
        this.config.total = res.count;
        this.config.loading = false;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="less">
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
