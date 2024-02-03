import React from 'react';
import Carousel from "react-multi-carousel";
import businesswoman from '../../assets/images/business-woman.png'
import businessman from '../../assets/images/business-man.png'
import { BsFillStarFill } from "react-icons/bs";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
};


const Simple = () => {
    return (<>
        <h2 style={{textAlign:'center'}}>Loved and trusted by the industry leaders</h2>
        <Carousel
            ssr

            itemClass="image-item"
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
            infinite
            autoPlay
            autoPlaySpeed={2000}
            arrows={false}
        >


            <div className="tesbox">
                <div className="cont">
                    <h3>Sam fisher</h3>
                    <span>Web and mobile application</span>
                    <p>A complex delivery pretty much spot on in the first try. Super well communicated and fast delivered. Can absolutely recommend! </p>
                    <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div>
                <div className="img">
                    <img src={businessman} />
                </div>
            </div>

            <div className="tesbox ">
                <div className="cont">
                    <h3>Eric Joe</h3>
                    <span>React Native Mobile Application</span>
                    <p>Hired to do a mobile app design. Very quick to respond and the designs were beautiful. Delivered earlier than expected and went through our feedbacks. Highly recommended. </p>
                    <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div>
                <div className="img">
                    <img src={businessman} />
                </div>
            </div>

            <div className="tesbox wm">
                <div className="cont">
                    <h3>Natalia Adams</h3>
                    <span>UI/UX Design</span>
                    <p>From concept to execution, these guys delivered above my initial expectations. I now have a new go to company for deigns. Thank you! </p>
                    <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div>
                <div className="img">
                    <img src={businesswoman} />
                </div>
            </div>

            <div className="tesbox ">
                <div className="cont">
                    <h3>Sahil Doshi</h3>
                    <span>Logo Design</span>
                    <p>Another great experience with the best designers in the market. </p>
                    <div className="stars">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                </div>
                <div className="img">
                    <img src={businessman} />
                </div>
            </div>


        </Carousel>
    </>);
};

export default Simple;
