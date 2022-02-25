import Mock from "mockjs";
import homeApi from "./mockServeData/HomeContent.js";
Mock.mock("/home/getData", homeApi.getStaticData());
