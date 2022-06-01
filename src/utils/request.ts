import { useAuth } from "context/auth-context";
import qs from "qs";
import { useCallback } from "react";
import * as auth from "utils/auth";

const apiUrl = process?.env?.REACT_APP_API_URL || "localhost";

interface Config extends RequestInit {
  data?: { [key in string]: unknown };
  token?: string;
}
// 封装fetch接口请求
export const request = async (
  endpoint: string,
  { data = {}, token, headers, ...custom }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "content-type": data ? "application/json" : "",
    },
    ...custom,
  };
  if (config.method.toUpperCase() === "GET") {
    if (endpoint === "member") {
      data.token = token;
    }
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    let result = await res.json();
    // 查询信息可能只有一个shi
    if (
      config.method.toUpperCase() === "GET" &&
      data.id &&
      result.length === 1
    ) {
      result = result[0];
    }
    return res.ok ? result : Promise.reject(result);
  });
};
// 使用request方法并携带token
export const useRequst = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof request>) =>
      request(endpoint, { ...config, token: user?.token }),
    [user?.token]
  );
};
