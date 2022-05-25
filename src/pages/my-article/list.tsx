import { Table, TableProps } from "antd";
import dayjs from "dayjs";

export interface Article {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  category: string;
  created: number;
}
interface ListProps extends TableProps<Article> {
  users: any[];
}

export const ShowList = ({ users, ...props }: ListProps) => {
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={[
        { title: "名称", dataIndex: "name" },
        { title: "部门", dataIndex: "category" },
        {
          title: "作者",
          render(value, article) {
            return (
              <span>
                {users.find((user) => user.id === article.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, article) {
            return (
              <span>
                {article.created
                  ? dayjs(article.created).format("YYYY-MM-DD")
                  : "/"}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
