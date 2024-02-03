import React, { useState, useEffect } from "react";
import design from "../../assets/icons/best/design.svg";
import computer from "../../assets/icons/best/computer.svg";
import developing from "../../assets/icons/best/developing.svg";
import seo from "../../assets/icons/best/seo.svg";
import marketing from "../../assets/icons/best/marketing.svg";
import mobile from "../../assets/icons/best/mobile.svg";
import writing from "../../assets/icons/best/writing.svg";
import erp from "../../assets/icons/best/erp.svg";
import android from "../../assets/icons/framework/android.svg";
import nodejs from "../../assets/icons/framework/nodejs.svg";
import python from "../../assets/icons/framework/python.svg";
import php from "../../assets/icons/framework/php.svg";
import apple from "../../assets/icons/framework/apple.svg";
import flutter from "../../assets/icons/framework/flutter.svg";
import ionic from "../../assets/icons/framework/ionic.svg";
import swift from "../../assets/icons/framework/swift.svg";
import reacticon from "../../assets/icons/framework/React.svg";
import ufc from "../../assets/images/ufc.png";
import ufcmobile from "../../assets/images/ufcmobile.png";
// import webmobile from "../../assets/images/webmobile.png";
import webmobile from "../../assets/images/webmobile2.png";
import mersey from "../../assets/images/mersey.png";
import regeneration from "../../assets/images/regeneration.png";
// import webappmart from "../../assets/images/webappmart.png";
import webappmart from "../../assets/images/hmslogo.png";
import techback from "../../assets/images/technology-background.png";
import { BsArrowRight } from "react-icons/bs";
import arrow from "../../assets/icons/why/arrow.svg";
import clicker from "../../assets/icons/why/clicker.svg";
import employee from "../../assets/icons/why/employee.svg";
import logodesign from "../../assets/icons/why/logo-design.svg";
import planetearth from "../../assets/icons/why/planet-earth.svg";
import play from "../../assets/icons/why/info.svg";
import rocket from "../../assets/icons/why/rocket.svg";
import star from "../../assets/icons/why/star.svg";
import whyblue from "../../assets/images/whyblue.png";
import whygreen from "../../assets/images/whygreen.png";
import hg1 from "../../assets/images/homegrid/g1.png";
import hg2 from "../../assets/images/homegrid/g2.png";
import hg3 from "../../assets/images/homegrid/g3.png";
import hg4 from "../../assets/images/homegrid/g4.png";
import hg5 from "../../assets/images/homegrid/g5.png";
import hg6 from "../../assets/images/homegrid/g6.png";
import hg7 from "../../assets/images/homegrid/g7.png";
import hg8 from "../../assets/images/homegrid/g8.png";
import firstsliderbg from "../../assets/images/firstsliderbg.png";
import company from "../../assets/images/company.png";
import jeffmobile from "../../assets/images/jeffmobile.png";
import matchmobile from "../../assets/images/matchmobile.png";
import mobiletest from "../../assets/images/app-02.png";
import brush from "../../assets/icons/roadmap/brush.svg";
import check from "../../assets/icons/roadmap/check.svg";
import checklist from "../../assets/icons/roadmap/checklists.svg";
import image from "../../assets/icons/roadmap/image.svg";
import keyboard from "../../assets/icons/roadmap/keyboard.svg";
import revising from "../../assets/icons/roadmap/revising.svg";
import speedmeter from "../../assets/icons/roadmap/speedmeter.svg";
import testing from "../../assets/icons/roadmap/testing.svg";
import ux from "../../assets/icons/roadmap/ux.svg";
import smiley from "../../assets/icons/roadmap/smile.svg";
import headset from "../../assets/icons/headset.svg";
import "../../styles/home/index.css";
import { Link } from "react-router-dom";
import TopFooter from "../../components/footer/topfooter";
import test from "../../assets/inner_page_images/api.svg";
import ecommerce from "../../assets/inner_page_images/ecommerce.svg";
import devops from "../../assets/inner_page_images/devops.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Simple from "./simple";
import ServiceSlider from "./serviceSlider";
import ContactForm from "../../components/ContactForm/index";
import Technology from "../../components/Technology";
import { RiVuejsFill } from "react-icons/ri";
import { FaAngular, FaJava } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiNextDotJs, SiFlask, SiPerl, SiFirebase } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import TechnologyForm from "../../components/TechnologyForm/index";
import CaseStudyPop from "../../components/caseStudy";

