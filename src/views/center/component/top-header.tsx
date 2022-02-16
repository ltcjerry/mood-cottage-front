/**
 * @description 创作中心头部组件
 * @author jerry
 */

import styled from "@emotion/styled";
import { Button, Space } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { AvatarTool } from "component/avatar-tool";
import { ReactComponent as Logo } from "../../../assets/svg/logo_index.svg";

export const TopHeader = () => {
  return (
    <HeaderContainer>
      <div className="logo-x">
        <Logo className="logo-svg" />
        <Button type="link" className="logo-text">
          创作中心
        </Button>
      </div>
      <Space size={"middle"}>
        <BellOutlined style={{ fontSize: "24px", color: "#ddd" }} />
        <AvatarTool />
      </Space>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  z-index: 10;
  .logo-x {
    display: flex;
    align-items: center;
    .logo-svg {
      width: 80px;
      height: 50px;
    }
    .logo-text {
      margin-top: -5px;
      margin-left: -14px;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;
