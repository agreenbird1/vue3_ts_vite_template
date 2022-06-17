import axios from "axios";
import type { Method, AxiosPromise } from "axios";
import { AFanTiAxiosRequestConfig } from "../types/axios";

const service = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASEURL,
});

service.interceptors.request.use(
  (config: AFanTiAxiosRequestConfig) => {
    // 添加了loading动画，不同的请求可以配置全局加载动画
    // console.log(config.isLoading);
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

service.interceptors.response.use((res) => {
  return res;
});

// 规定返回和请求值的类型
export default <T = any>(
  url: string,
  method: Method,
  data?: unknown,
  isLoading = false
): AxiosPromise<T> => {
  return service({
    url,
    method,
    [method.toLocaleLowerCase() === "get" ? "params" : "data"]: data,
    isLoading,
  } as AFanTiAxiosRequestConfig);
};
