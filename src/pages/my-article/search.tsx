import styled from "@emotion/styled";
import { Form, Input, Select } from "antd";

export const SearchPanel = ({
  users,
  param,
  setParam,
}: {
  users: any[];
  param: any;
  setParam: any;
}) => {
  return (
    <Container layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          placeholder={"文章名称"}
          onChange={(value) => setParam({ ...param, name: value })}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>作者</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Container>
  );
};

const Container = styled(Form)`
  margin-bottom: 2rem;
`;
