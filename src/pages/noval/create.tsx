import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { articleAction, selectArticleOpenState } from "store/article.slice";

export const CreateArticle = (props: { openState: boolean }) => {
  const openState = useSelector(selectArticleOpenState);
  const dispatch = useDispatch();
  return (
    <Drawer
      visible={openState}
      width={"100%"}
      onClose={() => dispatch(articleAction.closeModal())}
    >
      <h1>创建窗口</h1>
      <button onClick={() => dispatch(articleAction.closeModal())}>关闭</button>
    </Drawer>
  );
};
