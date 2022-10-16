import styled from "styled-components";

const MATCH_DATA = [
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
  justify-content: space-between;
  align-items: center;
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
  return (
    <>
      {MATCH_DATA.map((match, idx) => (
        // 화면 사이즈 줄이면 깨짐
        <ListContainer key={idx}>
          <ListTime>{match.time}</ListTime>
          <ListStadium>{match.stadium}</ListStadium>
          <ListIntroduce>
            <span>{match.gender}</span>
            <span>{match.way}</span>
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
