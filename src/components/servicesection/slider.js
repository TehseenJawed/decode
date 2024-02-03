import React from "react";
import Carousel from "react-multi-carousel";
import design from "../../assets/icons/best/design.svg";
import computer from "../../assets/icons/best/computer.svg";
import developing from "../../assets/icons/best/developing.svg";
import seo from "../../assets/icons/best/seo.svg";
import marketing from "../../assets/icons/best/marketing.svg";
import mobile from "../../assets/icons/best/mobile.svg";
import writing from "../../assets/icons/best/writing.svg";
import erp from "../../assets/icons/best/erp.svg";
import { BsArrowRight } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import "../../styles/aboutus/style.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 180, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
  },
};

const Slider = (props) => {
  return (

    <Carousel
      ssr
      centerMode
      itemClass="image-item"
      responsive={responsive}
      itemClass="carousel-item-padding-40-px"
      infinite
      autoPlay
      autoPlaySpeed={2000}
      arrows={false}
      className="bbox deslidr"
    >
      <div className="box">
        <img src={design} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={computer} />
        <h3>Web Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={developing} />
        <h3>Developing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={seo} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={marketing} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={mobile} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={writing} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
      <div className="box">
        <img src={erp} />
        <h3>Designing</h3>
        <a href="#" className="icn">
          <BsArrowRight />
        </a>
      </div>
    </Carousel>
  );
};

export default Slider;
