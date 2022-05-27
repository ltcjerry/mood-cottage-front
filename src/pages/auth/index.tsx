import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "component/style";
import { useAuth } from "context/auth-context";
import { NovalView } from "pages/noval";
import { ReactComponent as Logo } from "assets/svg/logo_index.svg";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { SingleNoval } from "pages/detail";
import { CreateArticle } from "pages/noval/create";
import { useState } from "react";
import { CollectArticle } from "component/business/collect-article";

export const AuthView = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Header between={true}>
        <LeftWrap gap={2}>
          <Logo width={"10rem"} />
          <CollectArticle />
          <span>用户</span>
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
        <Router>
          <Routes>
            <Route path={"/"} element={<Navigate replace to="/article" />} />
            <Route path={"/article"} element={<NovalView />} />
            <Route path={"/article/:articleId/*"} element={<SingleNoval />} />
          </Routes>
        </Router>
      </Main>
      <Button onClick={() => setIsOpen(true)}>打开</Button>
      <CreateArticle openState={isOpen} />
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LeftWrap = styled(Row)``;

const RightWrap = styled.div``;

const Main = styled.main``;
