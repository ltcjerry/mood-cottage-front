/**
 * @description 内容管理组件
 * @author jerry
 */

import styled from "@emotion/styled";
import { Dropdown, Input, List, Menu, Space, Tabs } from "antd";
import { SearchOutlined, EllipsisOutlined } from "@ant-design/icons";

interface temp {
  title: string;
  content: string;
}
const list: temp[] = [
  { title: "测试", content: "描述" },
  { title: "测试", content: "描述" },
  { title: "测试", content: "描述" },
  { title: "测试", content: "描述" },
  { title: "测试", content: "描述" },
];

export const ShowContent = () => {
  return (
    <ContentBox>
      <Tabs
        tabBarExtraContent={
          <Input
            className="fix-input"
            placeholder="请输入标题关键字"
            suffix={<SearchOutlined style={{ color: "#ccc" }} />}
          />
        }
      >
        <Tabs.TabPane tab="文章" key="article" />
        <Tabs.TabPane tab="草稿箱" key="draft" />
      </Tabs>
      <List
        style={{ padding: "0 15px" }}
        dataSource={list}
        renderItem={(item: temp) => (
          <List.Item
            actions={[
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>编辑</Menu.Item>
                    <Menu.Item>删除</Menu.Item>
                  </Menu>
                }
              >
                <EllipsisOutlined
                  style={{ fontSize: "25px", cursor: "pointer" }}
                />
              </Dropdown>,
            ]}
          >
            <List.Item.Meta
              title={<strong style={{ fontSize: "18px" }}>列表标题</strong>}
              description={
                <Space size={"middle"}>
                  <time>2020-06-08 09:31</time>
                  <span>1330展现·1582阅读·11点赞·2评论·16收藏</span>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </ContentBox>
  );
};

const ContentBox = styled.div`
  .ant-tabs-nav {
    margin-bottom: 0;
    .ant-tabs-tab {
      padding: 10px 15px;
      font-size: 16px;
      color: #86909c;
    }
    .fix-input {
      position: relative;
      right: 15px;
    }
    .fix-list {
      padding: 0 15px;
    }
  }
`;
