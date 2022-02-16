import styled from "@emotion/styled";
import { Spin, Typography } from "antd";

// 自定义弹性盒模型布局样式组件
export const CustomeFlexBox = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};
  > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

// 全局loading组件
const FullPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const GlobalLoading = () => {
  return (
    <FullPage>
      <Spin size={"large"} />
    </FullPage>
  );
};

// 全局错误提示组件
export const GlobalErrorFallback = ({ error }: { error: Error | null }) => {
  return (
    <FullPage>
      <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
    </FullPage>
  );
};
