/**
 * @description 编辑文章头部组件
 * @author jerry
 */

import styled from "@emotion/styled";

import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Space } from "antd";
import { AvatarTool } from "component/business/avatar-tool";

export const EditHeader = () => {
  return (
    <HeaderWrapper>
      <Input
        className="fix-input"
        bordered={false}
        placeholder="输入文章标题..."
      />
      <Space className="btn-group-x" size={15}>
        <span className="tip-color">文章将自动保存自草稿箱</span>
        <Button type="primary" ghost>
          草稿箱
        </Button>
        <Dropdown.Button type="primary" overlay={menu} icon={<DownOutlined />}>
          文章类型
        </Dropdown.Button>
        <Button type="primary">发布</Button>
        <AvatarTool />
      </Space>
    </HeaderWrapper>
  );
};

const menu = (
  <Menu style={{ width: "120px" }}>
    <Menu.Item key="note">笔记</Menu.Item>
    <Menu.Item key="find">发现</Menu.Item>
    <Menu.Item key="share">分享</Menu.Item>
    <Menu.Item key="talk">吐嘈</Menu.Item>
  </Menu>
);

const HeaderWrapper = styled.header`
  display: flex;
  height: 64px;
  padding: 0 27px;
  align-items: center;
  background-color: #fff;
  .fix-input {
    font-size: 2.5rem;
    color: #1d2129;
  }
  .btn-group-x {
    margin-left: 20px;
    .tip-color {
      font-size: 14px;
      color: #c9cdd4;
      user-select: none;
      white-space: nowrap;
    }
  }
`;
