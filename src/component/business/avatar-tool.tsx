/**
 * @description 头像工具栏
 * @author jerry
 */

import { Avatar, Dropdown, Menu, Divider } from "antd";
import { Link } from "react-router-dom";

export const AvatarTool = () => {
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Avatar
        size={36}
        src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
      />
    </Dropdown>
  );
};

const menu = (
  <Menu>
    <Menu.Item>
      <Link to={"/editArticle"}>写文章</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/editArticle"}>草稿箱</Link>
    </Menu.Item>
    <Divider style={{ margin: "6px 0" }} />
    <Menu.Item>
      <Link to={"/myHome"}>我的主页</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/editArticle"}>信息设置</Link>
    </Menu.Item>
    <Divider style={{ margin: "6px 0" }} />
    <Menu.Item>退出</Menu.Item>
  </Menu>
);
