import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="footer_title_wrap" sm={12} md={8}>
            <Link to="/">
              <h4>Sports-Matching-Service</h4>
            </Link>
            <p>서비스 소개</p>
            <p>공지사항</p>
            <p>자주 묻는 질문</p>
          </Col>
          <Col className="footer_notice_wrap" sm={12} md={6}>
            <p>
              본 사이트는 포트폴리오용도의 사이트로 상업적 용도가 없음을
              밝힙니다.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
