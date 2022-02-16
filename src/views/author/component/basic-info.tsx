import styled from "@emotion/styled";
import { Button, Space, Tabs } from "antd";
import {
  QqOutlined,
  RightOutlined,
  IdcardOutlined,
  GithubOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { RecordItem } from "./record-item";
// import { useState } from "react"

export const BasicInfo = () => {
  // const [info, setInfo] = useState(null)
  return (
    <Wrapper>
      <header className="basic-info-x">
        <img
          className="user-profile"
          src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
          alt="profile"
        />
        <div className="user-info-x">
          <h3 className="nickname">心态戏弄师</h3>
          <ul className="other-info-x">
            <li className="other-info-item">
              <Space>
                <IdcardOutlined />
                <span className="info-item_position">
                  前端开发工程师 | ZYHL
                </span>
              </Space>
            </li>
            <li className="other-info-item">
              <Space>
                <IdcardOutlined />
                <span className="info-item_position">逍遥旅行者、技术迷</span>
              </Space>
            </li>
          </ul>
        </div>
        <div className="user-action-x">
          <Space className="web-log-x" size={"middle"}>
            <GithubOutlined />
            <WechatOutlined />
            <QqOutlined />
          </Space>
          <Button type="primary" ghost>
            编辑个人资料
          </Button>
        </div>
        <div className="complete-badge-x">
          <span className="badge-icon">🏅</span>
          <span className="badge-text">成长足迹</span>
          <Space className="badge-list">
            <span className="badge-tag">🥇</span>
            <RightOutlined style={{ color: "#999" }} />
          </Space>
        </div>
      </header>
      <CategoryTab>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="动态" key="1" />
          <Tabs.TabPane tab="文章" key="2" />
          <Tabs.TabPane tab="笔记" key="3" />
          <Tabs.TabPane tab="收藏" key="4" />
          <Tabs.TabPane tab="关注" key="5" />
        </Tabs>
      </CategoryTab>
      <RecordItem />
      <RecordItem />
      <RecordItem />
      <RecordItem />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70rem;
  min-height: 100%;
  .basic-info-x {
    display: flex;
    padding: 2.5rem 2.5rem 0 2.5rem;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fff;
    .user-profile {
      width: 9rem;
      height: 9rem;
      margin-top: -1.5rem;
      border-radius: 50%;
    }
    .user-info-x {
      margin: 0 auto 0 2.4rem;
      .nickname {
        margin: 0;
        color: #000;
        line-height: 1.2;
        font-weight: 600;
        font-size: 2.167rem;
      }
    }
    .other-info-x {
      margin: 0;
      padding: 1rem 0;
      font-size: 1.5rem;
      line-height: 2.4;
      color: #72777b;
      overflow: hidden;
    }
    .user-action-x {
      display: flex;
      height: 11rem;
      flex-direction: column;
      justify-content: space-between;
      .web-log-x {
        justify-content: end;
        font-size: 1.8rem;
        color: #999;
      }
    }
    .complete-badge-x {
      display: flex;
      width: 100%;
      height: 5.3rem;
      margin-top: 2rem;
      align-items: center;
      border-top: 1px solid #e4e6eb;
      .badge-icon {
        font-size: 2rem;
      }
      .badge-text {
        margin: 0 auto 0 1rem;
        font-size: 16px;
        color: #1d2129;
      }
      .badge-tag {
        font-size: 1.5rem;
      }
    }
  }
`;
const CategoryTab = styled.div`
  .ant-tabs-nav {
    margin: 10px 0 0 0;
    background-color: #fff;
    .ant-tabs-tab {
      padding: 12px 22px;
      font-size: 1.6rem;
    }
  }
`;
