/**
 * @description 创作中心导航组件
 * @author jerry
 */

import styled from "@emotion/styled";
import { Avatar, Button, Menu, Space } from "antd";
import {
  HomeFilled,
  FundFilled,
  EditFilled,
  FlagFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";

export const CreateNav = () => {
  return (
    <NavWrapper>
      <div className="author-x">
        <Space>
          <Avatar
            size={48}
            src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
          />
          <div>
            <h4 className="author-nickName">心态戏弄师</h4>
            <p className="author-record">前端开发工程师 @ ZYHL</p>
          </div>
        </Space>
        <Button type="primary" className="write-btn">
          写文章
        </Button>
      </div>
      <Menu
        style={{ width: "100%", border: "none", color: "#666" }}
        defaultSelectedKeys={["index"]}
        defaultOpenKeys={["index"]}
        mode="inline"
      >
        <Menu.Item key="index" icon={<HomeFilled />}>
          首页
        </Menu.Item>
        <Menu.SubMenu key="content" icon={<EditFilled />} title="内容管理">
          <Menu.Item key="artilce">文章管理</Menu.Item>
          <Menu.Item key="other">专栏管理</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="data" icon={<FundFilled />} title="数据中心">
          <Menu.Item key="view">内容数据</Menu.Item>
          <Menu.Item key="follow">关注者数据</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="activity" icon={<FlagFilled />} title="活动中心">
          <Menu.Item key="create">创作活动</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="help"
          icon={<QuestionCircleFilled />}
          title="帮助中心"
        >
          <Menu.Item key="question">常见问题</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 24rem;
  min-height: 100%;
  padding: 20px 15px;
  background-color: #fff;
  .ant-menu-item,
  .ant-menu-title-content {
    font-size: 16px;
  }
  .author-x {
    margin-bottom: 20px;
    .author-nickName {
      margin-bottom: 4px;
      max-width: 120px;
      color: #1d2129;
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .author-record {
      margin: 0;
      color: #86909c;
      max-width: 150px;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .write-btn {
      width: 100%;
      margin-top: 20px;
    }
  }
`;
