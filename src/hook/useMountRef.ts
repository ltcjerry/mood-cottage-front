import { useEffect, useRef } from "react";

/**
 * @description 返回组件的挂载状态。解决操作过快时，组件已卸载，但异步请求回调函数依然执行造成的内存泄漏问题
 * @author jerry
 */
export const useMountRef = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    // 已挂载状态
    mountedRef.current = true;
    return () => {
      // 卸载状态
      mountedRef.current = false;
    };
  });
  return mountedRef;
};
