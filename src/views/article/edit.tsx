/**
 * @description 编辑文章
 * @author jerry
 */

import { useState } from "react";
import styled from "@emotion/styled";
import "easymde/dist/easymde.min.css";
import { EditHeader } from "./component/edit-header";
import SimpleMdeReact from "react-simplemde-editor";

export const EditArticle = () => {
  const [value, setValue] = useState("写点文章吧");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <ContentWrapper>
      <EditHeader />
      <SimpleMdeReact value={value} onChange={onChange} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.main`
  height: 100vh;
  background-color: #f4f5f5;
  .CodeMirror-scroll {
    min-height: 78vh !important;
  }
`;
