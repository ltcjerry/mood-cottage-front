/**
 * @description 个人资料编辑
 * @author jerry
 */

import styled from "@emotion/styled";
import { Avatar, Button, Form, Input } from "antd";

export const PersonalInfo = () => {
  return (
    <EditForm>
      <h2>个人资料</h2>
      <div className="edit-x">
        <Form
          colon={false}
          requiredMark={false}
          className="form-x"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18, offset: 1 }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input className="fix-input" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="职位"
            name="position"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input className="fix-input" placeholder="请输入职位名称" />
          </Form.Item>
          <Form.Item
            label="公司"
            name="company"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input className="fix-input" placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item
            label="个人主页"
            name="myHome"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input className="fix-input" placeholder="请输入个人主页" />
          </Form.Item>
          <Form.Item
            label="个人介绍"
            name="introduce"
            rules={[{ required: true, message: "请输入" }]}
          >
            <Input.TextArea
              className="fix-input"
              showCount
              maxLength={100}
              placeholder="请输入个人介绍"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              保存修改
            </Button>
          </Form.Item>
        </Form>
        <div className="avatar-x">
          <Avatar
            size={64}
            src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
          />
          <div>
            <h3 className="avatar-name">我的头像</h3>
            <p className="avatar-tip">
              <div className="text-center">
                支持 jpg、png、jpeg 格式大小 5M 以内的图片
              </div>
            </p>
          </div>
        </div>
      </div>
    </EditForm>
  );
};

const EditForm = styled.div`
  padding: 20px;
  .edit-x {
    display: flex;
    margin-top: 20px;
    .form-x {
      flex: 1;
      .fix-input {
        background: #fafafa;
      }
      .ant-form-item {
        padding-top: 24px;
        border-top: 1px solid #ddd;
      }
    }
    .avatar-x {
      width: 40%;
      text-align: center;
      .avatar-name {
        margin: 10px 0;
      }
      .avatar-tip {
        width: 120px;
        margin: 0 auto;
        .text-center {
          display: inline-block;
          text-align: left;
          color: #86909c;
          font-size: 12px;
          line-height: 17px;
          font-weight: 400;
        }
      }
    }
  }
`;
