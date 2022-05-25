import styled from "@emotion/styled";
import { Spin } from "antd";

export const FullLoading = () => (
  <Fullpage>
    <Spin size={"large"} />
  </Fullpage>
);

const Fullpage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
