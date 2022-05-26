import { useCallback, useState } from "react";
import { useMountRef } from "./mount-state";

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
  const mountedState = useMountRef();
  const [refresh, setRefresh] = useState(() => () => {});
  const [unity, setUnity] = useState({ ...defalutState, ...initState });
  const config = { ...defaultConfig, ...initConfig };
  // 请求成功改变状态方法
  const onSucess = useCallback(
    (data: T) => setUnity({ data, state: "success", error: null }),
    []
  );
  // 请求失败改变状态方法
  const onFailure = useCallback(
    (error: Error) => setUnity({ data: null, state: "error", error }),
    []
  );
  // 用来触发异步请求
  const execute = useCallback(
    (promise: Promise<T>, extra?: { refresh: () => Promise<T> }) => {
      if (!promise || !promise.then) {
        throw new Error("请传入promise类型数据");
      }
      // 记录重新请求
      setRefresh(() => () => {
        if (extra?.refresh) {
          execute(extra?.refresh(), extra);
        }
      });
      // 初始请求状态
      setUnity((prevState) => ({ ...prevState, state: "loading" }));
      return promise
        .then((data) => {
          // 组件未卸载时执行更新
          if (mountedState.current) {
            onSucess(data);
          }
          return data;
        })
        .catch((error) => {
          onFailure(error);
          // 判断是否手动抛出错误
          return config.throwOnError ? Promise.reject(error) : error;
        });
    },
    [config.throwOnError, mountedState, onSucess, onFailure]
  );
  return {
    isIdle: unity.state === "idle",
    isLoading: unity.state === "loading",
    isError: unity.state === "error",
    isSuccess: unity.state === "success",
    execute,
    refresh,
    onSucess,
    onFailure,
    ...unity,
  };
};
