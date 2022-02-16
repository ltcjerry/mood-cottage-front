import styled from "@emotion/styled";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CalendarFilled } from "@ant-design/icons";
import { RecommendItem } from "./recommend-item";
export const RecommendList = () => {
  return (
    <Wrapper>
      <SignWrapper>
        <div className="sign-greet">
          <CalendarFilled className="calendar-icon" />
          <h1 className="sign-greet-title">下午好!</h1>
          <Button type="primary" ghost shape="round">
            去签到
          </Button>
        </div>
        <p className="sign-tip">点亮你在小屋的每一天</p>
      </SignWrapper>
      <Link to={"/movie"}>
        <img
          width="240"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F004jC2Urgy1gx1lre2rvij60s415owoq02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645673496&t=1c056fc9cd8f2a189b86a66744039b60"
          alt="movie"
        />
      </Link>
      <RecommendItem />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 24rem;
  min-height: 100%;
`;

const SignWrapper = styled.div`
  height: 96px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  .sign-greet {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .calendar-icon {
      font-size: 20px;
      color: #ffcf8b;
    }
    .sign-greet-title {
      margin: 0 auto 0 16px;
    }
  }
  .sign-tip {
    text-align: center;
    color: #4e5969;
    font-size: 14px;
    margin-bottom: 2px;
  }
`;
