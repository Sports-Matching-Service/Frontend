import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaUserAlt, FaDollarSign, FaLock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { AiFillQuestionCircle } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
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

const MoneyCard = styled(Card)`
  & div {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
  }
`;

const MyContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 40px;

  & h5 {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const MyItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 10px;
  }
  & svg {
    margin-right: 20px;
    width: 35px;
    height: 35px;
  }
  & span {
    font-size: 18px;
  }
`;

function MyPage() {
  // by 민형, User(이름, 이메일, 주소) | Review(별점, 리뷰 개수) | Money(잔액) 데이터 가져오기_221022

  //   const { isLoading: userLoaindg, data: userData } = useQuery("user", () =>
  //     axios.get(`API URL/user`)
  //   );
  //   const { isLoading: reviewLoaindg, data: reviewData } = useQuery(
  //     "review",
  //     () => axios.get(`API URL/review`)
  //   );
  //   const { isLoading: moneyLoaindg, data: moneyData } = useQuery("money", () =>
  //     axios.get(`API URL/money`)
  //   );
  //   const loading = userLoaindg || reviewLoaindg || moneyLoaindg;
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
                <span>박민형</span>
                <span>qkralswgud1324@naver.com</span>
                <span>울산 광역시 동구</span>
              </UserCard>
            </MyCard>
            <MyCard>
              <BsFillStarFill />
              <StarCard>
                <span>4.9</span>
                <div>
                  <span>리뷰</span>
                  <span>2,000</span>
                </div>
              </StarCard>
            </MyCard>
            <MyCard>
              <FaDollarSign />
              <MoneyCard>
                <div>
                  <span>보유 잔액</span>
                  <span>100,000원</span>
                </div>
              </MoneyCard>
            </MyCard>
          </MyCardContainer>
        </Col>
        <Col sm={12} md={12}>
          <MyContainer>
            <h5>나의 정보</h5>
            <MyItem>
              <RiChatHistoryFill />
              <Link to="/">
                <span>신청 내역</span>
              </Link>
            </MyItem>
            <MyItem>
              <FaLock />
              <Link to="/">
                <span>비밀 번호 변경</span>
              </Link>
            </MyItem>
            <MyItem>
              <MdRateReview />
              <Link to="/">
                <span>리뷰</span>
              </Link>
            </MyItem>
            <MyItem>
              <ImExit />
              <Link to="/">
                <span>로그아웃</span>
              </Link>
            </MyItem>
          </MyContainer>
        </Col>
        <Col sm={12} md={12}>
          <MyContainer>
            <h5>고객 센터</h5>
            <MyItem>
              <AiFillQuestionCircle />
              <Link to="/">
                <span>자주 묻는 질문</span>
              </Link>
            </MyItem>
            <MyItem>
              <HiSpeakerphone />
              <Link to="/">
                <span>공지사항</span>
              </Link>
            </MyItem>
          </MyContainer>
        </Col>
      </Row>
    </>
  );
}

export default MyPage;
