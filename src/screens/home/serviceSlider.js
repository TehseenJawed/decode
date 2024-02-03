import React from 'react';
import Carousel from "react-multi-carousel";
import Sbranding from '../../assets/icons/homeserviceslider/Sbranding.svg';
import Sdevelopment from '../../assets/icons/homeserviceslider/Sdevelopment.svg';
import Sdigitalmarketing from '../../assets/icons/homeserviceslider/Sdigitalmarketing.svg';
import Swebdesign from '../../assets/icons/homeserviceslider/Swebdesign.svg';




const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 465 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
};


const ServiceSlider= () => {
  return (
    <Carousel
        ssr
        itemClass="image-item"
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
        infinite
        autoPlay
        autoPlaySpeed={2000}
        arrows= {false}
    >
     

                <div className="boxes green">
                    <img src={Sbranding} />
                    <h3>Branding</h3>
                </div>

                <div className="boxes blue">
                    <img src={Sdevelopment} />
                    <h3>Development</h3>
                </div>

                <div className="boxes purple">
                    <img src={Sdigitalmarketing} />
                    <h3>Digital Marketing</h3>
                </div>

                <div className="boxes orange">
                    <img src={Swebdesign} />
                    <h3>Web Design</h3>
                </div>
      
    
    </Carousel>
  );
};

export default ServiceSlider;
