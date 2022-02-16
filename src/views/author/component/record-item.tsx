import {
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import styled from "@emotion/styled";
import { Avatar, Card, Space } from "antd";

export const RecordItem = () => {
  return (
    <CardWrapper
      bordered={false}
      title={
        <Fragment>
          <strong className="record-text_bold">心态戏弄师</strong>
          <span className="record-text_light">关注了</span>
          <strong className="record-text_bold">羽飞</strong>
        </Fragment>
      }
      actions={[
        <Space className="action-item-x">
          <LikeOutlined />
          <span>484</span>
        </Space>,
        <Space className="action-item-x">
          <MessageOutlined />
          <span>158</span>
        </Space>,
        <Space className="action-item-x">
          <ShareAltOutlined />
          <span>分享</span>
        </Space>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar
            className="author-profile"
            src="https://p3-passport.byteacctimg.com/img/user-avatar/54a24fe455719e158f4ab41863399272~300x300.image"
          />
        }
        title={
          <Fragment>
            <span className="author-nickname">羽飞</span>
            <div className="author-info">风系前端｜iGuangY·5月前</div>
          </Fragment>
        }
        description={
          <div className="record-card-desc">
            <div className="card-desc-content">
              <h3 className="desc-content-title">
                你可能不知道的动态组件玩法🍉
              </h3>
              <p className="desc-content-text">
                具体是怎么玩呢？别着急，听我慢慢道来，看完后会感慨Vue组件还能这么玩🐶，还会学会一个Stylelint插件，配有DEMO，以及隐藏在最后的彩蛋。...
              </p>
            </div>
            <img
              className="card-desc-image"
              src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60eb5d7abe3f44b3ae15f3151f4082d1~tplv-k3u1fbpfcp-no-mark:240:240:240:240.awebp"
              alt="bg"
            />
          </div>
        }
      />
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)`
  margin-bottom: 10px;
  .ant-card-head {
    padding: 0 20px;
  }
  .ant-card-head-title {
    padding: 9px 0;
  }
  .record-text_bold {
    font-weight: 600;
    font-size: 15px;
    color: #17181a;
  }
  .record-text_light {
    margin: 0 5px;
    font-size: 15px;
    color: #8a9aa9;
  }
  .action-item-x {
    font-size: 13px;
    color: #8a93a0;
  }
  .author-profile {
    width: 4.5rem;
    height: 4.5rem;
  }
  .ant-card-meta-title {
    .author-nickname {
      font-weight: 600;
      font-size: 15px;
      color: #17181a;
    }
    .author-info {
      font-size: 13px;
      color: #8a9aa9;
    }
  }
  .record-card-desc {
    display: flex;
    align-items: flex-end;
    .card-desc-content {
      margin-right: 10px;
      .desc-content-title {
        font-size: 17px;
        color: #17181a;
      }
      .desc-content-text {
        font-size: 15px;
        color: #5c6066;
        line-height: 1.5;
      }
    }
    .card-desc-image {
      width: 65px;
      height: 65px;
    }
  }
`;
