import styled from "@emotion/styled";
import { Button, Card, Divider } from "antd";
import { useState } from "react";
import { MyLogin } from "./login";
import { MyRegister } from "./register";

export const UnauthView = () => {
  const [isRgister, setIsRegister] = useState(false);
  return (
    <Container>
      <ShadowCard>
        {isRgister ? <MyRegister /> : <MyLogin />}
        <Divider />
        <Button type={"link"} onClick={() => setIsRegister(!isRgister)}>
          {isRgister ? "已经有帐号了？直接登录" : "没有帐号？注册新帐号"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  text-align: center;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
