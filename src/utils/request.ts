import axios from "axios";
import type { Method, AxiosPromise } from "axios";

const service = axios.create({
  timeout: 5000,
  baseURL: import.meta.env.VITE_APP_BASEURL,
});

service.interceptors.request.use(
  (config) => {
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
  data?: unknown
): AxiosPromise<T> => {
  return service({
    url,
    method,
    // 统一参数
    [method.toUpperCase() === "DELETE" || method === "POST"
      ? "params"
      : "data"]: data,
  });
};
