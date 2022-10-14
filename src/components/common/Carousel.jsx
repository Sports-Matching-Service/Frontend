import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import temp_image from "../../style/image/temp_image.jpg";
import temp_image2 from "../../style/image/temp_image2.jpg";
import temp_image3 from "../../style/image/temp_image3.jpg";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Row className="carousel_row">
      <div className="temp_casousel_area"></div>
      <Col md={9}>
        <Swiper autoplay={{ delay: 3000 }} loop={true}>
          <SwiperSlide>
            <div className="first_swiper">
              <img src={temp_image} alt="배너용 이미지" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second_swiper">
              <img src={temp_image2} alt="배너용 이미지" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="third_swiper">
              <img src={temp_image3} alt="배너용 이미지" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
};

export default Carousel;
