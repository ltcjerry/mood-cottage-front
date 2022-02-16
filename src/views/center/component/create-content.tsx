/**
 * @description 创作中心内容展示组件
 * @author jerry
 */

import styled from "@emotion/styled";
import { ShowContent } from "./show-content";

export const CreateContent = () => {
  return (
    <ContentWrapper>
      <ShowContent />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  width: 84rem;
  min-height: 100%;
  background-color: #fff;
`;
