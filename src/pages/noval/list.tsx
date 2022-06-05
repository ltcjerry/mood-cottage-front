import { Button, Dropdown, Menu, Modal, Table, TableProps } from "antd";
import { CommonRate } from "component/business/common-rate";
import dayjs from "dayjs";
import { useEditArticle, useDeleteArticle } from "hook/business/article";
import { useArticleModal } from "hook/business/modal";
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
  const { onEdit } = useArticleModal();
  const { mutate } = useEditArticle();
  const { mutate: deleteArticle } = useDeleteArticle();
  const exeAction = (id: number) => (pin: boolean) =>
    mutate({ id: String(id), pin });
  const editArtcle = (id: number) => () => onEdit(id);
  const confirmDelete = (id: number) => {
    Modal.confirm({
      title: "确定删除吗？",
      content: "点击确定删除",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        deleteArticle(id);
      },
    });
  };
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
        { title: "分类", dataIndex: "category" },
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
        {
          title: "操作",
          render(value, article) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"edit"} onClick={editArtcle(+article.id)}>
                      编辑
                    </Menu.Item>
                    <Menu.Item
                      key={"delete"}
                      onClick={() => confirmDelete(+article.id)}
                    >
                      删除
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button type={"link"}>...</Button>
              </Dropdown>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
