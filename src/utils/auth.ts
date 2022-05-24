import qs from "qs";

export interface User {
  username: string;
  password: string;
  token?: string;
}
// 自定义token字段
const tokenKey = "secret_token";
// 请求url地址
const apiUrl = process.env.REACT_APP_API_URL;
// 获取存储的token值
export const getToken = () => window.localStorage.getItem(tokenKey);
// 处理用户登录注册返回信息
export const handleUserRes = ({ user }: { user: User }) => {
  console.log("test", user);
  window.localStorage.setItem(tokenKey, user.token || "");
  return user;
};

// 用户登录
export const login = (param: { username: string; password: string }) => {
  return fetch(`${apiUrl}/member?${qs.stringify(param)}`).then(async (res) => {
    if (res.ok) {
      const infoList = await res.json();
      return handleUserRes({ user: infoList[0] || null });
    } else {
      return Promise.reject(param);
    }
  });
};
// 用户注册
export const register = (param: { username: string; password: string }) => {
  const data = { ...param, token: String(Math.random() * 1000) };
  return fetch(`${apiUrl}/member`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserRes({ user: data });
    } else {
      return Promise.reject(data);
    }
  });
};
// 用户退出
export const logout = async () => window.localStorage.removeItem(tokenKey);
