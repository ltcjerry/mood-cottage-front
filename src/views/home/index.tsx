/**
 * @description 首页
 * @author jerry
 */

import { Fragment } from "react";
import styled from "@emotion/styled";
import { CommonHeader } from "component/common-header";
import { ArticleList } from "./component/article-list";
import { RecommendList } from "./component/recommend-list";
import "markdown-navbar/dist/navbar.css";

export const Home = () => {
  return (
    <Fragment>
      <CommonHeader />
      <ContentWrapper>
        <ArticleList />
        <RecommendList />
      </ContentWrapper>
    </Fragment>
  );
};

const ContentWrapper = styled.main`
  display: flex;
  max-width: 96rem;
  min-height: 99vh;
  margin: 0 auto;
  padding-top: 6.5rem;
  justify-content: space-between;
  background-color: #f4f5f5;
`;
