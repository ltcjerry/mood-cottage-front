import { useEffect, useRef } from "react";

/**
 * @description 返回组件的挂载状态
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
