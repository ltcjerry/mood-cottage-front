/**
 * @description 文章内容导航
 * @author jerry
 */

import styled from "@emotion/styled";
import { Affix, Card } from "antd";
import MarkNav from "markdown-navbar";
import { ReactComponent as ShareIcon } from "assets/svg/record_2.svg";
import { ReactComponent as ReadIcon } from "assets/svg/record_4.svg";
const markdown = `#标题1 ##标题3`;

export const ContentNav = () => {
  return (
    <Wrapper>
      <Card
        bordered={false}
        className="card-gap"
        bodyStyle={{ padding: "10px" }}
        title={
          <div className="article-author-x">
            <img
              className="author-profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="author-info-x">
              <h4 className="author-nickName">心态戏弄师</h4>
              <div className="article-record-x">前端开发工程师 @ ZYHL</div>
            </div>
          </div>
        }
      >
        <ul className="record-list-x">
          <li className="record-list-item">
            <ShareIcon className="record-icon" />
            <span>文章被点赞11</span>
          </li>
          <li className="record-list-item">
            <ReadIcon className="record-icon" />
            <span>文章被阅读1,557</span>
          </li>
        </ul>
      </Card>
      <Card
        bordered={false}
        className="card-gap"
        bodyStyle={{ padding: "10px" }}
        title="相关文章"
      >
        <ul className="relation-list-x">
          <li className="relation-list-item">
            <h4 className="relation-item-title">ES6学习笔记</h4>
            <span>19点赞 · 0评论</span>
          </li>
          <li className="relation-list-item">
            <h4 className="relation-item-title">ES6学习笔记</h4>
            <span>19点赞 · 0评论</span>
          </li>
          <li className="relation-list-item">
            <h4 className="relation-item-title">ES6学习笔记</h4>
            <span>19点赞 · 0评论</span>
          </li>
          <li className="relation-list-item">
            <h4 className="relation-item-title">ES6学习笔记</h4>
            <span>19点赞 · 0评论</span>
          </li>
        </ul>
      </Card>
      <ArticleNav />
    </Wrapper>
  );
};

const ArticleNav = () => {
  return (
    <Affix offsetTop={60}>
      <Card
        bordered={false}
        title={<div className="markNav-title">文章目录</div>}
        bodyStyle={{ padding: "1px" }}
      >
        <MarkNav
          className="article-menu"
          source={markdown}
          headingTopOffset={200}
        />
      </Card>
    </Affix>
  );
};

const Wrapper = styled.aside`
  width: 28rem;
  min-height: 100%;
  .card-gap {
    margin-bottom: 20px;
  }
  .article-author-x {
    display: flex;
    align-items: center;
    .author-profile {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      margin-right: 15px;
    }
    .author-nickName {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 500;
      color: #252933;
    }
    .article-record-x {
      font-size: 1.4rem;
      color: #515767;
      font-weight: 400;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .record-list-x {
    margin: 0 0 0 15px;
    .record-list-item {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      height: 4rem;
    }
    .record-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
  }
  .relation-list-x {
    margin: 0 0 0 15px;
    .relation-list-item {
      font-size: 1.4rem;
      margin: 10px 0;
      color: #8a919f;
      font-weight: 400;
      .relation-item-title {
        font-size: 1.5rem;
        margin-bottom: 6px;
        font-weight: 400;
      }
    }
  }
`;
