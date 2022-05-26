import styled from "@emotion/styled";
import { Form, Input } from "antd";
import { UserSelect } from "component/business/user-select";
import { Article } from "./list";
interface User {
  id: number;
  name: string;
}

interface SearchParams {
  users: User[];
  param: Pick<Article, "name" | "personId">;
  setParam: (param: SearchParams["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchParams) => {
  return (
    <Container layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          placeholder={"文章名称"}
          onChange={(value) => setParam({ ...param, name: value.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName="作者"
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: String(value),
            })
          }
        />
      </Form.Item>
    </Container>
  );
};

const Container = styled(Form)`
  margin-bottom: 2rem;
`;
