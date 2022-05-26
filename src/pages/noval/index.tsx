import { SearchPanel } from "./search";
import { ShowList } from "./list";
import { useDebounce } from "hook/common";
import styled from "@emotion/styled";
import { useArtcle } from "hook/business/article";
import { useUser } from "hook/business/user";
import { useUrlQueryParam } from "hook/common/url-query";
export const NovalView = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  const debounceParam = useDebounce(param, 3000);
  const { isLoading, refresh, data: list } = useArtcle(debounceParam);
  const { data: users } = useUser();
  return (
    <Container>
      <h1>小说列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      <ShowList
        refresh={refresh}
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
