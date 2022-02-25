import Mock from "mockjs";

//图标数据
let List = [];
export default {
  getStaticData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        //Mock.random.float 产生随机数100到8000之间，保留小数，最小0位，最大0位
        Mock.mock({
          oppo: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
          苹果: Mock.Random.float(100, 8000, 0, 0),
          华为: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          { name: "oppo", value: 6999 },
          { name: "vivo", value: 5999 },
          { name: "小米", value: 1999 },
          { name: "苹果", value: 3999 },
          { name: "华为", value: 7999 },
          { name: "三星", value: 2999 },
        ],
        //柱状图
        userData: [
          { date: "周一", new: 100, active: 500 },
          { date: "周二", new: 80, active: 300 },
          { date: "周三", new: 130, active: 600 },
          { date: "周四", new: 200, active: 700 },
          { date: "周五", new: 60, active: 200 },
          { date: "周六", new: 260, active: 900 },
          { date: "周日", new: 200, active: 800 },
        ],
        //折线图
        orderData: {
          date: [
            "20220201",
            "20220202",
            "20220203",
            "20220204",
            "20220205",
            "20220206",
            "20220207",
          ],
          data: List,
        },
        tableData: [
          { name: "oppo", todayBuy: 700, monthBuy: 4000, totalBuy: 33000 },
          { name: "vivo", todayBuy: 600, monthBuy: 3500, totalBuy: 25000 },
          { name: "小米", todayBuy: 800, monthBuy: 3800, totalBuy: 26000 },
          { name: "苹果", todayBuy: 300, monthBuy: 2000, totalBuy: 20000 },
          { name: "华为", todayBuy: 650, monthBuy: 3900, totalBuy: 29000 },
          { name: "三星", todayBuy: 260, monthBuy: 1200, totalBuy: 19000 },
        ],
      },
    };
  },
};
