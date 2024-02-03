import React from 'react';
import android from "../../../assets/icons/framework/android.svg";
import nodejs from "../../../assets/icons/framework/nodejs.svg";
import python from "../../../assets/icons/framework/python.svg";
import php from "../../../assets/icons/framework/php.svg";
import apple from "../../../assets/icons/framework/apple.svg";
import flutter from "../../../assets/icons/framework/flutter.svg";
import ionic from "../../../assets/icons/framework/ionic.svg";
import swift from "../../../assets/icons/framework/swift.svg";
import reacticon from "../../../assets/icons/framework/React.svg";
import {RiVuejsFill} from 'react-icons/ri'
import './style.css'
import { FaAngular, FaJava } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiNextDotJs, SiFlask, SiPerl, SiFirebase } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";


export default function Technologies(){
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      gradientContainerImage: Image,
      headerImage: require('../../../assets/inner_page_images/technology.svg'),
      gradientContainerSectionName: ["","Technologies"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Technologies",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "",
      buttonContainerDescription:
        "",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];
    return(<div>
      
      <InnerHeader componentDetails={componentDetails} />
        <section  style={{marginBottom:'20%', marginTop:'-5%'}} className="technology1">
          <div className="container">
            {/* <h2>Technologies we work with</h2> */}
            <div className="tech">

              <h3 className="tech-head tech-head-bottom">Front-End Technologies</h3>
              <div className="tbox tech-center">

              <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img width='500px' height='500px' src={reacticon} />
                    </div>
                  </div>
                  <p>React</p>
                </div>


                <div className="box angular">
                  <div className="full">
                    <div className="front">
                      <FaAngular style={{ color: 'white' }} size='35' />
                    </div>
                    <div className="back">
                      <FaAngular size='45' />
                    </div>
                  </div>
                  <p>Angular</p>
                </div>

                <div className="box vuejs">
                  <div className="full">
                    <div className="front">
                      <RiVuejsFill size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <RiVuejsFill size='45' />
                    </div>
                  </div>
                  <p>VueJS</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiNextDotJs style={{ color: 'white' }} size='35' />
                    </div>
                    <div className="back">
                      <SiNextDotJs size='45' />
                    </div>
                  </div>
                  <p>NextJS</p>
                </div>


                <div className="box gatsby">
                  <div className="full">
                    <div className="front">
                      <GrGatsbyjs size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <GrGatsbyjs size='45' />
                    </div>
                  </div>
                  <p>Gatsby</p>
                </div>

                <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p>Flutter</p>
                </div>
              </div>

              <h3 className="tech-head">Mobile Technologies</h3>
              <div className="tbox">
                <div className="box apple">
                  <div className="full">
                    <div className="front">
                      <img src={apple} />
                    </div>
                    <div className="back">
                      <img src={apple} />
                    </div>
                  </div>
                  <p>Ios</p>
                </div>

                <div className="box android">
                  <div className="full">
                    <div className="front">
                      <img src={android} />
                    </div>
                    <div className="back">
                      <img src={android} />
                    </div>
                  </div>
                  <p>Android</p>
                </div>

                <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img src={reacticon} />
                    </div>
                  </div>
                  <p>React Native</p>
                </div>
                <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p>Flutter</p>
                </div>

                <div className="box swift">
                  <div className="full">
                    <div className="front">
                      <img src={swift} />
                    </div>
                    <div className="back">
                      <img src={swift} />
                    </div>
                  </div>
                  <p>Swift</p>
                </div>
                <div className="box ionic">
                  <div className="full">
                    <div className="front">
                      <img src={ionic} />
                    </div>
                    <div className="back">
                      <img src={ionic} />
                    </div>
                  </div>
                  <p>Ionic</p>
                </div>
              </div>
              <h3 className="tech-head tech-head-bottom">Back-End Technologies</h3>
              <div className="tbox tech-center">
                <div className="box php">
                  <div className="full">
                    <div className="front">
                      <img src={php} />
                    </div>
                    <div className="back">
                      <img src={php} />
                    </div>
                  </div>
                  <p>PHP</p>
                </div>
                <div className="box php">
                  <div className="full">
                    <div className="front">
                      <SiPerl size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiPerl size='45' />
                    </div>
                  </div>
                  <p>Perl</p>
                </div>

                <div className="box nodejs">
                  <div className="full">
                    <div className="front">
                      <img src={nodejs} />
                    </div>
                    <div className="back">
                      <img src={nodejs} />
                    </div>
                  </div>
                  <p>Node JS</p>
                </div>

                <div className="box django">
                  <div className="full">
                    <div className="front">
                      <DiDjango size='45' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <DiDjango size='55' />
                    </div>
                  </div>
                  <p>Django</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiFlask size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiFlask size='45' />
                    </div>
                  </div>
                  <p>Flask</p>
                </div>

                <div className="box kotlin">
                  <div className="full">
                    <div className="front">
                      <SiFirebase size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiFirebase size='45' />
                    </div>
                  </div>
                  <p>Firebase</p>
                </div>
                {/* <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p>Flutter</p>
                </div> */}
              </div>
              {/* <a href="#" className="viewlink">
                View All Technologies
              </a> */}
            </div>
          </div>
        </section>
    </div>)
}