import React, { useState } from "react";
import InnerHeader from "../../../components/InnerHeader";
import Image from "../../../assets/inner_page_images/about_image.png";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import Serviceslider from "./serviceslider.js";
import "../../../styles/home/index.css";
import "../../../styles/aboutus/style.css";
import Leaders from "./leaders.js";
import Advisors from "./advisors.js";
import TopFooter from "../../../components/footer/topfooter";
const AboutUs = (props) => {
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      headerImage: require("../../../assets/inner_page_images/about-us.svg"),
      gradientContainerImage: Image,
      gradientContainerSectionName: ["", ""],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "About Us",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "",
      buttonContainerDescription: "",
      buttonContainerGreenLinesImage: GreenLineImage,
    },
  ];
  const [leaders, setLeaders] = useState(true);
  return (
    <>
      <InnerHeader componentDetails={componentDetails} />

      <section className="aboutSection">
        <div className="aboutText">
          <p>
            <b style={{ marginRight: "1%", fontSize: "25px" }}>Vision:</b>
            If you can Dream it we can Develop it.
          </p>

          <p>
            <b style={{ marginRight: "1%", fontSize: "25px" }}>Values:</b>
            Integrity, Creativity & Excellence
          </p>

          <p>
            <b style={{ marginRight: "1%", fontSize: "25px" }}>Mission:</b>
            We believe that living the dream of a global village is a new
            reality where technology has brought us closer and made us stronger.
          </p>

          <p style={{ marginTop: "5%" }}>
            <b style={{ marginTop: "1%", fontSize: "25px" }}>
              With so many companies out there, Why Choose Us?
            </b>{" "}
            <br />
            We are not just another company for hire, we are a dedicated team of
            professionals who help you to lay the digital foundation of your
            business.
          </p>
          <p className="bottomText">
            We are a team of highly dedicated professionals who are creative,
            dedicated to enriching digital experiences by providing innovative
            and ingenious solutions to small and large-scale businesses.
            Everyday, we strive to assist you in augmenting your brand’s online
            visibility, increasing reach & engagement with your target audience.
          </p>
        </div>
      </section>
      {/* <section className="specin">
        <div className="cont">
          <h2>Specializing In</h2>
          <Serviceslider />
        </div>
      </section> */}
      <section className="seccreativs setAbout">
        <div className="container-custom">
          <h2 className="title">
            Our Creative Team Takes Pride in Producing Beautiful Digital
            Products.
          </h2>
          <p>
          Software and mobile apps development for businesses has never been that easy.
            <br /> <b>If you can dream it, we can build it.</b>
          </p>
          <div className="cproducts">
            <div className="leftimgbx">
              <div className="bimg">
                <img
                  src={require("../../../assets/images/aboutus/approach.png")}
                />
              </div>
              <div className="imgtext">
                {/* <p>
                  We Are Proud To Have The Best Team Of Creative Thinkers And
                  Fantastic Clients From Across The World, Trusting Our
                  Developing, Designing, And Branding.
                </p> */}
              </div>
            </div>
            <div className="right-imgbx">
              <img
                src={require("../../../assets/images/aboutus/mission.png")}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="secfacts">
        <div className="container-custom">
          <h2 className="title white">Quick Facts & Financials</h2>
          <div className="facts-container">
            <div className="factsbox">
              <img
                src={require("../../../assets/images/aboutus/established.svg")}
              />
              <div className="txtbx">
                <h3>2012</h3>
                <p>Established</p>
              </div>
            </div>
            <div className="factsbox blue">
              <img src={require("../../../assets/images/aboutus/ne.svg")} />
              <div className="txtbx">
                <h3>100+</h3>
                <p>Professionals</p>
              </div>
            </div>
            <div className="factsbox">
              <img
                src={require("../../../assets/images/aboutus/clients.svg")}
              />
              <div className="txtbx">
                <h3>500+</h3>
                <p>Dedicated Global Delivery Power House</p>
              </div>
            </div>
            {/* <div className="factsbox yellow">
              <img
                src={require("../../../assets/images/aboutus/gdelivery.svg")}
              />
              <div className="txtbx">
                <h3>25000</h3>
                <p>sq.ft Global Delivery Centre</p>
              </div>
            </div>
            <div className="factsbox red">
              <img
                src={require("../../../assets/images/aboutus/revenue.svg")}
              />
              <div className="txtbx">
                <h3>US $5 m</h3>
                <p>Revenue</p>
              </div>
            </div>
            <div className="factsbox darkk">
              <img
                src={require("../../../assets/images/aboutus/revenue-growth.svg")}
              />
              <div className="txtbx">
                <h3>30+%</h3>
                <p>YOY Organic Revenue Growth</p>
              </div>
            </div>
            <div className="factsbox">
              <div className="txtbx">
                <p>FY 2019 Revenue Mix</p>
                <p>70% North America, 23% Europe, 3% CIS, 3% APAC</p>
              </div>
            </div> */}
            <div className="factsbox green">
              <img
                src={require("../../../assets/images/aboutus/certifications.svg")}
              />
              <div className="txtbx">
                <h3>Certifications</h3>
                <p>ISO 9001:2008,</p>
                <p>ISO 27001:2013</p>
              </div>
            </div>
            <div className="factsbox">
              <div className="txtbx">
                <h3>Our Services</h3>

                <p>
                  Back-End, Front-End, Mobile, Digital Marketing and Design,
                  Management and Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
       <div className="uc-container">
            <img src={require('../../../assets/images/uc-bg.jpg')}/>
        </div> 
        */}
      <TopFooter />
    </>
  );
};

export default AboutUs;
