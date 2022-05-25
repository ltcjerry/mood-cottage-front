import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "component/style";
import { useAuth } from "context/auth-context";
import { MyArticle } from "pages/my-article";
import { ReactComponent as Logo } from "assets/svg/logo_index.svg";

export const AuthView = () => {
  const { user, logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <LeftWrap gap={2}>
          <Logo width={"10rem"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </LeftWrap>
        <RightWrap>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <Button onClick={() => logout()}>退出</Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="link">Hi，{user?.username}</Button>
          </Dropdown>
        </RightWrap>
      </Header>
      <Main>
        <MyArticle />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
`;

const LeftWrap = styled(Row)``;

const RightWrap = styled.div``;

const Main = styled.main``;
