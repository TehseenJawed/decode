import React, { useState } from "react";
import CaseStudyPop from "../../components/caseStudy";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assets/images/caseStudy1.png";
import Carousel2 from "../../assets/images/caseStudy2.png";
import Carousel3 from "../../assets/images/caseStudy3.png";
import { Link } from "react-router-dom";
import InnerHeader from "../../components/InnerHeader";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../assets/inner_page_images/clients_image.png";
import Image from "../../assets/inner_page_images/about_image.png";

import ufc from "../../assets/images/ufc.png";
import ufcmobile from "../../assets/images/ufcmobile.png";
import webmobile from "../../assets/images/webmobile2.png";
import webappmart from "../../assets/images/hmslogo.png";
import mersey from "../../assets/images/mersey.png";
import regeneration from "../../assets/images/regeneration.png";
import AlphaMoon from "../../assets/images/website-01.png";
import CircusKaput from "../../assets/images/website-05.png";

export default function CaseStudy() {
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      gradientContainerImage: Image,
      headerImage: require("../../assets/inner_page_images/case-study.svg"),
      gradientContainerSectionName: ["", "Case Study"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Case Studies",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "DiPixels, The Top International Digital Services.",
      buttonContainerDescription:
        "We are your creative digital associates. We ensure an enriching digital experience for your clients by providing innovative and ingenious solutions to small and large-scale businesses. Every day, we strive to assist you in augmenting your brand's online visibility, increasing react & engagement with your target audience and eventually driving sales.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];
  const [orcolor, setorcolor] = useState("ufc");
  const [orcolor1, setorcolor1] = useState("ufc");
  const [webcolor1, setwebcolor1] = useState("webapp1");
  const [webcolor, setwebcolor] = useState("webapp");
  const [mercolor, setmercolor] = useState("mersey");
  const caseStudyOBJ = [
    {
      id: 1,
      tags: ["HRM", "React Native", "UK"],
      desc:
        "We built an Enterprise-level Cross Platform Mobile Application for a client based in the UK (DurarHR) (DurarHR) (DurarHR) (DurarHR) (DurarHR). Their request was to have a robust solution that would perform as an intuitive Human Resources Management System (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
      colorClass: orcolor,
      ufcImage: "Durar HR",
      imgmobile: ufcmobile,
      subPage: {
        id: 1,
        technology: ["react", "django", "mongo"],
        page1:
          "We built an Enterprise-level Cross Platform Mobile Application for a client based in the UK (DurarHR) (DurarHR) (DurarHR) (DurarHR). Their request was to have a robust solution that would perform as an intuitive Human Resources Management System (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
        page2: [
          "After a meeting client to understand their needs we then created a solution that could become more than a traditional HR system. The new system combined Recruiting, On-boarding, Performance Monitoring, Payroll, and Corporate Administration.",
          "Our client wanted to create a solution that could become more than a traditional HR system. They wanted a new system to combine recruiting, onboarding, performance monitoring, payroll, and corporate administration.",
          "The final product should modernize and automate all the HR operations within an organization and be universal enough to be implemented for any industry.",
          "The system had to store the information in one place for easy access by both HR managers and employees.",
          " ",
        ],
        page2li: null,
        result:
          "To meet the customer’s needs, our team developed a robust solution that allows managing employee records, handling onboarding tasks, processing payroll, keeping company documentation in a secure place, and performing a HR functions. Data that is accurately structured and stored in one repository ensures high security and quick sharing among company workers.",
      },
    },
    {
      id: 3,
      tags: ["USA", "IOS&Android", "Security"],
      desc:
        "Credminder is a US-based client . We rolled out an enterprise-level IOS Application assisting their customers to get reminders for their credentials that have an expiry date.",
      colorClass: webcolor,
      ufcImage: "CREDMINDER",
      imgmobile: webmobile,
      subPage: {
        id: 3,
        technology: ["ios", "node"],
        page1:
          "Credminder is a US-based client . We rolled out an enterprise-level IOS Application assisting their customers to get reminders for their credentials that have an expiry date.",
        page2: [
          "The key idea behind launching this platform is to assist their clients by sending reminders to them to update their credentials that have an expiry date to avoid inconvenience. ",
          "",
          "",
          "However, the challenge was to create a centralized application that:",
          "In essence, we had to develop an IOS app that offers a 360° visibility into both strategy and software delivery.",
        ],
        page2li: [
          "Reminds the user to update credentials.",
          "Manage their different credentials.",
          "Have a sophisticated storage of user data where they can keep their updated credentials and certificates.",
          // 'Aligns far-flung teams'
        ],
        result:
          "After visualizing and strategizing the challenges provided by the client, we developed a robust, scalable and user friendly IOS application that offers a 360° visibility into both strategy and software delivery.",
      },
    },
    {
      id: 2,
      tags: ["Consultancy", "Website", "USA"],
      desc:
        "We have developed a Medium Enterprise-level Web Application which enables teaching & mentoring people on business & life management methods.",
      colorClass: mercolor,
      ufcImage: "Work the System",
      imgmobile: regeneration,
      subPage: {
        id: 2,
        technology: ["react", "node", "mongo"],
        page1:
          "We have developed a Medium Enterprise-level Web Application which enables teaching & mentoring people on business & life management methods.",
        page2: [
          "We developed the application in a timely manner that would help their clients to achieve their goals and assist them in driving their business forward.",
          "We were able to provide satisfactory results to our client as requested which made e-learning platform attractive for the users.",
          "The platform made e-learning courses available at easy access for its users.",
          "In essence, we developed a MERN stack application that offers a clear visibility into a well managed e-learning platform.",
          // 'In essence, we had to develop a MERN stack application that offers a clear visibility into a well managed e-learning platform.'
        ],
        page2li: null,
        result:
          "After visualizing and strategizing the challenges provided by the client, we achieved a robust, scalable and user friendly application which tended to all our client`s needs.",
      },
    },
    {
      id: 5,
      tags: ["Consultant", "Website", "UK"],
      desc:
        "Circus KAPUT, a client based in United Kingdom (UK) requested an Enterprise-level Cross Platform Mobile Application, their requested idea was to have robust solution that would perform as an intuitive human resources management system (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
      colorClass: orcolor1,
      ufcImage: "Circus KAPUT",
      imgmobile: CircusKaput,
      subPage: {
        id: 5,
        technology: ["react", "django", "mongo"],
        page1:
          "Circus KAPUT, a client based in United Kingdom (UK) requested an Enterprise-level Cross Platform Mobile Application, their requested idea was to have robust solution that would perform as an intuitive human resources management system (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
        page2: [
          "We started the project with a meeting with the client to completely understand the scope of the project.",
          "Our client wanted to create a solution that could become more than a traditional HR system. They wanted a new system to combine recruiting, onboarding, performance monitoring, payroll, and corporate administration.",
          "The final product should modernize and automate all the HR operations within an organization and be universal enough to be implemented for any industry.",
          "The system had to store the information in one place for easy access by both HR managers and employees.",
          " ",
        ],
        page2li: null,
        result:
          "To meet the customer’s needs, our team developed a robust solution that allows managing employee records, handling onboarding tasks, processing payroll, keeping company documentation in a secure place, and performing a HR functions. Data that is accurately structured and stored in one repository ensures high security and quick sharing among company workers.",
      },
    },

    {
      id: 4,
      tags: ["USA", "Website", "Consultancy"],
      desc:
        "This US based client rolled out an enterprise-level IOS Application, assisting people to get reminders for their credentials that have an expiry period.",
      colorClass: webcolor1,
      ufcImage: "Moje Smart Moving",
      imgmobile: AlphaMoon,
      subPage: {
        id: 4,
        technology: ["react", "node"],
        page1:
          "This US based client rolled out an enterprise-level IOS Application, assisting people to get reminders for their credentials that have an expiry period.",
        page2: [
          "For developing this platform, the client had contacted Di Pixels. As a leading digital solutions company, Di Pixels always aims to create meaningful services for all its clients to drive their business forward.",
          "With this project, too, we wanted to offer best-in-class solutions that can help the client achieve their goals and take their business to heights they have hoped to achieve.",
          "We kickedoff the project with a meeting with the client to completely understand the scope of the project.",
          "The key idea behind launching this platform was to assist people by reminding them to save their credentials that have an expiry period so that they dont forget and run into problems. However, the challenge was to create a centralized application that:",
          "In essence, we had to develop an IOS app that offers a 360° visibility into both strategy and software delivery.",
        ],
        page2li: [
          "Reminds the user to change credential before expiry",
          "Manage their different certificate credentials",
          "Have a clearinghouse where user can track their credentials and certificate",
          // 'Aligns far-flung teams'
        ],
        result:
          "After visualizing and strategizing the challenges provided by the client, we achieved a robust, scalable and user friendly application which catered to all our client`s needs.",
      },
    },
  ];
  const [case1, setCase1] = useState(false);
  function Case1() {
    setCase1(!case1);
  }

  const [case2, setCase2] = useState(false);
  function Case2() {
    setCase2(!case2);
  }

  const [case3, setCase3] = useState(false);
  function Case3() {
    setCase3(!case3);
  }

  const [case4, setCase4] = useState(false);
  function Case4() {
    setCase4(!case4);
  }

  const [case5, setCase5] = useState(false);
  function Case5() {
    setCase5(!case5);
  }

  return (
    <div>
      <CaseStudyPop obj={caseStudyOBJ[0]} stateform={case1} setform={Case1} />
      <CaseStudyPop obj={caseStudyOBJ[1]} stateform={case2} setform={Case2} />
      <CaseStudyPop obj={caseStudyOBJ[2]} stateform={case3} setform={Case3} />
      <CaseStudyPop obj={caseStudyOBJ[3]} stateform={case4} setform={Case4} />
      <CaseStudyPop obj={caseStudyOBJ[4]} stateform={case5} setform={Case5} />
      <InnerHeader componentDetails={componentDetails} />
      {caseStudyOBJ.map((v, i) => {
        const { id, tags, desc, colorClass, imgmobile, ufcImage, subPage } = v;
        if (id == 1) {
          return (
            <section className={colorClass}>
              <div className="container-full">
                <div className="same-full orange setBox">
                  <div className="left">
                    <div className="logo">
                      <p className="logoImage ">{ufcImage}</p>
                    </div>
                    <ul>
                      {tags.map((v, i) => (
                        <li>
                          <div className="nor">{v}</div>
                          <div className="hov">{v}</div>
                        </li>
                      ))}
                    </ul>
                    <p>{desc}</p>
                    <div style={{ textAlign: "left" }}>
                      <a onClick={() => setCase1(!case1)} className="view">
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                  <div className="right">
                    <div
                      className="img"
                      onMouseOver={() => {
                        setorcolor("ufc orangebg");
                      }}
                      onMouseLeave={() => {
                        setorcolor("ufc");
                      }}
                    >
                      <img
                        className=""
                        style={{ width: "130%" }}
                        src={imgmobile}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (id == 5) {
          return (
            <section className={colorClass}>
              <div className="container-full">
                <div className="same-full orange setBox">
                  <div className="left">
                    <div className="logo">
                      <p className="logoImage">{ufcImage}</p>
                    </div>
                    <ul>
                      {tags.map((v, i) => (
                        <li>
                          <div className="nor">{v}</div>
                          <div className="hov">{v}</div>
                        </li>
                      ))}
                    </ul>
                    <p>{desc}</p>
                    <a onClick={() => setCase4(!case4)} className="view">
                      <span>Read More</span>
                    </a>
                  </div>
                  <div className="right">
                    <div
                      className="img"
                      onMouseOver={() => {
                        setorcolor1("ufc orangebg");
                      }}
                      onMouseLeave={() => {
                        setorcolor1("ufc");
                      }}
                    >
                      <img style={{ width: "130%" }} src={imgmobile} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (id == 4) {
          return (
            <section className={colorClass}>
              <div className="container-full">
                <div className="same-full blue">
                  <div className="right">
                    <div
                      className="img"
                      onMouseOver={() => {
                        setwebcolor1("webapp bluebg");
                      }}
                      onMouseLeave={() => {
                        setwebcolor1("webapp");
                      }}
                    >
                      <img
                        style={{ width: "150%", marginRight: "20%" }}
                        src={imgmobile}
                      />
                    </div>
                  </div>
                  <div className="left">
                    <div className="logo">
                      <p className="logoImage">{ufcImage}</p>
                    </div>
                    <ul>
                      {tags.map((v, i) => (
                        <li>
                          <div className="nor">{v}</div>
                          <div className="hov">{v}</div>
                        </li>
                      ))}
                    </ul>
                    <p>{desc}</p>
                    <a onClick={() => setCase5(!case5)} className="view">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (id == 3) {
          return (
            <section className={colorClass}>
              <div className="container-full">
                <div className="same-full blue">
                  <div className="right">
                    <div
                      className="img"
                      onMouseOver={() => {
                        setwebcolor("webapp bluebg");
                      }}
                      onMouseLeave={() => {
                        setwebcolor("webapp");
                      }}
                    >
                      <img
                        style={{ width: "150%", marginRight: "20%" }}
                        src={imgmobile}
                      />
                    </div>
                  </div>
                  <div className="left">
                    <div className="logo">
                      <p className="logoImage">{ufcImage}</p>
                    </div>
                    <ul>
                      {tags.map((v, i) => (
                        <li>
                          <div className="nor">{v}</div>
                          <div className="hov">{v}</div>
                        </li>
                      ))}
                    </ul>
                    <p>{desc}</p>
                    <a onClick={() => setCase2(!case2)} className="view">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (id == 2) {
          return (
            <section className={mercolor}>
              <div className="container-full">
                <div className="same-full purple">
                  <div className="left">
                    <div className="logo">
                      <p className="logoImage">{ufcImage}</p>
                    </div>
                    <ul>
                      {tags.map((v, i) => (
                        <li>
                          <div className="nor">{v}</div>
                          <div className="hov">{v}</div>
                        </li>
                      ))}
                    </ul>
                    <p>{desc}</p>
                    <a onClick={() => setCase3(!case3)} className="view">
                      <span>Read More</span>
                    </a>
                  </div>
                  <div className="right">
                    <div
                      className="alag img"
                      onMouseOver={() => {
                        setmercolor("mersey purplebg");
                      }}
                      onMouseLeave={() => {
                        setmercolor("mersey");
                      }}
                    >
                      <img style={{ width: "130%" }} src={regeneration} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}

      {/* <section className={mercolor}>
                <div className="container-full">
                    <div className="same-full purple">
                        <div className="left">
                            <div className="logo">
                                <img src={mersey} />
                            </div>
                            <ul>
                                <li>
                                    <div className="nor">Ios</div>
                                    <div className="hov">Ios</div>
                                </li>
                                <li>
                                    <div className="nor">Iot</div>
                                    <div className="hov">Iot</div>
                                </li>
                                <li>
                                    <div className="nor">Romania</div>
                                    <div className="hov">Romania</div>
                                </li>
                            </ul>
                            <p>
                                Launch new adverts and engage with your customers - an
                                all-in-one platform that promotes your brand and builds
                                engagement.
                </p>
                            <Link to="/case-studies/readmore" className="view">
                                <span>Read More</span>
                            </Link>
                        </div>
                        <div className="right">
                            <div
                                className="alag img"
                                onMouseOver={() => {
                                    setmercolor("mersey purplebg");
                                }}
                                onMouseLeave={() => {
                                    setmercolor("mersey");
                                }}
                            >
                                <img src={regeneration} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
  );
}
