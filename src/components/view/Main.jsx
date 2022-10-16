import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "../common/Slider";
import Filter from "../common/Filter";
import MatchList from "../common/MatchList";

const Main = () => {
  return (
    <Row className="filter_col_wrap">
      <Col sm={12} md={12}>
        <Slider />
      </Col>
      <Col sm={12} md={5}>
        <Filter />
      </Col>
      <Col sm={12} md={12}>
        <MatchList />
      </Col>
    </Row>
  );
};

export default Main;
