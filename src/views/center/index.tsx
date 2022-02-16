/**
 * @description 创作中心
 * @author jerry
 */

import styled from "@emotion/styled";
import { Fragment } from "react";
import { CreateNav } from "./component/create-nav";
import { TopHeader } from "./component/top-header";
import { CreateContent } from "./component/create-content";

export const CreateCenter = () => {
  return (
    <Fragment>
      <TopHeader />
      <ContentWrapper>
        <CreateNav />
        <CreateContent />
      </ContentWrapper>
    </Fragment>
  );
};

const ContentWrapper = styled.main`
  display: flex;
  max-width: 110rem;
  min-height: 99vh;
  margin: 0 auto;
  padding-top: 6.5rem;
  justify-content: space-between;
  background-color: #f4f5f5;
`;
