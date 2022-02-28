<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in formlabel"
      :key="item.name"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="
          form[item.model] //eslint-disable-line
        "
      ></el-input>

      <el-switch
        v-else-if="item.type === 'switch'"
        v-model="
          form[item.model] //eslint-disable-line
        "
      ></el-switch>
      <el-date-picker
        v-else-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="请选择日期"
        v-model="
          form[item.model] //eslint-disable-line
        "
      ></el-date-picker>
      <el-select
        v-else-if="item.type === 'select'"
        placeholder="请选择"
        v-model="
          form[item.model] //eslint-disable-line
        "
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    formlabel: Array, //表单配置
    form: Object, //表单数据
    inline: Boolean, //表单布局
  },
  data() {
    return {};
  },
};
</script>
