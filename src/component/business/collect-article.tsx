import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Typography } from "antd";
import { useArtcle } from "hook/business/article";
import { useDispatch } from "react-redux";
import { articleAction } from "store/article.slice";

export const CollectArticle = () => {
  const dispatch = useDispatch();
  const { data: articles } = useArtcle();
  const collectList = articles?.filter((item) => item.pin);
  const Content = (
    <ContentBox>
      <Typography.Text type={"secondary"}>收藏小说</Typography.Text>
      <List>
        {collectList?.map((item) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={item.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <Button
        type={"link"}
        style={{ padding: 0 }}
        onClick={() => dispatch(articleAction.openModal())}
      >
        创建小说
      </Button>
    </ContentBox>
  );
  return (
    <Popover placement={"bottom"} content={Content}>
      小说
    </Popover>
  );
};

const ContentBox = styled.div`
  width: 20rem;
`;
