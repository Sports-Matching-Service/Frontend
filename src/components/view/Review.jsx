import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { calcTime } from "../../js/calcTime";
import { divdePageGroup } from "../../js/divdePageGroup";
import {
  BiArrowFromRight,
  BiArrowFromLeft,
  BiRightArrowAlt,
  BiLeftArrowAlt,
} from "react-icons/bi";
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

const PagingContainer = styled.div`
  width: 40%;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props["aria-current"] === "page" && "yellow"};
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border: none;
  border-radius: 50%;
  transition: all 0.5s ease;

  &:hover {
    background-color: orange;
  }
`;

const LIMIT = 5;
const writerData = [
  [
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
  ],

  [
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
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
  ],

  [
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "메시",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "손흥민",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "조르지뉴",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],

  [
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-25T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-25T14:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
    {
      name: "김민재",
      position: "울산 광역시 동구",
      time: "2022-10-24T03:24:00",
      content: "친절하십니다.",
    },
  ],
];

const userData = {
  name: "박민형",
  email: "qkralswgud1324@naver.com",
  position: "울산 광역시 동구",
};

const reviewData = {
  score: 4.9,
  count: 2000,
};

function Review() {
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

  const [page, setPage] = useState(1);
  // by 민형, DB에서 받은 시간 데이터를 사용자가 알아 볼 수 있도록 변환_221025
  const timeWirteData = writerData[page - 1].map((item) => {
    return {
      name: item.name,
      position: item.position,
      time: calcTime(item.time),
      content: item.content,
    };
  });

  // by 민형, 여기 밑에 부터 Paging 소스코드_221027

  // by 민형, 나중에 백엔드에서 데이터 받아와서 사용할 코드들_221027
  // Math.ceil(groundList.length / listPerPage);
  // const listPerPage = 8;

  const [matchList, setMatchList] = useState([]);
  const totalPage = writerData.length;

  // by 민형, 특정 페이지 그룹 배열을 가지고 있음([1,2,3,4,5], [6,7,8,9,10])_221026
  const [currentPageGroup, setCurrentPageGroup] = useState([]);
  // by 민형, 모든 페이지 그룹을 가지고 있음_221026
  const [totalPageGroup, setTotalPageGroup] = useState([]);

  // by 민형, 페이지 단위로 back에서 데이터를 받아오는 소스코드_221027
  useEffect(() => {
    (async () => {
      // const result = await Api.get(
      //   `grounds?location=${location}&search=${searchInput}&offset=${
      //     (page - 1) * listPerPage
      //   }&count=${listPerPage}`
      // );
      // console.log(DATA[page - 1]);
      // console.log(...DATA[page - 1]);
      setMatchList(writerData[page - 1]);

      // setMatchList({
      //   length: result.data.length,
      //   data: result.data.grounds,
      // });
    })();
  }, [page]);

  useEffect(() => {
    // by 민형, 페이지 그룹의 시작 page 라면_221027
    if (page % LIMIT === 1) {
      // by 민형, 여러개의 페이지 그룹에서 조건에 부합한 페이지 그룹 선택해서 state 변경_2210626
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT)]);
    }
    // by 민형, 페이지 그룹의 마지막 page 라면_221027
    else if (page % LIMIT === 0) {
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT) - 1]);
    } else if (page === totalPage) {
      setCurrentPageGroup(totalPageGroup[Math.floor(page / LIMIT)]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageGroup = divdePageGroup(totalPage, LIMIT);
    setTotalPageGroup(slicedPageGroup);
    // by 민형, 각 페이지그룹의 마지막페이지는 그냥 LIMIT으로 나눠주면 다음 페이지 그룹이 렌더링 된다_221026
    // 5 / 5 = 1 이므로 2번 페이지 그룹 렌더링(0이 1번 그룹이므로)
    // 10 / 5 = 2 이므로 3번 페이지 그룹 렌더링 되므로 각 그룹의 마지막 페이지는 -1을 한후 나누기
    const targetGroupNumber =
      page % LIMIT !== 0
        ? Math.floor(page / LIMIT)
        : Math.floor((page - 1) / LIMIT);
    setCurrentPageGroup(slicedPageGroup[targetGroupNumber]);
  }, [totalPage]);

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
      <Col sm={12} md={12}>
        <PagingContainer>
          <BiArrowFromRight onClick={() => setPage(1)} />
          <BiLeftArrowAlt
            onClick={page !== 1 ? () => setPage(page - 1) : null}
          />

          <div>
            {currentPageGroup?.map((i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          <BiRightArrowAlt
            onClick={page !== totalPage ? () => setPage(page + 1) : null}
          />
          <BiArrowFromLeft onClick={() => setPage(totalPage)} />
        </PagingContainer>
      </Col>
    </>
  );
}

export default Review;
