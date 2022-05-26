import { Drawer } from "antd";

export const CreateArticle = (props: {
  openState: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer visible={props.openState} width={"100%"} onClose={props.onClose}>
      <h1>创建窗口</h1>
      <button onClick={props.onClose}>关闭</button>
    </Drawer>
  );
};
