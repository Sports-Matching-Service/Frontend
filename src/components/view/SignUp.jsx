import React from "react";
import '../../style/scss/signup.scss';
import { useForm } from "react-hook-form";

const SignUp = () => {

    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm();

    const onSubmit = async (data) => {
        await new Promise((res)=> setTimeout(res, 1000));
        alert(JSON.stringify(data))
    }

    return(
        <>
            <div className="bg_wrap"></div>
            <div className="signup_wrap">
                <div className="signup_box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">이름</label>
                            <input
                              id="name"
                              className="form-control"
                              type="text"
                              placeholder="이름을 입력해주세요."
                              aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
                              {...register("name", {
                                required : "이름은 필수 입력입니다."
                              })}
                            />
                            {errors.name && <small role="alert">{errors.name.message}</small>}
                        </div>
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
                            <label htmlFor="email" className="form-label">이메일 인증</label>
                            <div class="input-group">
                                <input
                                  id="email_check"
                                  className="form-control"
                                  type="text"
                                  placeholder="인증번호를 입력해주세요."
                                  aria-invalid={!isDirty ? undefined : errors.email_check ? "true" : "false"}
                                  {...register("email_check", {
                                    required : "이메일 인증은 필수 입력입니다."
                                  })}
                                />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">인증번호 받기</button>
                            </div>
                            {errors.email_check && <small role="alert">{errors.email_check.message}</small>}
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
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">비밀번호 확인</label>
                            <input
                              id="password"
                              className="form-control"
                              type="password"
                              placeholder="비밀번호를 입력해주세요."
                              aria-invalid={!isDirty ? undefined : errors.password_check ? "true" : "false"}
                              {...register("password_check", {
                                required : "비밀번호 확인은 필수 입력입니다.",
                                minLength: {
                                    value: 8,
                                    message: "8자리 이상 비밀번호를 사용하세요.",
                                  }
                              })}
                            />
                            {errors.password_check && <small role="alert">{errors.password_check.message}</small>}
                        </div>
                        <div className="mb-3 modal_btn_wrap">
                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>회원가입하기</button>
                        </div>
                        <hr />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;