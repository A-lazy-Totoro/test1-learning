/*对axios进行一个简单的二次封装：将config配置文件与axios进行结合。
    通过对当前配置环境的判断，来改变请求的接口地址*/

import axios from "axios";
import config from "../config/index";

//通过判断当前的环境,拿到请求的接口地址
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  //定义axios的相关配置
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {},
    };

    return config;
  }

  //拦截器相关的函数
  Interceptors(instance) {
    //instance 接收axios实例
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        console.log(response, "response");
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error, "error");
        return Promise.reject(error);
      }
    );
  }

  //调用接口请求的函数
  request(options) {
    const instance = axios.create(); //创建axios实例
    options = { ...this.getInsideConfig(), ...options };
    this.Interceptors(instance); //调用拦截器
    return instance(options);
  }
}

export default new HttpRequest(baseUrl);
