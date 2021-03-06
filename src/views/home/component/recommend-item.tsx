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
          title="ðï¸å³æ³¨ç¾æ"
          bordered={false}
          className="follow-list-x"
          actions={[
            <Link to={"/moreFollow"}>
              <strong className="more-btn-text">æ´å¤å³æ³¨</strong>
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
              <h3 className="list-item_title">å¿ææå¼å¸</h3>
              <p className="list-item_text">@ è´è¿äºèï¼å¤§éHC æ¬¢è¿æ¥æ©ï¼</p>
            </div>
          </div>
          <div className="recommend-list-item">
            <img
              className="profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="list-item-x">
              <h3 className="list-item_title">å¿ææå¼å¸</h3>
              <p className="list-item_text">@ è´è¿äºèï¼å¤§éHC æ¬¢è¿æ¥æ©ï¼</p>
            </div>
          </div>
          <div className="recommend-list-item">
            <img
              className="profile"
              src="https://p9-passport.byteacctimg.com/img/user-avatar/e40a6465345fa4c4d28928b95e96cdd8~300x300.image"
              alt="profile"
            />
            <div className="list-item-x">
              <h3 className="list-item_title">å¿ææå¼å¸</h3>
              <p className="list-item_text">@ è´è¿äºèï¼å¤§éHC æ¬¢è¿æ¥æ©ï¼</p>
            </div>
          </div>
        </Card>
        <Card
          size="small"
          title="ðï¸è¯è®ºç­ç¹"
          bordered={false}
          className="comment-list-x"
          actions={[
            <Link to={"/moreComment"}>
              <strong className="more-btn-text">æ´å¤è¯è®º</strong>
              <RightOutlined style={{ color: "#007fff" }} />
            </Link>,
          ]}
        >
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                è§å¯èæ¨¡å¼ vs åå¸è®¢éæ¨¡å¼ï¼åä¸ä¸è¦åæ··æ·äº
              </h3>
              <p className="list-item_text">
                è§å¯èæ¨¡å¼ååå¸è®¢éæ¨¡å¼ä½ä¸ºå¼åä¸­ç»å¸¸ä½¿ç¨å°çæ¨¡å¼ï¼å°åä¸ç´ä¸è½åå°å¾å¥½çåºåï¼åå å¤©å¨å¬å¬å¼è¯¾æ¶ï¼èå¸è¯¦ç»è®²è§£ä¸¤ç§æ¨¡å¼ï¼åç°èªå·±è¿æ¯æ²¡æåéãäºæ¯å°åæ¬æå°±éè¿å¤ä¸ªæ¡ä¾ï¼å½¢è±¡çè§£è¯»ä¸¤ç§æ¨¡å¼ï¼ä¸æ¬¡åé
              </p>
            </div>
          </div>
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                è§å¯èæ¨¡å¼ vs åå¸è®¢éæ¨¡å¼ï¼åä¸ä¸è¦åæ··æ·äº
              </h3>
              <p className="list-item_text">
                è§å¯èæ¨¡å¼ååå¸è®¢éæ¨¡å¼ä½ä¸ºå¼åä¸­ç»å¸¸ä½¿ç¨å°çæ¨¡å¼ï¼å°åä¸ç´ä¸è½åå°å¾å¥½çåºåï¼åå å¤©å¨å¬å¬å¼è¯¾æ¶ï¼èå¸è¯¦ç»è®²è§£ä¸¤ç§æ¨¡å¼ï¼åç°èªå·±è¿æ¯æ²¡æåéãäºæ¯å°åæ¬æå°±éè¿å¤ä¸ªæ¡ä¾ï¼å½¢è±¡çè§£è¯»ä¸¤ç§æ¨¡å¼ï¼ä¸æ¬¡åé
              </p>
            </div>
          </div>
          <div className="comment-list-item">
            <div className="list-item-x">
              <h3 className="list-item_title">
                è§å¯èæ¨¡å¼ vs åå¸è®¢éæ¨¡å¼ï¼åä¸ä¸è¦åæ··æ·äº
              </h3>
              <p className="list-item_text">
                è§å¯èæ¨¡å¼ååå¸è®¢éæ¨¡å¼ä½ä¸ºå¼åä¸­ç»å¸¸ä½¿ç¨å°çæ¨¡å¼ï¼å°åä¸ç´ä¸è½åå°å¾å¥½çåºåï¼åå å¤©å¨å¬å¬å¼è¯¾æ¶ï¼èå¸è¯¦ç»è®²è§£ä¸¤ç§æ¨¡å¼ï¼åç°èªå·±è¿æ¯æ²¡æåéãäºæ¯å°åæ¬æå°±éè¿å¤ä¸ªæ¡ä¾ï¼å½¢è±¡çè§£è¯»ä¸¤ç§æ¨¡å¼ï¼ä¸æ¬¡åé
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
