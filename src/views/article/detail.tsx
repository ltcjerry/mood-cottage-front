/**
 * @description 文章详情
 * @author jerry
 */

import { Fragment } from "react";
import styled from "@emotion/styled";
import { CommonHeader } from "component/common-header";
import { ContentNav } from "./component/content-nav";
import { ContentView } from "./component/content-view";

export const ArticleView = () => {
  return (
    <Fragment>
      <CommonHeader />
      <ContentWrapper>
        <ContentView />
        <ContentNav />
      </ContentWrapper>
    </Fragment>
  );
};

const ContentWrapper = styled.main`
  display: flex;
  max-width: 107rem;
  min-height: 99vh;
  margin: 0 auto;
  padding-top: 6.5rem;
  justify-content: space-between;
  background-color: #f4f5f5;
`;
