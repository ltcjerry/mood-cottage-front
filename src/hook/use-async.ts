import { useCallback, useState } from "react";
import { useMountRef } from "./useMountRef";

// 异步状态类型
interface State<T> {
  error: Error | null;
  data: T | null;
  status: "idle" | "loading" | "error" | "success";
}
// 初始默认状态
const initDefaultState: State<null> = {
  status: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};

// 自定义异步请求hook
export const useAsync = <T>(
  initState?: State<T>,
  initConfig?: typeof defaultConfig
) => {
  // 合并内外部配置参数，判断是否需要手动抛出异常
  const config = { ...defaultConfig, ...initConfig };
  // 合并内外部状态参数，外部优先级更高
  const [state, setState] = useState<State<T>>({
    ...initDefaultState,
    ...initState,
  });
  // 判断当前组件的挂载状态
  const mountedStatus = useMountRef();
  // 使用useState的惰性初始化保存刷新数据函数
  const [retry, setRetry] = useState(() => () => {});
  // 请求成功后变更数据状态方法
  const setData = useCallback(
    (data: T) => setState({ data, status: "success", error: null }),
    []
  );
  // 请求失败后变更数据状态方法
  const setError = useCallback(
    (error: Error) => setState({ error, status: "error", data: null }),
    []
  );
  // 对请求进行封装
  const startRequest = useCallback(
    (promise: Promise<T>, runConfig?: { retry: () => Promise<T> }) => {
      if (!promise || !promise.then) {
        throw new Error("请传入 Promise 类型数据");
      }
      // 保存刷新数据请求
      setRetry(() => () => {
        if (runConfig?.retry) {
          startRequest(runConfig?.retry(), runConfig);
        }
      });
      // 请求开始前，状态变更为loading状态
      setState((prevState) => ({ ...prevState, status: "loading" }));
      // 开始请求

      return promise
        .then((data) => {
          // 若组件已卸载就无需执行
          if (mountedStatus) {
            setData(data);
          }
          return data;
        })
        .catch((error) => {
          // catch会消化异常，如果不主动抛出，外面是接收不到异常的
          setError(error);
          /**
           * 是否手动抛出异常让外面的try-catch语句能够捕获，
           * 还是使用本身返回异步请求返回的err属性，
           * 需要考虑到事件循环机制
           */
          if (config.throwOnError) {
            return Promise.reject(error);
          } else {
            return error;
          }
        });
    },
    [config.throwOnError, mountedStatus, setData, setError]
  );

  // 向外部暴露状态和操作状态方法
  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    startRequest,
    setData,
    setError,
    retry,
    ...state,
  };
};
