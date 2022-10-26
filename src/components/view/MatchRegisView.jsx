import React from "react";
import { Col, Row } from "react-bootstrap";

const MatchRegisView = () => {

    const { open_address, regis_click, back_page } = useClickEvent();
    const { address_data } = useSelector(state => state.AddressReducer);

    return(
        <>
            <Row>
                <Col sm={12} md={12}>
                    <div>
                        <div>
                            <p>1</p>
                        </div>
                        <span>경기 정보를 입력해주세요.</span>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">종목</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">모집인원</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">최소 진행인원</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">시작시간 및 종료시간</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">주소</label>
                        <input type="email" className="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">참여비</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div>
                        <div>
                            <p>2</p>
                        </div>
                        <span>경기 전달사항을 입력해주세요.</span>
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