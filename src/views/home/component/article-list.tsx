import styled from "@emotion/styled";
import { List } from "antd";
import { EyeOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { useState } from "react";

const listData: Article[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `title ${i}`,
    description:
      "描述如下 同时发多个相同的请求，如果第一个请求成功，那么剩余的请求都不会发出，成功的结果作为剩余请求返回 如果第一个请求失败了，那么接着发编号为2的请求，如果请求成功，那么剩余的请求都不会发出，成功的",
    picture:
      "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab829ee3b3c04fa8a4a4ad2b6e15b6e9~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
  });
}

interface Article {
  href: string;
  title: string;
  description: string;
  picture: string;
}
export const ArticleList = () => {
  const [data] = useState<Article[]>(listData);
  return (
    <Wrapper>
      <TabList>
        <li className="tab-item">
          <span className="tab-item_action">推荐</span>
        </li>
        <li className="tab-item">
          <span className="tab-item_action">最新</span>
        </li>
        <li className="tab-item">
          <span className="tab-item_action">热榜</span>
        </li>
      </TabList>
      <List
        size="small"
        itemLayout="vertical"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <div className="article-img-x">
                <img width={120} alt="bg" src={item.picture} />
              </div>
            }
            actions={[
              <IconBox>
                <EyeOutlined />
                <span className="icon-text">9.0w</span>
              </IconBox>,
              <IconBox>
                <LikeOutlined />
                <span className="icon-text">932</span>
              </IconBox>,
              <IconBox>
                <MessageOutlined />
                <span className="icon-text">453</span>
              </IconBox>,
            ]}
          >
            <List.Item.Meta
              title={
                <ArticleTitle>
                  <ul className="article-extra-list">
                    <li className="extra-list-item">
                      <span className="list-item-info">心态戏弄师</span>
                    </li>
                    <li className="extra-list-item">
                      <span className="list-item-info">18天前</span>
                    </li>
                    <li className="extra-list-item">
                      <span className="list-item-info">React</span>
                    </li>
                  </ul>
                  <h3 className="article-title-text">
                    前端并发10个相同的请求，怎么控制为只发一个请求？
                  </h3>
                </ArticleTitle>
              }
              description={<ArticleDesc>{item.description}</ArticleDesc>}
            />
          </List.Item>
        )}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70rem;
  min-height: 100%;
  background-color: #fff;
  .article-img-x {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const TabList = styled.ul`
  display: flex;
  padding: 1.5rem 1rem;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  .tab-item {
    padding: 0 1.2rem;
    line-height: 1.5rem;
    &:not(:last-child) {
      border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
    }
    .tab-item_action {
      color: #999;
      font-size: 1.4rem;
      cursor: pointer;
      &:hover {
        color: #007fff;
      }
    }
  }
`;
const ArticleTitle = styled.div`
  .article-extra-list {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .extra-list-item {
      padding: 0 6px;
      line-height: 12px;
      &:not(:last-child) {
        border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
      }
      .list-item-info {
        color: #86909c;
        font-size: 1.2rem;
      }
    }
  }
  .article-title-text {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ArticleDesc = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const IconBox = styled.span`
  font-size: 13px;
  color: #4e5969;
  .icon-text {
    margin-left: 12px;
  }
`;
