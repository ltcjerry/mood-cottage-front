import styled from "@emotion/styled";
import { Affix, Card } from "antd";
import { ReactComponent as ExcellentIcon } from "assets/svg/record_1.svg";
import { ReactComponent as ShareIcon } from "assets/svg/record_2.svg";
import { ReactComponent as StarIcon } from "assets/svg/record_3.svg";
import { ReactComponent as ReadIcon } from "assets/svg/record_4.svg";
// import { useState } from "react"

export const AllRecord = () => {
  // const [record, setRecord] = useState(null)
  return (
    <Affix offsetTop={60}>
      <Wrapper>
        <Card
          title={"个人成就"}
          bordered={false}
          bodyStyle={{ padding: "15px" }}
          headStyle={{ padding: "0px 15px" }}
        >
          <ul className="record-list-x">
            <li className="record-list-item">
              <ExcellentIcon className="record-icon" />
              <strong>优秀创作者</strong>
            </li>
            <li className="record-list-item">
              <ShareIcon className="record-icon" />
              <strong>文章被点赞11</strong>
            </li>
            <li className="record-list-item">
              <ReadIcon className="record-icon" />
              <strong>文章被阅读1,557</strong>
            </li>
            <li className="record-list-item">
              <StarIcon className="record-icon" />
              <strong>星力值26</strong>
            </li>
          </ul>
        </Card>
        <ul className="follow-statistic-x">
          <li className="statistic-item-x">
            <h3 className="statistic-item_title">关注了</h3>
            <span className="statistic-item_count">3</span>
          </li>
          <li className="statistic-item-x">
            <h3 className="statistic-item_title">关注者</h3>
            <span className="statistic-item_count">2</span>
          </li>
        </ul>
        <ul className="other-statistic-x">
          <li className="statistic-item-x">
            <h3 className="statistic-item_title">收藏集</h3>
            <span className="statistic-item_count">0</span>
          </li>
          <li className="statistic-item-x">
            <h3 className="statistic-item_title">关注标签</h3>
            <span className="statistic-item_count">2</span>
          </li>
          <li className="statistic-item-x">
            <h3 className="statistic-item_title">创立于</h3>
            <span className="statistic-item_count">2022-01-01</span>
          </li>
        </ul>
      </Wrapper>
    </Affix>
  );
};

const Wrapper = styled.aside`
  width: 24rem;
  min-height: 100%;
  .ant-card-head-title {
    padding: 13px 0;
  }
  .record-list-x {
    margin: 0;
    .record-list-item {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      height: 4rem;
    }
    .record-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
  }
  .follow-statistic-x {
    position: relative;
    display: flex;
    margin: 1.5rem 0;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1px;
      height: 50%;
      background-color: #f3f3f4;
      transform: translate(-50%, -50%);
    }
    .statistic-item-x {
      flex: 1;
      padding: 1.3rem 0;
      text-align: center;
      .statistic-item_title {
        font-size: 1.6rem;
        font-weight: 500;
        margin: 0;
      }
      .statistic-item_count {
        margin-top: 0.5rem;
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
  }

  .other-statistic-x {
    border-radius: 2px;
    .statistic-item-x {
      display: flex;
      padding: 1.1rem 0.5rem;
      align-items: center;
      justify-content: space-between;
      &:first-of-type {
        border-top: 1px solid rgba(230, 230, 231, 0.5);
        border-bottom: 1px solid rgba(230, 230, 231, 0.5);
      }
      + .statistic-item-x {
        border-bottom: 1px solid rgba(230, 230, 231, 0.5);
      }
      .statistic-item_title {
        margin: 0;
        font-weight: normal;
        font-size: 1.6rem;
      }
      .statistic-item_count {
        color: #000;
        font-size: 1.6rem;
      }
    }
  }
`;
