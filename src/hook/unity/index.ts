import { useCallback, useReducer, useState } from "react";
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

const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedState = useMountRef();
  return useCallback(
    (...args: T[]) => (mountedState.current ? dispatch(...args) : void 0),
    [dispatch, mountedState]
  );
};

// 统一管理请求状态
export const useUnity = <T>(
  initState?: Unity<T>,
  initConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initConfig };
  // 使用useState惰性初始化存储请求函数
  const [refresh, setRefresh] = useState(() => () => {});
  // 使用useReducer处理相互关联的状态数据
  const [unity, dispatch] = useReducer(
    (state: Unity<T>, action: Partial<Unity<T>>) => ({ ...state, ...action }),
    { ...defalutState, ...initState }
  );
  const safeDispatch = useSafeDispatch(dispatch);
  // 请求成功改变状态方法
  const onSucess = useCallback(
    (data: T) => safeDispatch({ data, state: "success", error: null }),
    [safeDispatch]
  );
  // 请求失败改变状态方法
  const onFailure = useCallback(
    (error: Error) => safeDispatch({ data: null, state: "error", error }),
    [safeDispatch]
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
      safeDispatch({ state: "loading" });
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
    },
    [config.throwOnError, safeDispatch, onSucess, onFailure]
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
