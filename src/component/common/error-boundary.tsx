import React from "react";

type FallbackRender = (props: { error: Error | null }) => any;
// 错误边界组件即某个组件的崩溃不会导致整个APP的崩溃
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 子组件发生渲染错误后，会将错误信息返回到state中
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    // 有error就渲染错误信息，没有就正常渲染
    return error ? fallbackRender({ error }) : children;
  }
}
