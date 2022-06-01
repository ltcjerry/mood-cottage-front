import styled from "@emotion/styled";
import { Button, Drawer, Form, Input, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import { UserSelect } from "component/business/user-select";
import { ErrorBox } from "component/common";
import { useAddArticle, useEditArticle } from "hook/business/article";
import { useArticleModal } from "hook/business/modal";
import { useEffect } from "react";

export const CreateArticle = () => {
  const { isOpen, isLoading, editArticle, onClose } = useArticleModal();
  const useMutateArticle = editArticle ? useEditArticle : useAddArticle;
  const { mutateAsync, error, isLoading: mutateLoading } = useMutateArticle();
  const [form] = useForm();
  const title = editArticle ? "编辑小说" : "创建小说";
  const onFinish = (values: any) => {
    const params = { ...editArticle, ...values };
    if (!editArticle) {
      const time = new Date().getTime();
      params.id = time;
      params.created = time;
      params.pin = false;
    }
    mutateAsync(params).then(() => {
      form.resetFields();
      onClose();
    });
  };
  useEffect(() => {
    form.setFieldsValue(editArticle);
  }, [form, editArticle]);
  return (
    <Drawer visible={isOpen} width={"100%"} onClose={onClose}>
      {isLoading ? (
        <Spin size={"large"} />
      ) : (
        <Container>
          <h1>{title}</h1>
          <ErrorBox error={error} />
          <Form
            form={form}
            layout={"vertical"}
            style={{ width: "40rem" }}
            onFinish={onFinish}
          >
            <Form.Item
              label={"名称"}
              name={"name"}
              rules={[{ required: true, message: "请输入小说名称" }]}
            >
              <Input placeholder={"请输入小说名称"} />
            </Form.Item>
            <Form.Item
              label={"分类"}
              name={"category"}
              rules={[{ required: true, message: "请输入分类" }]}
            >
              <Input placeholder={"请输入小说分类"} />
            </Form.Item>
            <Form.Item
              label={"作者"}
              name={"personId"}
              rules={[{ required: true, message: "请选择作者" }]}
            >
              <UserSelect defaultOptionName="作者" />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                loading={mutateLoading}
                type={"primary"}
                htmlType={"submit"}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Container>
      )}
    </Drawer>
  );
};

const Container = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
