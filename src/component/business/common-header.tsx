import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button, Dropdown, Input, Menu, Space, Tabs } from "antd";
import { ReactComponent as Logo } from "assets/svg/logo_index.svg";
import {
  SearchOutlined,
  FormOutlined,
  SmileOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

export const CommonHeader = () => {
  return (
    <HeaderContainer>
      <TabsWrapper
        defaultActiveKey="index"
        tabBarExtraContent={{
          left: (
            <Link to="/index">
              <Logo width={"80"} height={"50"} />
            </Link>
          ),
          right: (
            <Input
              placeholder="期待您能在这里发现一些闪光点哟"
              suffix={
                <SearchOutlined
                  style={{ color: "#8590a6", cursor: "pointer" }}
                />
              }
            />
          ),
        }}
      >
        <Tabs.TabPane tab="首页" key="index" />
        <Tabs.TabPane tab="发现" key="find" />
        <Tabs.TabPane tab="探索" key="explore" />
        <Tabs.TabPane tab="吐槽" key="talk" />
        <Tabs.TabPane tab="分享" key="share" />
        <Tabs.TabPane tab="期待评价" key="expect" />
      </TabsWrapper>
      <Space size={"middle"}>
        <Dropdown.Button
          type="primary"
          icon={<CaretDownOutlined />}
          overlayStyle={{ width: "133px" }}
          overlay={
            <Menu>
              <Menu.Item key="article" style={{ color: "#666" }}>
                <Link to={"/login"}>
                  <FormOutlined style={{ marginRight: "6px" }} />
                  <span>写文章</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="talk" style={{ color: "#666" }}>
                <Link to={"/login"}>
                  <SmileOutlined style={{ marginRight: "6px" }} />
                  <span>发说说</span>
                </Link>
              </Menu.Item>
            </Menu>
          }
        >
          创作者中心
        </Dropdown.Button>
        <Link to={"/login"}>
          <Button type="primary" ghost>
            登录
          </Button>
        </Link>
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
  z-index: 10;
`;

const TabsWrapper = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0px;
  }
  .ant-tabs-tab {
    padding: 16px 0;
    font-size: 1.5rem;
    color: #86909c;
    cursor: pointer;
  }
  .ant-tabs-extra-content {
    line-height: 10px;
    margin-right: 3rem;
    & ~ .ant-tabs-extra-content {
      width: 40rem;
      margin-left: 14rem;
      .ant-input-affix-wrapper {
        border-radius: 20px;
        background-color: #f6f6f6;
        &:focus-within {
          background-color: #fff;
        }
      }
      & .ant-input:not(:focus) {
        background-color: #f6f6f6;
      }
    }
  }
`;
