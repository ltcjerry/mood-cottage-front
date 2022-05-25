/**
 * @description 我的主页
 * @author jerry
 */

import { Fragment } from "react";
import styled from "@emotion/styled";
import { CommonHeader } from "component/business/common-header";
import { BasicInfo } from "./component/basic-info";
import { AllRecord } from "./component/all-record";

export const MyHome = () => {
  return (
    <Fragment>
      <CommonHeader />
      <ContentWrapper>
        <BasicInfo />
        <AllRecord />
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
