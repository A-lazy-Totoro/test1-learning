<template>
  <el-row gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card class="box-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="user">
              <div class="imgNode">
                <img :src="userImg" style="width: 120px" />
              </div>
              <div class="userInfo">
                <p class="name" style="padding: 0">Admin</p>
                <p class="access" style="padding: 0">超级管理员</p>
              </div>
            </div>
          </div>
        </template>
        <div class="text item">
          <div class="login-info">
            <p>上次登录时间：<span>2022-2-20</span></p>
            <p>上次登录地点：<span>淮安</span></p>
          </div>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(key, val) in tableLabel"
            :key="val"
            :prop="val"
            :label="key"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{
            display: 'flex',
            padding: 0,
            alignItems: 'center',
          }"
          :style="'width:30%;margin:10px;margin-top:0px;'"
        >
          <el-icon
            :style="`background-color:${item.color};width:50px;height:50px;`"
            v-html="item.icon"
          ></el-icon>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>

      <el-row :gutter="15">
        <el-col :span="12">
          <el-card style="height: 260px"
            ><div style="height: 240px" ref="user"></div
          ></el-card>
        </el-col>
        <el-col :span="12"
          ><el-card style="height: 260px"
            ><div style="height: 200px" ref="video"></div></el-card
        ></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
/* import { getMenu } from "../api/data.js"; */
import { getData } from "../api/data.js";
import * as echarts from "echarts";
export default {
  data() {
    return {
      userImg: require("../src/assets/user1.png"),
      tableLabel: {
        name: "品牌",
        todayBuy: "当日购买",
        monthBuy: "当月购买",
        totalBuy: "总购买",
      },
      tableData: [
        /*  { name: "oppo", todayBuy: 100, monthBuy: 300, totalBuy: 600 },
        { name: "vivo", todayBuy: 100, monthBuy: 300, totalBuy: 600 },
        { name: "小米", todayBuy: 100, monthBuy: 300, totalBuy: 600 },
        { name: "苹果", todayBuy: 100, monthBuy: 300, totalBuy: 600 },
        { name: "华为", todayBuy: 100, monthBuy: 300, totalBuy: 600 },
        { name: "三星", todayBuy: 100, monthBuy: 300, totalBuy: 600 }, */
      ],
      countData: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="
                 currentColor" d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808
                 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272
                  38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192
                  600.384z"></path></svg>`,
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: "123",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor"
                  d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08
                  184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0
                  00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584
                  254.08a6.4 6.4 0 009.28 6.72z"></path></svg>`,
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: "1234",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor"
                  d="M704 320v96a32 32 0 01-32 32h-32V320H384v128h-32a32 32 0
                  01-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 11384 0h160a32
                  32 0 0132 32v640a32 32 0 01-32 32H160a32 32 0 01-32-32V288a32 32 0 0132-32h160zm64
                  0h256a128 128 0 10-256 0z"></path><path fill="currentColor" d="M192 704h640v64H192z">
                  </path></svg>`,
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: "1234",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor"
                  d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4
                  38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4
                   38.4 0 10-54.272-54.336L456.192 600.384z"></path></svg>`,
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: "1234",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor"
                  d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08
                  184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0
                  00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584
                  254.08a6.4 6.4 0 009.28 6.72z"></path></svg>`,
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: "1234",
          icon: `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor"
                  d="M704 320v96a32 32 0 01-32 32h-32V320H384v128h-32a32 32 0
                  01-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 11384 0h160a32 32 0 0132
                  32v640a32 32 0 01-32 32H160a32 32 0 01-32-32V288a32 32 0 0132-32h160zm64 0h256a128
                  128 0 10-256 0z"></path><path fill="currentColor" d="M192 704h640v64H192z"></path></svg>`,
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    /*  getMenu().then((res) => {
      console.log(res);
    }); */

    getData().then((res) => {
      const { code, data } = res.data;
      console.log(res);

      if (code === 20000) {
        this.tableData = data.tableData;
        //待优化  图 复用部分
        //折线图
        const order = data.orderData;
        //拿到数据中的key，作为图例的值
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        const xData = order.date;
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        const option = {
          xAxis: { data: xData },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };

        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);

        //柱状图：用户图
        const userData = data.userData;
        const userArray = [];
        const userArrayNew = [];
        const userArrayActive = [];
        userData.forEach((key) => {
          userArray.push(key.date);
          userArrayNew.push(key.new);
          userArrayActive.push(key.active);
        });
        const userOption = {
          legend: {},
          tooltip: {},
          xAxis: {
            data: userArray,
          },
          yAxis: {},
          series: [
            {
              name: "new",
              type: "bar",
              data: userArrayNew,
            },
            {
              name: "active",
              type: "bar",
              data: userArrayActive,
            },
          ],
        };
        const Euser = echarts.init(this.$refs.user);
        Euser.setOption(userOption);

        //饼图
        const videoData = data.videoData;
        const videoOption = {
          tooltip: {},
          series: [
            {
              type: "pie",
              data: videoData,
            },
          ],
        };
        const Evideo = echarts.init(this.$refs.video);
        Evideo.setOption(videoOption);
      }
    });
  },
};
</script>
<style lang="less">
.user {
  align-items: center;
  .imgNode {
    width: 120px;
    height: 120px;
    border-radius: 120px;
    overflow: hidden;
  }
  .userInfo {
    margin-left: 20px;
    padding-right: 200px;
    .name {
      margin: 0;
      font-weight: bolder;
      font-size: 20px;
    }
    .access {
      margin: 0;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  .detail {
    .num {
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    }
    .txt {
      .num();
      font-size: 14px;
      font-weight: lighter;
    }
  }
}
</style>
