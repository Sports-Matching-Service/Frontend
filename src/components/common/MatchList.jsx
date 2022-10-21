import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const MATCH_DATA = [
  [
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "# 남성",
      way: "# 3파전",
      number: "# 6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감 임박",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "10:00 ~ 12:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
  ],
  [
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "# 남성",
      way: "# 3파전",
      number: "# 6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감 임박",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
  ],
  [
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "# 남성",
      way: "# 3파전",
      number: "# 6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감 임박",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
  ],
  [
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "# 남성",
      way: "# 3파전",
      number: "# 6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감 임박",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "마감",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
    {
      time: "18:00 ~ 20:00",
      stadium: "안양시 양천동 FC 풋볼장",
      gender: "남성",
      way: "3파전",
      number: "6 vs 6",
      status: "모집 중",
    },
  ],
];

const ListContainer = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 10px;
  border: 2px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  margin-bottom: 25px;
  box-shadow: 5px 5px 5px gray;
`;

const ListTime = styled.div`
  width: 25%;
  font-size: 20px;
`;

const ListStadium = styled.div`
  width: 33%;
`;

const ListIntroduce = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  & span:first-child {
    margin-right: 30px;
  }
`;

const ListStatus = styled.div`
  width: 18%;
  display: flex;
  justify-content: flex-end;
`;

const ListStatusBtn = styled.div`
  background-color: ${(props) =>
    props.btncolor === 0 ? "green" : props.btncolor === 1 ? "red" : "gray"};
  pointer-events: ${(props) => props.btncolor === 2 && "none"};
  cursor: pointer;
  width: 85px;
  height: 40px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MatchList() {
  const [matchList, setMatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [lastRef, lastInView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수
  const getMatchList = useCallback(async () => {
    setLoading(true);
    // by 민형, API를 통해 데이터를 가지고 올 경우_221021
    // await axios.get(`APIURL/matchlist/page=${page}`).then((res) => {
    //   setMatchList((prev) => {
    //     return prev.length < page * 11
    //       ? [...prev, ...MATCH_DATA[page - 1]]
    //       : [...prev];
    //   });
    // })
    setMatchList((prev) => {
      return prev.length < page * 11
        ? [...prev, ...MATCH_DATA[page - 1]]
        : [...prev];
    });
    setLoading(false);
  }, [page]);

  // `getMatchList` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getMatchList();
  }, [getMatchList]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (lastInView && !loading) {
      if (page + 1 > MATCH_DATA.length) {
        return;
      }
      setPage((prevState) => prevState + 1);
    }
  }, [lastInView, loading]);

  return (
    <>
      {matchList.map((match, idx) => (
        <ListContainer
          key={idx}
          ref={matchList.length - 1 === idx ? lastRef : undefined}
        >
          <ListTime>{match.time}</ListTime>
          <ListStadium>{match.stadium}</ListStadium>
          <ListIntroduce>
            <span>{match.gender}</span>
            <span>{match.number}</span>
          </ListIntroduce>
          <ListStatus>
            <ListStatusBtn
              btncolor={
                match.status === "모집 중"
                  ? 0
                  : match.status === "마감 임박"
                  ? 1
                  : 2
              }
            >
              {match.status}
            </ListStatusBtn>
          </ListStatus>
        </ListContainer>
      ))}
    </>
  );
}

export default MatchList;
