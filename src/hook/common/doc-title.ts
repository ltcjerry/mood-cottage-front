import { useEffect, useRef } from "react";

export const useTitle = (title: string, keepAlive = true) => {
  /**
   * 组件渲染时没有依赖项的hook只会执行一次，
   * 由于闭包的原因useEffect的返回函数记录的值是第一次渲染的值，
   * 若需要获取每次渲染的最新值，则需要添加依赖项
   * 第二种方法是使用useRef保存第一次渲染时的值，它在整个组件生命周期不会变化
   */
  const firstRenderTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepAlive) {
        document.title = firstRenderTitle;
      }
    };
  }, [keepAlive, firstRenderTitle]);
};