import StartNewForm from "./startForm";
import { TramRounded } from "@material-ui/icons";
function Home(props) {
  const [orcolor, setorcolor] = useState("ufc");
  const [webcolor, setwebcolor] = useState("webapp");
  const [mercolor, setmercolor] = useState("mersey");

  const [openform, setOpenform] = useState(false);
  function formpop() {
    setOpenform(!openform);
  }
  const [openTform, setOpenTform] = useState(false);
  function Tformpop() {
    setOpenTform(!openTform);
  }
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
  const [startForm, setStartForm] = useState(false);
  function StartForm() {
    setStartForm(!startForm);
  }
  const Durah = {
    id: 1,
    tags: ["HRM", "React Native", "UK"],
    desc:
      "We built an Enterprise-level Cross Platform Mobile Application for a client based in the UK (DurarHR). Their request was to have a robust solution that would perform as an intuitive Human Resources Management System (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
    colorClass: orcolor,
    ufcImage: "Durar HR",
    imgmobile: ufcmobile,
    subPage: {
      id: 1,
      technology: ["react", "django", "mongo"],
      page1:
        "We built an Enterprise-level Cross Platform Mobile Application for a client based in the UK (DurarHR). Their request was to have a robust solution that would perform as an intuitive Human Resources Management System (HRMS) that has a complete set of HR functions and is suitable for SMEs working in any industry.",
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
  };
  const Credminder = {
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
  };
  const WorkTheSystem = {
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
  };
  useEffect(() => {
    setTimeout(() => {
      setStartForm(!startForm);
      console.log("I am working");
    }, 2000);
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      {sessionStorage.getItem("formValidate") ? null : (
        <StartNewForm stateform={startForm} setform={StartForm} />
      )}
      <div className="contact-form-popup">
        <ContactForm stateform={openform} setform={formpop} />
      </div>
      <TechnologyForm stateform={openTform} setform={Tformpop} />
      <CaseStudyPop obj={Durah} stateform={case1} setform={Case1} />
      <CaseStudyPop obj={Credminder} stateform={case2} setform={Case2} />
      <CaseStudyPop obj={WorkTheSystem} stateform={case3} setform={Case3} />
      <div className="inner">
        <section className="homeslider">
          <div className="scon">
            <h5>Welcome to</h5>
            <h1>DiPixels</h1>
            <p>
              Getting online is easy. Succeeding online is a different story.
              You’ll need more than just a beautiful website to stand out these
              days. Online marketing solutions. Conversion-based web design
              coupled with a lead generating marketing plan,
            </p>
            <a
              href="javascript:void(0)"
              onClick={() => {
                formpop();
              }}
              className="talk"
            >
              <span>Let's talk!</span>
              <div className="btn">
                <img src={headset} />
              </div>
            </a>
          </div>
          {/* <div className="simg">
          <img src={jeffmobile} />
          <img src={matchmobile} />
        </div> */}
          <div class="simg">
            <img src={mobiletest} />
          </div>
        </section>

        <section className="best">
          <div className="container">
            <h2>Our Services</h2>
            <p>
              We strive for excellence and customer satisfaction. We help you
              achieve your goals with our winning combination of innovative
              designs, sophisticated development and ongoing analysis from
              strategy to execution, ensuring a perfect delivery which provides
              value to help you grow.
            </p>
            <div
              className="bbox"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <div className="box"> */}
              <Link to="/graphics" className="icn box">
                <img src={design} />
                <h3>Graphic Designing</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/webdesign" className="icn box">
                <img src={computer} />
                <h3>Web Designing</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/webapp-development" className="icn box">
                <img src={developing} />
                <h3>Web Development</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box" style={{}}> */}
              <Link to="/digitalmarketing" className="icn box">
                <img src={seo} />
                <h3>Digital Marketing</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/software-solution" className="icn box">
                <img src={erp} />
                <h3>Software Solutions</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/mobileapp-development" className="icn box">
                <img src={mobile} />
                <h3>App Development</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/seo" className="icn box">
                <img src={marketing} />
                <h3>SEO</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/content-writing" className="icn box">
                <img src={writing} />
                <h3>Content Writing</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/ecommerce" className="icn box">
                <img src={ecommerce} />
                <h3>Ecommerce App</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
              {/* <div className="box"> */}
              <Link to="/devops" className="icn box">
                <img src={devops} />
                <h3>DevOps</h3>
                {/* <BsArrowRight /> */}
              </Link>
              {/* </div> */}
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href="#cform" className="view">
                <span>schedule time to talk</span>
              </a>
            </div>
          </div>
        </section>

        <section className="technology">
          <div className="container">
            <h2>Technologies we specialize in</h2>
            <div className="tech">
              <h3 className="tech-head tech-head-bottom">
                Front-End Technologies
              </h3>
              <div className="tbox tech-center">
                <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img width="500px" height="500px" src={reacticon} />
                    </div>
                  </div>
                  <p>React</p>
                </div>

                <div className="box angular">
                  <div className="full">
                    <div className="front">
                      <FaAngular style={{ color: "white" }} size="35" />
                    </div>
                    <div className="back">
                      <FaAngular size="45" />
                    </div>
                  </div>
                  <p>Angular</p>
                </div>

                <div className="box vuejs">
                  <div className="full">
                    <div className="front">
                      <RiVuejsFill size="35" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <RiVuejsFill size="45" />
                    </div>
                  </div>
                  <p>VueJS</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiNextDotJs style={{ color: "white" }} size="35" />
                    </div>
                    <div className="back">
                      <SiNextDotJs size="45" />
                    </div>
                  </div>
                  <p>NextJS</p>
                </div>

                <div className="box gatsby">
                  <div className="full">
                    <div className="front">
                      <GrGatsbyjs size="35" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <GrGatsbyjs size="45" />
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
              {/* <h3 className="tech-head">Mobile Technologies</h3>
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
              </div> */}
              <h3 className="tech-head tech-head-bottom">
                Back-End Technologies
              </h3>
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
                      <SiPerl size="35" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <SiPerl size="45" />
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
                      <DiDjango size="45" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <DiDjango size="55" />
                    </div>
                  </div>
                  <p>Django</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiFlask size="35" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <SiFlask size="45" />
                    </div>
                  </div>
                  <p>Flask</p>
                </div>

                <div className="box kotlin">
                  <div className="full">
                    <div className="front">
                      <SiFirebase size="35" style={{ color: "white" }} />
                    </div>
                    <div className="back">
                      <SiFirebase size="45" />
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

        <section className={orcolor}>
          <div className="container-full">
            <div className="same-full orange">
              <div className="left">
                <div className="logo">
                  <p className="logoImage">Durar HR</p>
                </div>
                <ul>
                  <li>
                    <div className="nor">HRM</div>
                    <div className="hov">HRM</div>
                  </li>
                  <li>
                    <div className="nor">React Native</div>
                    <div className="hov">React Native</div>
                  </li>
                  <li>
                    <div className="nor">UK</div>
                    <div className="hov">UK</div>
                  </li>
                </ul>
                <p>
                  We built an Enterprise-level Cross Platform Mobile Application
                  for a client based in the UK (DurarHR). Their request was to
                  have a robust solution that would perform as an intuitive
                  Human Resources Management System (HRMS) that has a complete
                  set of HR functions and is suitable for SMEs working in any
                  industry.
                </p>
                <a onClick={() => setCase1(!case1)} className="view">
                  <span>Read More</span>
                </a>
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
                  <img className="setCaseImage setNewImage" src={ufcmobile} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={orcolor}>
                <div className="container">
                    <div className="same-full orange">
                        <div className="left">
                            <div className="logo">
                                <img src={ufc} />
                            </div>
                            <ul>
                                <li>
                                    <div className="nor">Iot</div>
                                    <div className="hov">Iot</div>
                                </li>
                                <li>
                                    <div className="nor">React Native</div>
                                    <div className="hov">React Native</div>
                                </li>
                                <li>
                                    <div className="nor">UK</div>
                                    <div className="hov">UK</div>
                                </li>
                            </ul>
                            <p>Launch new adverts and engage with your customers - an all-in-one platform that promotes your brand and builds engagement.</p>
                            <a href="#" className="view">
                                <span>View Case Study</span>
                            </a>
                        </div>
                        <div className="right">
                            <div className="img" onMouseOver={ () => { setorcolor('ufc orangebg') }} onMouseLeave={ () => { setorcolor('ufc') }}>
                                <img src={ufcmobile} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        {/* <section className={webcolor}>
                <div className="container">
                    <div className="same-full blue">
                        <div className="right">
                            <div className="img" onMouseOver={ () => { setwebcolor('webapp bluebg') }} onMouseLeave={ () => { setwebcolor('webapp') }}>
                                <img src={webmobile} />
                            </div>
                        </div>
                        <div className="left">
                            <div className="logo">
                                <img src={webappmart} />
                            </div>
                            <ul>
                                <li>
                                    <div className="nor">USA</div>
                                    <div className="hov">USA</div>
                                </li>
                                <li>
                                    <div className="nor">IOS & Android</div>
                                    <div className="hov">IOS & Android</div>
                                </li>
                                <li>
                                    <div className="nor">Automotive</div>
                                    <div className="hov">Automotive</div>
                                </li>
                            </ul>
                            <p>Launch new adverts and engage with your customers - an all-in-one platform that promotes your brand and builds engagement.</p>
                            <a href="#" className="view">
                                <span>View Case Study</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

        <section className={webcolor}>
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
                  <img style={{ width: "150%" }} src={webmobile} />
                </div>
              </div>
              <div className="left setCaseStudy">
                <div className="logo">
                  {/* <img src={webappmart} /> */}
                  <p className="logoImage">CREDMINDER</p>
                </div>
                <ul>
                  <li>
                    <div className="nor">USA</div>
                    <div className="hov">USA</div>
                  </li>
                  <li>
                    <div className="nor">IOS / Android</div>
                    <div className="hov">IOS / Android</div>
                  </li>
                  <li>
                    <div className="nor">Security</div>
                    <div className="hov">Security</div>
                  </li>
                </ul>
                <p>
                  Credminder is a US-based client . We rolled out an
                  enterprise-level IOS Application assisting their customers to
                  get reminders for their credentials that have an expiry date.
                </p>
                <a onClick={() => setCase2(!case2)} className="view">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={mercolor}>
                <div className="container">
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
                            <p>Launch new adverts and engage with your customers - an all-in-one platform that promotes your brand and builds engagement.</p>
                            <a href="#" className="view">
                                <span>View Case Study</span>
                            </a>
                        </div>
                        <div className="right">
                            <div className="img" onMouseOver={ ()=> {setmercolor('mersey purplebg')}} onMouseLeave={ ()=> {setmercolor('mersey')}}>
                                <img src={regeneration} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        <section className={mercolor}>
          <div className="container-full">
            <div className="same-full purple">
              <div className="left">
                <div className="logo">
                  <p className="logoImage">Work the System</p>
                </div>
                <ul>
                  <li>
                    <div className="nor">Consultancy</div>
                    <div className="hov">Consultancy</div>
                  </li>
                  <li>
                    <div className="nor">Website</div>
                    <div className="hov">Website</div>
                  </li>
                  <li>
                    <div className="nor">USA</div>
                    <div className="hov">USA</div>
                  </li>
                </ul>
                <p>
                  We have developed a Medium Enterprise-level Web Application
                  which enables teaching & mentoring people on business & life
                  management methods.
                </p>
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
                  <img style={{ width: "120%" }} src={regeneration} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose">
          <div className="half">
            <div className="colorbox">
              <div className="fivebox upperfive">
                <div className="ggrid">
                  <div className="img">
                    <img src={hg1} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg2} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg3} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg4} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg5} />
                  </div>
                </div>
              </div>

              <div className="tflx">
                <div className="threebox threeboxright">
                  <div className="ggrid">
                    <div className="img">
                      <img src={hg6} />
                    </div>
                  </div>

                  <div className="ggrid">
                    <div className="img">
                      <img src={hg7} />
                    </div>
                  </div>

                  <div className="ggrid">
                    <div className="img">
                      <img src={hg8} />
                    </div>
                  </div>
                </div>

                <div className="serveslider">
                  <ServiceSlider />
                </div>

                <div className="threebox threeboxleft">
                  <div className="ggrid">
                    <div className="img">
                      <img src={hg1} />
                    </div>
                  </div>

                  <div className="ggrid">
                    <div className="img">
                      <img src={hg2} />
                    </div>
                  </div>

                  <div className="ggrid">
                    <div className="img">
                      <img src={hg3} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="fivebox bottomfive">
                <div className="ggrid">
                  <div className="img">
                    <img src={hg5} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg6} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg7} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg8} />
                  </div>
                </div>

                <div className="ggrid">
                  <div className="img">
                    <img src={hg1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="half">
            <div className="c-box">
              <h6>Why</h6>
              <h2>
                di<span>pixels</span>
              </h2>
              <p>
                We are certified professionals who are here to help
                entrepreneurs, sole proprietors and small, medium & large
                enterprises scale their development, design, and digital
                marketing capabilities.
              </p>

              <div className="pixbox">
                <div className="sm">
                  <div className="data">
                    <div className="icn">
                      <img src={employee} />
                    </div>
                    <h6>Services</h6>
                    <h6>At your doorstep</h6>
                  </div>
                </div>

                <div className="bg video">
                  <div className="bgimg green-op">
                    <img src={whygreen} />
                  </div>
                  <Link to="/about-us">
                    <div className="data">
                      <div className="icn">
                        <img src={play} />
                      </div>
                      <h6>About Di Pixels</h6>
                    </div>
                  </Link>
                </div>

                <div className="sm blue">
                  <Link to="/contact">
                    <div className="data">
                      <div className="icn">
                        <img src={planetearth} />
                      </div>
                      <h5>3+</h5>
                      <h6>Global Power House</h6>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="pixbox">
                <div className="bg">
                  <div className="bgimg blue-op">
                    <img src={whyblue} />
                  </div>
                  <Link to="/services">
                    <div className="data">
                      <div className="icn">
                        <img src={arrow} />
                      </div>
                      <h6>
                        Step Into Our<br></br>Development Center
                      </h6>
                    </div>
                  </Link>
                </div>

                <div className="sm">
                  <Link style={{ color: "black" }} to="/case-studies">
                    <div className="data">
                      <div className="icn">
                        <img src={rocket} />
                      </div>
                      <h5>500+</h5>
                      <h6>Delivered Projects</h6>
                    </div>
                  </Link>
                </div>

                <div className="sm green">
                  <div className="data">
                    <div className="icn">
                      <img src={star} />
                    </div>
                    <h5>5 Star</h5>
                    <h6>Rated</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline">
          <div className="container">
            <h3>Start-to-end app development agency</h3>
            <p>
              This mobile app development agency is all in.<br></br>We provide
              app design and app development services for every stage of your
              mobile project.
            </p>

            <div className="roadmap">
              <div className="r-box ten thirdbox upbox">
                <div className="immg">
                  <img src={testing} />
                </div>
                <p>Client Requirements</p>
              </div>

              <div className="r-box twenty secondbox downbox">
                <div className="immg">
                  <img src={checklist} />
                </div>
                <p>Analysis</p>
              </div>

              <div className="r-box thirty firstbox upbox">
                <div className="immg">
                  <img src={image} />
                </div>
                <p>WireFrames</p>
              </div>

              <div className="r-box fourty firstbox downbox">
                <div className="immg">
                  <img src={revising} />
                </div>
                <p>Revising</p>
              </div>

              <div className="r-box fifty thirdbox upbox">
                <div className="immg">
                  <img src={check} />
                </div>
                <p>Confirmation</p>
              </div>

              <div className="r-box sixty secondbox downbox">
                <div className="immg">
                  <img src={ux} />
                </div>
                <p>UI & UX</p>
              </div>

              <div className="r-box seventy thirdbox upbox">
                <div className="immg">
                  <img src={brush} />
                </div>
                <p>Design Approved</p>
              </div>

              <div className="r-box eighty forthbox downbox">
                <div className="immg">
                  <img src={keyboard} />
                </div>
                <p>Developing</p>
              </div>

              <div className="r-box ninty thirdbox upbox">
                <div className="immg">
                  <img src={speedmeter} />
                </div>
                <p>Testing/QA</p>
              </div>

              <div className="r-box hurdred forthbox downbox">
                <div className="immg">
                  <img src={smiley} />
                </div>
                <p>Go Live</p>
              </div>
            </div>
          </div>
        </section>

        <section className="caroselslider">
          <Simple />
        </section>
      </div>
      <TopFooter />
    </div>
  );
}
export default Home;
