import Review from "../components/view/Review";

export const myPageRender = (page) => {
  if (page === "신청") return `신청 내역 페이지 입니다`;
  else if (page === "내 정보") return `내 정보 변경 페이지 입니다.`;
  else if (page === "비밀번호") return `비밀번호 변경 페이지 입니다.`;
  else if (page === "리뷰") return `리뷰 페이지 입니다.`;
  else if (page === "게스트") return `게스트 평가 페이지 입니다.`;
  else if (page === "호스트") return `호스트 평가 페이지 입니다.`;
  else if (page === "내 리뷰") return <Review />;
  else if (page === "질문") return `질문 페이지 입니다.`;
  else if (page === "공지사항") return `공지사항 페이지 입니다.`;
};
