import qs from "qs";
import * as auth from "utils/auth";
import { useAuth } from "context/auth-context";
import { useCallback } from "react";

const apiUrl = process?.env?.REACT_APP_API_URL || "localhost";
// 继承fetch参数类型并添加新的属性类型
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
// 统一处理api请求
export const server = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  // GET方法的请求数据是放在请求头中，其它几个方法的请求数据是放在请求体中
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  // axios 和 fetch的表现不一样， axios可以直接在返回状态为请求失败时抛出异常，而fetch不会，所以下面手动抛出了异常
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      return response.ok ? data : Promise.reject(data);
    });
};
// 这个hook主要功能是自动获取用户的token值
export const useServer = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof server>) =>
      server(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
