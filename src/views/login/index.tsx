/**
 * @description 登录页
 * @author jerry
 */

import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import { Form, Input, Button, Typography } from "antd";

import loginBg from "assets/img/login_bg.png";
import LoginLogo from "assets/img/login_logo.png";
// 直接将svg资源当成组件使用方法
import { ReactComponent as QQ } from "assets/svg/qq.svg";
import { ReactComponent as Wechat } from "assets/svg/wechat.svg";
import { ReactComponent as Github } from "assets/svg/github.svg";

export const Login = () => {
  // 获取全局context的信息和操作方法
  const { login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <LoginContainer>
      <LogoBox />
      <FormBox>
        <Form onFinish={handleSubmit}>
          <Form.Item>
            <TitleBox>帐密登录</TitleBox>
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input id="username" placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password id="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <ButtonBox type="primary" htmlType="submit">
              登录
            </ButtonBox>
            <LinkBox>
              <Button type={"link"}>手机登录</Button>
              <Button type={"link"}>忘记密码</Button>
            </LinkBox>
            <SvgList>
              <SvgBox>
                <QQ width={"23px"} height={"23px"} />
              </SvgBox>
              <SvgBox>
                <Wechat width={"23px"} height={"23px"} />
              </SvgBox>
              <SvgBox>
                <Github width={"23px"} height={"23px"} />
              </SvgBox>
            </SvgList>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Typography.Text>
              <span>注册登录即表示同意</span>
              <Button type={"link"} style={{ padding: "0px" }}>
                用户协议
              </Button>
              <span>、</span>
              <Button type={"link"} style={{ padding: "0px" }}>
                隐私政策
              </Button>
            </Typography.Text>
          </Form.Item>
        </Form>
      </FormBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-color: #b8e5f8;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(${loginBg});
`;

const TitleBox = styled.h1`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: bolder;
`;

const FormBox = styled.div`
  width: 40rem;
  padding: 2rem;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 15%);
`;

const LogoBox = styled.div`
  width: 39.2rem;
  height: 12.4rem;
  margin-top: 6rem;
  margin-bottom: 2.4rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${LoginLogo});
`;

const ButtonBox = styled(Button)`
  width: 100%;
  border-radius: 2px;
`;
const LinkBox = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
`;

const SvgList = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
`;

const SvgBox = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #f4f8fb;
`;
