import { useState } from "react";

interface Unity<T> {
  error: Error | null;
  data: T | null;
  state: "idle" | "loading" | "error" | "success";
}

const defalutState: Unity<null> = {
  state: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};
// 统一管理请求状态
export const useUnity = <T>(
  initState?: Unity<T>,
  initConfig?: typeof defaultConfig
) => {
  const [unity, setUnity] = useState({ ...defalutState, ...initState });
  const config = { ...defaultConfig, ...initConfig };
  // 请求成功改变状态方法
  const onSucess = (data: T) =>
    setUnity({ data, state: "success", error: null });
  // 请求失败改变状态方法
  const onFailure = (error: Error) =>
    setUnity({ data: null, state: "error", error });
  // 用来触发异步请求
  const execute = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入promise类型数据");
    }
    // 初始请求状态
    setUnity({ ...unity, state: "loading" });
    return promise
      .then((data) => {
        onSucess(data);
        return data;
      })
      .catch((error) => {
        onFailure(error);
        // 判断是否手动抛出错误
        return config.throwOnError ? Promise.reject(error) : error;
      });
  };
  return {
    isIdle: unity.state === "idle",
    isLoading: unity.state === "loading",
    isError: unity.state === "error",
    isSuccess: unity.state === "success",
    execute,
    onSucess,
    onFailure,
    ...unity,
  };
};
