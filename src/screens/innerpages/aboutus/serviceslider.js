import React from "react";
import Carousel from "react-multi-carousel";
import design from "../../../assets/icons/best/design.svg";
import computer from "../../../assets/icons/best/computer.svg";
import developing from "../../../assets/icons/best/developing.svg";
import seo from "../../../assets/icons/best/seo.svg";
import marketing from "../../../assets/icons/best/marketing.svg";
import mobile from "../../../assets/icons/best/mobile.svg";
import writing from "../../../assets/icons/best/writing.svg";
import erp from "../../../assets/icons/best/erp.svg";
import ecommerce from "../../../assets/inner_page_images/ecommerce.svg";
import devops from "../../../assets/inner_page_images/devops.svg";
import { BsArrowRight } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import "../../../styles/aboutus/style.css";
import { Link } from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

const Serviceslider = () => {
  return (

    <Carousel
      ssr
      centerMode
      itemClass="image-item"
      responsive={responsive}
      itemClass="carousel-item-padding-40-px"
      // infinite
      autoPlay
      autoPlaySpeed={4000}
      arrows={true}
      className="bbox servcslidr"
    >
      <div className="bbox">
        <div className="box">
          <img src={design} />
          <h3>Graphic Designing</h3>
          <Link to='/graphics' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div className="box">
          <img src={computer} />
          <h3>Web Designing</h3>
          <Link to='/webdesign' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div></div>
        <div className="box">
          <img src={developing} />
          <h3>Web Development</h3>
          <Link to='/webapp-development' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={seo} />
          <h3>Digital Marketing</h3>
          <Link to='/digitalmarketing' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>
      
      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={erp} />
          <h3>Software Solutions</h3>
          <Link to='/software-solution' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={mobile} />
          <h3>App Development</h3>
          <Link to='/mobileapp-development' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={marketing} />
          <h3>SEO</h3>
          <Link to='/seo' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>
      
      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={writing} />
          <h3>Content Writing</h3>
          <Link to='/content-writing' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div className="box">
          <img src={ecommerce} />
          <h3>Ecommerce App</h3>
          <Link to='/ecommerce' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>

      <div className="bbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="box">
          <img src={devops} />
          <h3>DevOps</h3>
          <Link to='/devops' className="icn">
            <BsArrowRight />
          </Link>
        </div>
      </div>
      <div className="bbox">
      </div>
    </Carousel>
  );
};

export default Serviceslider;
