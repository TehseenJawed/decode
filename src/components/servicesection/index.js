import React, {useState} from "react";
import "../../styles/services/style.css";
import Slider from "./slider.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/components/innerHeader.css";
import "../../styles/aboutus/style.css";
import Button from "../UI/Button";

const responsive = {
  desktop: {
    breakpoint: { max: 7000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 500, // this is needed to tell the amount of px that should be visible.
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
const Servicesection = (props) => {
  const {category, setArray, setList} = props
  const [flag, setFlag] = useState(true)
  
  return (
    <>
      <section className="services-main">
        <div className="container-fluid-custom">
          <div className="service-img">
            <img src={props.serviceimage}/>
          </div>
          <div className="service-content">
            <h2 className="title">{props.servicetitle}</h2>
            <p className='same-full' style={{fontSize:'15px'}}>{props.sdescription}{props.para2}</p>
            <p className='same-full' style={{fontSize:'15px'}}>{props.para3}</p>
            <Button
              title='Read More'
              pageLink={props.pageLink}
              style={{
                textTransform: "capitalize",
              }}
            />
            <h4>Categories</h4><br />
            <Carousel
              ssr
              itemClass="image-item"
              responsive={responsive}
              itemClass="carousel-item-padding-40-px"
              infinite
              autoPlay
              autoPlaySpeed={3000}
              arrows={true}
              className="bbox deslidr"
            >
              {category.map((v,i) => {
                const {title, image} = v
                
                return(<>
                  {setArray.map((v,i) => <div className=''></div>)}

                  <div className={i <= setList ? 'box':''}>
                    <span style={{ textAlign:'center', height:'50px'}}>
                <img src={image} />
                </span>
                <h3 style={{width:'100%', height:'50px', marginTop:'25%',textAlign:'center', fontSize:'16px'}}>{title}</h3>
              </div>
                </>)
              })}
              
              
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicesection;
