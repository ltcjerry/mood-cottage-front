import { Card, Affix } from "antd";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
export const RecommendItem = () => {
  return (
    <Affix offsetTop={57}>
      <ListWrapper>
        <Card
          key={"recommend"}
          size="small"
          title="🎖️关注美文"
          bordered={false}
          className="follow-list-x"
          actions={[
            <Link to={"/moreFollow"}>
              <strong className="more-btn-text">更多关注</strong>
              <RightOutlined style={{ color: "#007fff" }} />
            </Link>,
          ]}
        >
          <div className="recommend-list-item">
            <img
              className="profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="list-item-x">
              <h3 className="list-item_title">心态戏弄师</h3>
              <p className="list-item_text">@ 致远互联（大量HC 欢迎来撩）</p>
            </div>
          </div>
          <div className="recommend-list-item">
            <img
              className="profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="list-item-x">
              <h3 className="list-item_title">心态戏弄师</h3>
              <p className="list-item_text">@ 致远互联（大量HC 欢迎来撩）</p>
            </div>
          </div>
          <div className="recommend-list-item">
            <img
              className="profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="list-item-x">
              <h3 className="list-item_title">心态戏弄师</h3>
              <p className="list-item_text">@ 致远互联（大量HC 欢迎来撩）</p>
            </div>
          </div>
        </Card>
        <Card
          size="small"
          title="🎖️评论热点"
          bordered={false}
          className="comment-list-x"
          actions={[
            <Link to={"/moreComment"}>
              <strong className="more-btn-text">更多评论</strong>
              <RightOutlined style={{ color: "#007fff" }} />
            </Link>,
          ]}
        >
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                观察者模式 vs 发布订阅模式，千万不要再混淆了
              </h3>
              <p className="list-item_text">
                观察者模式和发布订阅模式作为开发中经常使用到的模式，小包一直不能做到很好的区分，前几天在听公开课时，老师详细讲解两种模式，发现自己还是没有吃透。于是小包本文就通过多个案例，形象的解读两种模式，一次吃透
              </p>
            </div>
          </div>
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                观察者模式 vs 发布订阅模式，千万不要再混淆了
              </h3>
              <p className="list-item_text">
                观察者模式和发布订阅模式作为开发中经常使用到的模式，小包一直不能做到很好的区分，前几天在听公开课时，老师详细讲解两种模式，发现自己还是没有吃透。于是小包本文就通过多个案例，形象的解读两种模式，一次吃透
              </p>
            </div>
          </div>
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                观察者模式 vs 发布订阅模式，千万不要再混淆了
              </h3>
              <p className="list-item_text">
                观察者模式和发布订阅模式作为开发中经常使用到的模式，小包一直不能做到很好的区分，前几天在听公开课时，老师详细讲解两种模式，发现自己还是没有吃透。于是小包本文就通过多个案例，形象的解读两种模式，一次吃透
              </p>
            </div>
          </div>
        </Card>
      </ListWrapper>
    </Affix>
  );
};

const ListWrapper = styled.section`
  .follow-list-x,
  .comment-list-x {
    margin-top: 1.3rem;
    .more-btn-text {
      color: #007fff;
      margin-right: 4px;
    }
    .recommend-list-item,
    .comment-list-item {
      display: flex;
      padding: 1rem;
      align-items: center;
      .list-item-x {
        max-width: 100%;
      }
      .profile {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        margin-right: 1rem;
      }
      .list-item_title {
        max-width: 15rem;
        margin-bottom: 3px;
        color: #333;
        font-size: 1.4rem;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .list-item_text {
        max-width: 15rem;
        margin: 0;
        color: #909090;
        font-size: 1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .comment-list-x {
    .comment-list-item .list-item_title,
    .comment-list-item .list-item_text {
      max-width: 180rem;
    }
  }
`;
