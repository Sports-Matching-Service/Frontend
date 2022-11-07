import { useForm } from "react-hook-form";

function PasswordUpdate() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data) => {
    // by 민형, 기존의 비밀번호를 잘못 입력하였을 경우_221107
    if (data.currentpassword !== "12345678") {
      setError(
        "currentpassword",
        { message: "비밀번호를 정확하게 입력해주세요." },
        { shouldFocus: true }
      );
    } else if (data.newpassword === data.currentpassword) {
      setError(
        "newpassword",
        { message: "새 비밀번호로 기존 비밀번호를 사용할 수 없습니다." },
        { shouldFocus: true }
      );
    } else if (data.newpassword !== data.newpassword_check) {
      setError(
        "newpassword_check",
        { message: "입력한 두 비밀번호가 동일하지 않습니다." },
        { shouldFocus: true }
      );
    }

    // by 민형, 모든 유효성 검사를 만족하면 서버에 비밀번호 수정 요청(PUT)_221107
    console.log("good!");
  };

  return (
    <>
      <div className="signup_box">
        <h4>비밀 번호 변경</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="currentpassword" className="form-label">
              현재 비밀번호
            </label>
            <input
              id="currentpassword"
              className="form-control"
              type="password"
              placeholder="현재 비밀번호를 입력해 주세요."
              aria-invalid={
                !isDirty ? undefined : errors.currentpassword ? "true" : "false"
              }
              {...register("currentpassword", {
                required: "기존 비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요.",
                },
              })}
            />
            {errors.currentpassword && (
              <small role="alert">{errors.currentpassword.message}</small>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="newpassword" className="form-label">
              새 비밀번호
            </label>
            <input
              id="newpassword"
              className="form-control"
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              aria-invalid={
                !isDirty ? undefined : errors.newpassword ? "true" : "false"
              }
              {...register("newpassword", {
                required: "새 비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요.",
                },
              })}
            />
            {errors.newpassword && (
              <small role="alert">{errors.newpassword.message}</small>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmnewpassword" className="form-label">
              새 비밀번호를 확인
            </label>
            <input
              id="confirmnewpassword"
              className="form-control"
              type="password"
              placeholder="새 비밀번호를 한번 더 입력해주세요."
              aria-invalid={
                !isDirty
                  ? undefined
                  : errors.newpassword_check
                  ? "true"
                  : "false"
              }
              {...register("newpassword_check", {
                required: "수정할 비밀번호 확인은 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 사용하세요.",
                },
              })}
            />
            {errors.newpassword_check && (
              <small role="alert">{errors.newpassword_check.message}</small>
            )}
          </div>

          <hr className="mb-4" />
          <div className="mb-2 signup_btn_wrap">
            <button
              className="btn btn-success"
              type="submit"
              disabled={isSubmitting}
            >
              비밀번호 변경
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PasswordUpdate;
