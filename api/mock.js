import Mock from "mockjs";
import homeApi from "./mockServeData/HomeContent.js";
import userApi from "./mockServeData/UserForm.js";
//拦截
Mock.mock("/home/getData", homeApi.getStaticData());
Mock.mock(/user\/add/, "post", userApi.createUser);
Mock.mock(/user\/edit/, "post", userApi.updateUser);
Mock.mock(/user\/getUser/, "get", userApi.getUserList);
Mock.mock(/user\/del/, "post", userApi.deleteUser);
