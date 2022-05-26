import { Table, TableProps } from "antd";
import { CommonRate } from "component/business/common-rate";
import dayjs from "dayjs";
import { useEditArticle } from "hook/business/article";
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
  refresh?: () => void;
}

export const ShowList = ({ users, ...props }: ListProps) => {
  const { doAction } = useEditArticle();
  const exeAction = (id: number) => (pin: boolean) =>
    doAction({ id: String(id), pin }).then(props.refresh);
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={[
        {
          title: <CommonRate checked={true} disabled={true} />,
          render(value, article) {
            return (
              <CommonRate
                checked={article.pin}
                onCheckChange={exeAction(+article.id)}
              />
            );
          },
        },
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