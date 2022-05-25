import { useState } from "react";
import { SearchPanel } from "./search";
import { ShowList } from "./list";
import { useDebounce } from "hook/common";
import styled from "@emotion/styled";
import { useArtcle } from "hook/business/article";
import { useUser } from "hook/business/user";
export const MyArticle = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const debounceParam = useDebounce(param, 3000);
  const { isLoading, data: list } = useArtcle(debounceParam);
  const { data: users } = useUser();
  return (
    <Container>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      <ShowList
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
