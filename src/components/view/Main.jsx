import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Main = () => {
  return (
    <Row className="filter_col_wrap">
      <Col sm={12} md={12} style={{ backgroundColor: 'rgb(250,240,230)' }}>
        달력이 들어갈 영역
      </Col>
      <Col sm={12} md={5} style={{ backgroundColor: 'rgb(250,240,230)' }}>
        필터가 들어갈 영역
      </Col>
      <Col sm={12} md={12} style={{ backgroundColor: 'rgb(250,240,230)' }}>
        리스트가 들어갈 영역
      </Col>
    </Row>
  )
}

export default Main
