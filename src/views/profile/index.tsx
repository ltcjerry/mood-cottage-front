/**
 * @description 信息设置
 * @author jerry
 */

import { Menu } from "antd";
import { Fragment } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { CommonHeader } from "component/business/common-header";
import {
  LeftOutlined,
  StopOutlined,
  IdcardOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { PersonalInfo } from "./component/personal-info";

export const SettingInfo = () => {
  return (
    <Fragment>
      <CommonHeader />
      <ContentWrapper>
        <header className="setting-header">
          <Link to={"/myHome"} className="header-nav">
            <LeftOutlined />
            <span>返回个人主页</span>
          </Link>
        </header>
        <nav className="setting-nav">
          <Menu
            mode="inline"
            defaultOpenKeys={["person"]}
            defaultSelectedKeys={["person"]}
            style={{ width: "100%", border: "none", color: "#666" }}
          >
            <Menu.Item key="person" icon={<IdcardOutlined />}>
              个人资料
            </Menu.Item>
            <Menu.Item key="info" icon={<SettingOutlined />}>
              帐号设置
            </Menu.Item>
            <Menu.Item key="resume" icon={<FileTextOutlined />}>
              简历管理
            </Menu.Item>
            <Menu.Item key="ban" icon={<StopOutlined />}>
              屏蔽管理
            </Menu.Item>
          </Menu>
        </nav>
        <main className="setting-main">
          <PersonalInfo />
        </main>
      </ContentWrapper>
    </Fragment>
  );
};

const ContentWrapper = styled.section`
  display: grid;
  max-width: 120rem;
  min-height: 99vh;
  margin: 0 auto;
  padding-top: 6.5rem;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: 45px auto;
  grid-template-columns: 20% 80%;
  grid-template-areas: "header header" "nav    main";
  background-color: #f4f5f5;
  .setting-header {
    grid-area: header;
    line-height: 45px;
    padding-left: 15px;
    background-color: #fff;
    .header-nav {
      color: #999;
    }
  }
  .setting-nav {
    grid-area: nav;
    padding: 8px 10px;
    background-color: #fff;
    .ant-menu-item,
    .ant-menu-title-content {
      font-size: 16px;
      .ant-menu-item-icon {
        font-size: 18px;
      }
    }
  }
  .setting-main {
    grid-area: main;
    background-color: #fff;
  }
`;
