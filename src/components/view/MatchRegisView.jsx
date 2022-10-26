import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import '../../style/scss/regisMatch.scss';
import { useClickEvent } from "../../customHooks/useClickHooks";
import { useSelector } from "react-redux";

// =====================================================
// [P] 경기등록 페이지 by 2022-10-25 huiwon
// =====================================================

const MatchRegisView = () => {

    const { open_address, regis_click, back_page } = useClickEvent();
    const { address_data } = useSelector(state => state.AddressReducer);

    return(
        <>
            <Row>
                <Col sm={12} md={12}>
                    <div className="first_wrap">
                        <div>
                            <p>1</p>
                        </div>
                        <p className="infor_match">경기 정보를 입력해주세요.</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3 common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">종목</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>종목 선택하기</option>
                            <option value="풋살">풋살</option>
                            <option value="축구">축구</option>
                            <option value="농구">농구</option>
                            <option value="야구">야구</option>
                        </select>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3 common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">모집인원</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="모집인원을 입력해주세요" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3 common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">최소 진행인원</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="최소 진행 인원을 입력해주세요" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">시작시간 및 종료시간</label>
                    </div>
                    <div className="mb-3 time_wrap">
                        <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <span>-</span>
                        <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3 common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">주소</label>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" value={address_data} readOnly />
                          <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={()=>{ open_address() } }
                          >주소검색</button>
                        </div>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="상세주소를 입력해주세요" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3 common">
                        <label htmlFor="exampleFormControlInput1" className="form-label">참여비</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="참여비를 입력해주세요" />
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="second_wrap">
                        <div>
                            <p>2</p>
                        </div>
                        <p className="infor_match">경기 전달사항을 입력해주세요.</p>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div class="mb-3 textarea_wrap">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end regis_btn_wrap">
                        <button class="btn btn-success me-md-2" type="button"
                            onClick={()=>{ regis_click() }}
                        >등록하기</button>
                        <button class="btn btn-secondary" type="button"
                            onClick={()=>{ back_page() }}
                        >취소하기</button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default MatchRegisView;