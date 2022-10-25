import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const MyCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 40px 0;
`;

const MyCard = styled.div`
  width: 30%;
  height: 150px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;

  & svg {
    width: 30%;
    height: 110px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  width: 65%;
`;

const UserCard = styled(Card)`
  & span {
    text-align: right;
  }
  & span:nth-child(2) {
    font-size: 14px;
  }
`;

const StarCard = styled(Card)`
  text-align: center;
  & > span {
    font-size: 24px;
    font-weight: 700;
  }
  & div {
    display: flex;
    justify-content: space-evenly;
  }
`;

const ReviewContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px; ;
`;

const ReviewContainer = styled.div`
  width: 100%;
  height: 130px;
  border-top: 1px solid black;
  padding-top: 20px;
  &:last-child {
    border-bottom: 1px solid black;
  }
`;

const ReviewUser = styled.div`
  display: flex;
  margin-bottom: 15px;
  & span:first-child,
  & span:nth-child(2) {
    margin-right: 20px;
  }
`;

const ReviewContent = styled.div``;

const userData = {
  name: "박민형",
  email: "qkralswgud1324@naver.com",
  position: "울산 광역시 동구",
};

const reviewData = {
  score: 4.9,
  count: 2000,
};

const writerData = [
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-25T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-25T14:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
  {
    name: "박민형",
    position: "울산 광역시 동구",
    time: "2022-10-24T03:24:00",
    content: "친절하십니다.",
  },
];

function Review() {
  // by 민형, 시간 변환 로직_221025
  const calcTime = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  // by 민형, User(이름, 이메일, 주소) | Review(별점, 리뷰 개수) | 작성자(이름, 주소, 댓글내용, 시간) 데이터 가져오기_221025

  //   const { isLoading: userLoading, data: userData } = useQuery("user", () =>
  //     axios.get(`API URL/user`)
  //   );
  //   const { isLoading: reviewLoading, data: reviewData } = useQuery(
  //     "review",
  //     () => axios.get(`API URL/review`)
  //   );
  //   const { isLoading: writerLoading, data: writerData } = useQuery(
  //     "writer",
  //     () => axios.get(`API URL/writer`)
  //   );

  // by 민형, DB에서 받은 시간 데이터를 사용자가 알아 볼 수 있도록 변환_221025
  const timeWirteData = writerData.map((item) => {
    return {
      name: item.name,
      position: item.position,
      time: calcTime(item.time),
      content: item.content,
    };
  });

  //   const loading = userLoading || reviewLoading || writerLoading || !timeWirteData;

  return (
    <>
      {/* by 민형, 위의 모든 데이터가 로딩이 끝났을 경우 내용을 렌더링_221022 */}
      {/* {!loading ? <div>Loading...</div> : <div>밑에 내용</div>} */}
      <Row className="filter_col_wrap">
        <Col sm={12} md={12}>
          <MyCardContainer>
            <MyCard>
              <FaUserAlt />
              <UserCard>
                <span>{userData.name}</span>
                <span>{userData.email}</span>
                <span>{userData.position}</span>
              </UserCard>
            </MyCard>
            <MyCard>
              <BsFillStarFill />
              <StarCard>
                <span>{reviewData.score}</span>
                <div>
                  <span>리뷰</span>
                  <span>{reviewData.count}</span>
                </div>
              </StarCard>
            </MyCard>
          </MyCardContainer>
        </Col>
        <Col sm={12} md={12}>
          <ReviewContainers>
            {timeWirteData.map((item, idx) => (
              <ReviewContainer key={idx}>
                <ReviewUser>
                  <span>{item.name}</span>
                  <span>{item.position}</span>
                  <span>{item.time}</span>
                </ReviewUser>
                <ReviewContent>{item.content}</ReviewContent>
              </ReviewContainer>
            ))}
          </ReviewContainers>
        </Col>
      </Row>
    </>
  );
}

export default Review;
