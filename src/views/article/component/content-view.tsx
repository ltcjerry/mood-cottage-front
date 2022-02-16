/**
 * @description 文章详情展示
 * @author jerry
 */

import styled from "@emotion/styled";
import { Button } from "antd";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
const markdown = `#标题1 ##标题3`;

export const ContentView = () => {
  return (
    <Wrapper>
      <header className="article-head-x">
        <h1 className="article-title-x">ES6入门教程-读书笔记</h1>
        <div className="article-author-x">
          <img
            className="author-profile"
            src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
            alt="profile"
          />
          <div className="author-info-x">
            <h4 className="author-nickName">心态戏弄师</h4>
            <div className="article-record-x">
              <span>2020年06月08日 09:31 · 阅读 1579</span>
              <Button className="edit-btn" type={"link"}>
                编辑
              </Button>
            </div>
          </div>
        </div>
      </header>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 77rem;
  padding: 2.5rem;
  min-height: 100%;
  background-color: #fff;
  .article-title-x {
    line-height: 1.3;
    color: #252933;
    font-size: 3rem;
    font-weight: 600;
  }
  .article-author-x {
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    .author-profile {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: -6px;
    }
    .author-nickName {
      margin: 0;
      font-weight: 500;
      color: #515767;
      font-size: 1.6rem;
      line-height: 2rem;
    }
    .article-record-x {
      font-size: 1.4rem;
      color: #8a919f;
    }
    .edit-btn {
      height: auto;
      line-height: normal;
    }
  }
`;
