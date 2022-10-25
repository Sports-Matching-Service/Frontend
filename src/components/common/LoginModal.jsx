import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useClickEvent } from "../../customHooks/useClickHooks";
import { useForm } from "react-hook-form";

// =====================================================
// [C] 로그인 모달 by huiwon
// =====================================================

const LoginModal = () => {

    const { modal_state } = useSelector(state => state.ModalReducer);
    const { close_modal, move_page } = useClickEvent();
    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm();

    const onSubmit = async (data) => {
        await new Promise((res)=> setTimeout(res, 1000));
        alert(JSON.stringify(data))
    }

    return(
        <>
            <Modal show={modal_state} onHide={close_modal}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Sports-Matching-Service</h4>
                    <h4>게스트와 호스트를<br />위한 스포츠 매칭 서비스</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">이메일</label>
                            <input
                              id="email"
                              className="form-control"
                              type="email"
                              placeholder="이메일을 입력해주세요."
                              aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                              {...register("email", {
                                required : "이메일은 필수 입력입니다.",
                                pattern : {
                                    value : /\S+@\S+\.\S+/,
                                    message : "이메일 형식에 맞지 않습니다."
                                }
                              })}
                            />
                            {errors.email && <small role="alert">{errors.email.message}</small>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">비밀번호</label>
                            <input
                              id="password"
                              className="form-control"
                              type="password"
                              placeholder="비밀번호를 입력해주세요."
                              aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                              {...register("password", {
                                required : "비밀번호는 필수 입력입니다.",
                                minLength: {
                                    value: 8,
                                    message: "8자리 이상 비밀번호를 사용하세요.",
                                  }
                              })}
                            />
                            {errors.password && <small role="alert">{errors.password.message}</small>}
                        </div>
                        <div className="mb-3 modal_btn_wrap">
                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>로그인</button>
                            <button className="btn btn-success" onClick={()=>{
                                close_modal()
                                move_page('signup') 
                            }}>회원가입</button>
                        </div>
                        <hr />
                    </form>
                    <div className="social_div">
                        <p>SNS 로그인</p>
                        <div className="mb-3 modal_social_wrap">
                            <button className="mb-2 btn btn-warning">카카오로 로그인하기</button>
                            <button className="btn btn-light">네이버로 로그인하기</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginModal;