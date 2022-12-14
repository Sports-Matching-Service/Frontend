import styled from "styled-components";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const Box = styled.div`
  width: 90px;
  height: 90px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  color: ${(props) =>
    props.fontcolor === "토"
      ? "blue"
      : props.fontcolor === "일"
      ? "red"
      : "black"};
  background-color: ${(props) => props.backcolor === "have" && "orange"};
`;

const RowButton = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  // by 민형, 모바일 시 이동 버튼 제거_221014
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const RowLeftButton = styled(RowButton)`
  left: -5%;
`;

const RowRightButton = styled(RowButton)`
  right: -5%;
`;

const Svg = styled.svg`
  height: 20px;
  width: 20px;
  fill: rgb(255, 255, 255);
`;

const DAY_INTRODUCE = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
let date = today.getDate();
let day = today.getDay();
const dayNumberData = Array(14).fill();
dayNumberData.forEach((item, index) => {
  dayNumberData[index] = date;
  date = date === 31 ? 1 : date + 1;
});
const dayData = Array(14).fill();
dayData.forEach((item, index) => {
  dayData[index] = day;
  day = day === 6 ? 0 : day + 1;
});

function Slider() {
  const swiperRef = useRef(null);
  const [selectBox, setSelectBox] = useState(0);
  const clickedBox = (currentIdx) => {
    setSelectBox(currentIdx);
  };

  return (
    <SliderContainer>
      <Swiper ref={swiperRef}>
        <SwiperSlide>
          <Row>
            {dayData.slice(0, 7).map((item, idx) => (
              <Box
                key={item}
                fontcolor={DAY_INTRODUCE[item]}
                backcolor={selectBox === idx ? "have" : "not have"}
                onClick={() => clickedBox(idx)}
              >
                <span>{DAY_INTRODUCE[item]}</span>
                <span>{dayNumberData[idx]}</span>
              </Box>
            ))}
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row>
            {dayData.slice(7, 14).map((item, idx) => (
              <Box
                key={item}
                fontcolor={DAY_INTRODUCE[item]}
                backcolor={selectBox === idx + 7 ? "have" : "not have"}
                onClick={() => clickedBox(idx + 7)}
              >
                <span>{DAY_INTRODUCE[item]}</span>
                <span>{dayNumberData[idx + 7]}</span>
              </Box>
            ))}
          </Row>
        </SwiperSlide>
      </Swiper>

      {/* by 민형_위치 관련 논의_221014 */}
      <RowLeftButton onClick={() => swiperRef.current.swiper.slidePrev()}>
        <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22165154,9.89744874 C9.52208535,7.58981934 11.7700755,5.33826192 13.9656219,3.14277649 C14.1209717,2.97988892 14.2765198,2.59362793 13.9656219,2.24739075 C13.6547241,1.90115356 13.1625366,1.93119812 12.9394989,2.16644287 C10.6628164,4.4490153 8.2816569,6.83439128 5.79602051,9.3225708 C5.5986735,9.48506673 5.5,9.67669271 5.5,9.89744874 C5.5,10.1182048 5.5986735,10.315327 5.79602051,10.4888153 C8.60631704,13.2334646 11.1006865,15.6689637 13.2791289,17.7953128 C13.4962463,18 13.9656219,18.1251984 14.3231659,17.7660828 C14.6807098,17.4069672 14.5432434,17.0530853 14.3809204,16.8845825 C12.3062744,14.866628 9.91985146,12.5375834 7.22165154,9.89744874 Z" />
        </Svg>
      </RowLeftButton>

      <RowRightButton onClick={() => swiperRef.current.swiper.slideNext()}>
        <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.05307007,2.15808105 L14.2962587,9.41418482 C14.4320862,9.5496827 14.5,9.71077067 14.5,9.89744874 C14.5,10.0841268 14.4320862,10.2497803 14.2962587,10.3944092 C11.6760845,12.9498393 9.15095523,15.4168071 6.72087106,17.7953128 C6.5962677,17.912323 6.09560574,18.2032928 5.70989407,17.7705688 C5.3241824,17.3378448 5.55848694,16.9602509 5.70989407,16.8045692 C7.97174895,14.594209 10.3279004,12.2918355 12.7783485,9.89744874 L6.03100586,3.13816833 C5.78524099,2.79925826 5.80526899,2.48632792 6.09108986,2.19937732 C6.37691073,1.91242672 6.6975708,1.8986613 7.05307007,2.15808105 Z" />
        </Svg>
      </RowRightButton>
    </SliderContainer>
  );
}

export default Slider;
