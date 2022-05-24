import { Button, Card } from "antd";
import { useState } from "react";
import { MyLogin } from "./login";
import { MyRegister } from "./register";

export const UnauthView = () => {
  const [isRgister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRgister ? <MyRegister /> : <MyLogin />}
        <Button onClick={() => setIsRegister(!isRgister)}>
          切换到{isRgister ? "登录" : "注册"}
        </Button>
      </Card>
    </div>
  );
};
