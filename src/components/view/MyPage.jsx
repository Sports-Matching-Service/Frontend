import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { MdRateReview, MdOutlineSportsKabaddi } from "react-icons/md";
import { AiFillQuestionCircle, AiTwotoneCalendar } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { GrCircleInformation } from "react-icons/gr";
import { myPageRender } from "../../js/myPageRender";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  margin: 30px 0 50px 0;
`;

const LeftContainerButton = styled.div`
  box-shadow: 1px 1px 2px gray;

  & div {
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
  }

  & div svg {
    padding: 0 15px 0 0;
    width: 25%;
    height: 30px;
  }
`;

const LeftContainerCommon = styled.div`
  width: 100%;
  box-shadow: 2px 2px 2px gray, 0px 0px 2px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  & h5 {
    margin: 0 0 20px 20px;
  }
`;

const MyContainer = styled(LeftContainerCommon)`
  margin-bottom: 20px;

  & ${LeftContainerButton}:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
  }

  & ${LeftContainerButton}:nth-child(2) svg {
    margin-bottom: 15px;
    width: 50%;
    height: 50px;
  }

  & ${LeftContainerButton}:nth-child(2) span {
    margin-bottom: 5px;
    font-size: 14px;
  }

  & ${LeftContainerButton}:nth-child(6) {
    display: flex;
    flex-direction: column;
  }

  & ${LeftContainerButton}:nth-child(6) > span {
    margin: 0 0 10px 35px;
    font-size: 14px;
    cursor: pointer;
  }
`;

const ServiceContainer = styled(LeftContainerCommon)``;

const RightContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 25px;
  margin-top: 30px;
`;

const MyCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const MyCard = styled.div`
  width: 27.5%;
  height: 120px;
  padding: 10px 25px;
  box-shadow: 2px 2px 2px gray, 0px 0px 2px gray;
  border-radius: 5px;

  & div:first-child {
    font-size: 18px;
    margin-bottom: 20px;
  }

  & div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & div:last-child svg {
    width: 15%;
    height: 50px;
  }

  & div:last-child span {
    font-size: 26px;
  }
`;

const MyRenderContainer = styled.div``;

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

  const [page, setPage] = useState("신청");

  return (
    <>
      {/* by 민형, 위의 모든 데이터가 로딩이 끝났을 경우 내용을 렌더링_221022 */}
      {/* {!loading ? <div>Loading...</div> : <div>밑에 내용</div>} */}
      <Row className="filter_col_wrap">
        <LeftContainer>
          <MyContainer>
            <h5>나의 정보</h5>
            <LeftContainerButton>
              <FaUserAlt />
              <span>박민형</span>
              <span>qkralswgud1324@naver.com</span>
              <span>울산시 동구</span>
            </LeftContainerButton>
            <LeftContainerButton>
              <div>
                <BiTimeFive />
                <span onClick={() => setPage("신청")}>신청 내역</span>
              </div>
            </LeftContainerButton>
            <LeftContainerButton>
              <div>
                <GrCircleInformation />
                <span onClick={() => setPage("내 정보")}>내 정보 변경</span>
              </div>
            </LeftContainerButton>
            <LeftContainerButton>
              <div>
                <FaLock />
                <span onClick={() => setPage("비밀번호")}>비밀번호 변경</span>
              </div>
            </LeftContainerButton>
            <LeftContainerButton>
              <div>
                <MdRateReview />
                <span onClick={() => setPage("리뷰")}>리뷰</span>
              </div>
              <span onClick={() => setPage("게스트")}>게스트 평가</span>
              <span onClick={() => setPage("호스트")}>호스트 평가</span>
              <span onClick={() => setPage("내 리뷰")}>내 리뷰 확인하기</span>
            </LeftContainerButton>
          </MyContainer>

          <ServiceContainer>
            <h5>고객 센터</h5>
            <LeftContainerButton>
              <div>
                <AiFillQuestionCircle />
                <span onClick={() => setPage("질문")}>자주 묻는 질문</span>
              </div>
            </LeftContainerButton>
            <LeftContainerButton>
              <div>
                <HiSpeakerphone />
                <span onClick={() => setPage("공지사항")}>공지사항</span>
              </div>
            </LeftContainerButton>
          </ServiceContainer>
        </LeftContainer>

        <RightContainer>
          <MyCardContainer>
            <MyCard>
              <div>유저 점수</div>
              <div>
                <BsFillStarFill />
                <span>4.5</span>
              </div>
            </MyCard>
            <MyCard>
              <div>참여한 매치</div>
              <div>
                <MdOutlineSportsKabaddi />
                <span>10</span>
              </div>
            </MyCard>
            <MyCard>
              <div>내가 만든 매치</div>
              <div>
                <AiTwotoneCalendar />
                <span>5</span>
              </div>
            </MyCard>
          </MyCardContainer>

          <MyRenderContainer>{myPageRender(page)}</MyRenderContainer>
        </RightContainer>
      </Row>
    </>
  );
}

export default MyPage;
