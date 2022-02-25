//用于写接口请求

//引入axios工具类
import axios from "./axios";

export const getMenu = (param) => {
  return axios.request({
    url: "./promission/getMenu",
    method: "post",
    data: param,
  });
};

export const getData = () => {
  return axios.request({
    url: "/home/getData",
  });
};
