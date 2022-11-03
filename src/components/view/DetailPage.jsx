import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import '../../style/scss/detail.scss';
import { GiSoccerBall } from 'react-icons/gi'
import { GiHumanPyramid } from 'react-icons/gi'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { VscPerson } from "react-icons/vsc";
import Map from '../common/Map';

const DetailPage = () => {
    return(
        <>
            <Row className="detail_row">
                <Col sm={12} md={5}>
                    <div className="detail_infor">
                        <div className="detail_wrap">
                            <h4>경기정보</h4>
                            <div>
                                <GiSoccerBall/><p>축구</p>
                                <GiHumanPyramid/><p>모집 인원</p>
                            </div>
                            <div>
                                <RiMoneyDollarCircleFill/><p>5,000원</p>
                                <VscPerson/><p>최소 인원</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={7}>
                    <div className="detail_time">
                        <div className="time_wrap">
                            <p>2022년 11월 2일 수요일</p>
                            <p>10:00 ~ 12:00</p>
                            <p>서울특별시 강남구 롯데몰B구장</p>
                            <div>
                                <p>서울 은평구 통일로 1050</p><p>주소복사</p>
                            </div>
                            <div className="detail_btn_wrap">
                                <button class="btn btn-dark">호스트와 문의하고 싶으신가요?</button>
                                <button class="btn btn-success">리뷰하기</button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={9}>
                    <div className="send_wrap">
                        <h4>전달사항</h4>
                        <div className="send_box">
                            <label>
                                <p>매치 규칙</p>
                                <p>모든 파울은 사이드라인에서 킥인</p>
                                <p>골키퍼에게 백패스 가능, 손으로 잡기는 불가능</p>
                                <p>사람을 향한 태클 금지</p>
                            </label>
                            <label>
                                <p>진행 방식</p>
                                <p>축구화와 개인 음료만 준비해주세요.</p>
                                <p>친구끼리와도 팀 실력이 맞지 않으면 다른 팀이 될 수 있어요.</p>
                            </label>
                            <label>
                                <p>기타</p>
                                <p>만나서 즐거운 게임해요.</p>
                            </label>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <Map />
                </Col>
            </Row>
        </>
    )
}

export default DetailPage;