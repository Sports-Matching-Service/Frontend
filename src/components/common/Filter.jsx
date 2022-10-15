import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SelectContainers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

const SelectBar = styled.div`
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  color: black;
  padding: 12px 18px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  order: 0;
`;

const Svg = styled.svg`
  height: 100%;
  width: 32px;
`;

const SelectList = styled.div`
  background: white;
  color: black;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;

  order: 1;

  display: ${(props) => (props.display ? "block" : "none")};
  max-height: ${(props) => (props.display ? "240px" : 0)};
  opacity: ${(props) => (props.display ? 1 : 0)};
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  } 
`;

const Item = styled.div`
  padding: 12px 18px;
  cursor: pointer;

  & input {
    display: none;
  }

  & label {
    cursor: pointer;
  }

  &:hover {
    background: #414b57;
  }
`;

const SPORT_DATA = [
  [
    "서울",
    "경기/강원",
    "인천",
    "대전/세종/충청",
    "대구/경북",
    "부산/울산/경남",
    "광주/전라",
    "제주",
  ],
  ["풋살", "농구", "탁구"],
  [5000, 10000, 15000, 20000],
];

function Filter() {
  const [selectbar, setSelectBar] = useState([false, false, false]);
  const [selectBarText, setSelectBarText] = useState(["지역", "종목", "비용"]);

  const selectItem = async (index, event) => {
    // by 민형_item 클릭 시 bar의 tex 변경_221015
    const selectItem = event.currentTarget.children[1].innerHTML;
    const newSelectList = selectBarText.map((item, idx) => {
      return index === idx ? selectItem : item;
    });
    setSelectBarText(newSelectList);

    // by 민형_item 클릭 시 리스트 닫힘_221015
    setSelectBar([false, false, false]);

    // by 민형_필터링 시 get으로 요청 후 데이터 받아서 render_221015

    // const regionString =
    //   newSelectList[0] === "지역" ? undefined : newSelectList[0];
    // const matchString =
    //   newSelectList[1] === "종목" ? undefined : newSelectList[1];
    // const costString =
    //   newSelectList[2] === "비용" ? undefined : newSelectList[2];

    // console.log(
    //   `API/match?region=${regionString}&sport=${matchString}&cost=${costString}`
    // );

    // await axios
    //   .get(
    //      `API/match?region=${regionString}&sport=${matchString}&cost=${costString}`
    //   )
    //   .then((response) => {});
  };

  const selectClick = (index) => {
    // by 민형_bar 클릭 여부에 따라 리스트 열리거나 닫힘_221015
    const newSelectBar = selectbar.map((item, idx) => {
      return index === idx ? !item : false;
    });
    setSelectBar(newSelectBar);
  };

  return (
    <SelectContainers>
      {SPORT_DATA.map((section, idx) => (
        <SelectContainer key={idx}>
          <SelectList display={selectbar[idx]}>
            {section.map((item) => (
              <Item key={item} onClick={(e) => selectItem(idx, e)}>
                <input type="radio" />
                <label htmlFor={item}>{item}</label>
              </Item>
            ))}
          </SelectList>

          <SelectBar onClick={() => selectClick(idx)}>
            {selectBarText[idx]}
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
              />
              <path fill="none" d="M0 0h24v24H0V0z" />
            </Svg>
          </SelectBar>
        </SelectContainer>
      ))}
    </SelectContainers>
  );
}

export default Filter;
