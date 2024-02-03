import React, { useState } from "react";
import InnerHeader from "../../components/InnerHeader";
import Image from "../../assets/inner_page_images/about_image.png";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";
import "../../styles/innerpages/skillspage/style.css";
import "../../styles/home/index.css";
import { Link } from "react-router-dom";
import Package3Tick from "../../assets/icons/package3-tick.svg";
import Package2Tick from "../../assets/icons/package2-tick.svg";
import Package1Tick from "../../assets/icons/package1-tick.svg";
import TopFooter from "../../components/footer/topfooter";
import { Tag } from "antd";

const Skills = (props) => {
  const [totalPayment, setTotalPayment] = useState(0)
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      gradientContainerImage: Image,
      headerImage: require("../../assets/inner_page_images/box.svg"),
      gradientContainerSectionName: ["", "Packages"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Packages",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "",
      buttonContainerDescription: "",
      buttonContainerGreenLinesImage: GreenLineImage,
    },
  ];
  const [leaders, setLeaders] = useState(true);
  const PackagePrice = (totalPay, addOn) => {
    
    return totalPay + addOn
  }
  
  console.log(totalPayment)
  const packagesTags = [
    {
      label: "Logo Designing",
    },
    {
      label: "Web Design & Development",
    },
    {
      label: "Mobile App Development",
    },
    {
      label: "E-Commerce",
    },
    {
      label: "Search Engine Optimization",
    },
    {
      label: "Animation",
    },

    {
      label: "Hosting Packages",
    },
  ];
  const [newPackage, setNewPackage] = useState(0);
  function Packages() {
    if (newPackage == 1) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop">
              <p className="header">STARTER WEB PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">500</span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />5
                Pages Website Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                HTML Based
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />2
                Banner Designs
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Contact/ Query Form
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />6
                Revisions
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Hover Effects
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Sliding Banner 2 Stock Photos (You can provide us more)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />5
                Professional Email ID's
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Complete W3C Certified HTML
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Complete Deployment
              </li>
              <li>
                {" "}
                <h6>Add on</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />1
                Year Web Hosting -$100
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Content Management System (CMS) – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Mobile Responsive – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Search Engine Submission – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Professional Content/Copywriting – $350 (5 Pages) – (Per Page is
                $70)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Online Appointment/Scheduling/Booking Feature – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Online Payment Integration – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Shopping Cart Integration – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Additional Professional Email ID – $20 (Each)
              </li>
            </div>
            <div className="packageBtn">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 500,
                    packageName: "STARTER WEB PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2">
              <p className="header">PROFESSIONAL WEB PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,000</span>
               
              {/* <div className="setPriceBack2 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Up to 10 Pages Website Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                CMS (WordPress)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />3
                Banner Designs
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Unlimited Revision
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Contact/Query Form
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />3
                Stock Photos (You can provide us more)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Sliding Banner
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Hover Effects
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />8
                Professional Email ID’s
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Search Engine Submission
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Complete W3C Certified HTML
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Industry specified Team of Expert Designers and Developers
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Complete Deployment
              </li>
              <li>
                {" "}
                <h6>Add on</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />1
                Year Web Hosting – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Mobile Responsive – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Professional Content/Copywriting – $430 (5 Pages) – (Per Page is
                $97)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Online Appointment/Scheduling/Booking Feature – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Online Payment Integration – $200
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Shopping Cart Integration – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Additional Professional Email ID – $20 (Each)
              </li>
            </div>
            <div className="packageBtn2">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1000,
                    packageName: "PROFESSIONAL WEB PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3">
              <p className="header">PREMIUM WEB PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">2,500</span>
               
              {/* <div className="setPriceBack3 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Up to 15 Pages Website Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                WordPress or Php Development
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                10 Banner Designs
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Unlimited Revision
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Interactive Sliding Banners
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                10 Stock Images
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Special Hover Effects
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                CMS(WordPress or Custom)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Mobile Responsive
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Booking/Online Ordering Integration (Optional)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Online Payment Integration (Optional)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                FREE 12 Months Domain & Hosting
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                10 Professional Email ID’s
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google Friendly Sitemap
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Search Engine Submission
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Complete W3C Certified HTML
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Industry specified Team of Designers and Developers
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Complete Deployment
              </li>
              <li>
                {" "}
                <h6>Add on</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Professional Content/Copywriting – $730 (10 Pages) – (Per Page
                is $73)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Shopping Cart Integration – $250
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Additional Professional Email ID – $20 (Each)
              </li>
            </div>
            <div className="packageBtn3">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 2500,
                    packageName: "PREMIUM WEB PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>{" "}
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    } else if (newPackage == 2) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop" style={{ height: "200px" }}>
              <p className="header">STARTER MOBILE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign "></span>
              <span className="setMainPrice " style={{ fontSize: "20px" }}>
                Request A Quote
              </span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                One Time Fee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Android & iOS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Interactive User End Experience
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Trendy User Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                User Friendly Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Live Database Sync
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Product Catalog
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Shopping Cart
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Shipping Method
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                COD/Bank Transfer/ Payment Gateway
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Checkout
              </li>
            </div>
            <div className="packageBtn">
              <Link to="/contact">
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2" style={{ height: "200px" }}>
              <p className="header">PROFESSIONAL MOBILE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign "></span>
              <span className="setMainPrice " style={{ fontSize: "20px" }}>
                Request A Quote
              </span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                One Time Fee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Android & iOS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Interactive User End Experience
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Trendy User Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                User Friendly Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Live Database Sync
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Latest News
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Recent Activities
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Members
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Groups
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Departments
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Discussions
              </li>
            </div>
            <div className="packageBtn2">
              <Link to="/contact">
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3" style={{ height: "200px" }}>
              <p className="header">PREMIUM MOBILE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign "></span>
              <span className="setMainPrice " style={{ fontSize: "20px" }}>
                Request A Quote
              </span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                One Time Fee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Android & iOS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Interactive User End Experience
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Trendy User Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                User Friendly Interface
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Live Database Sync
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Categories
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Product Catalog
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Shopping Cart
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Shipping Method
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                COD/Bank Transfer/Payment Gateway
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Checkout
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Pincode
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Advanced Filters
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Custom Options in Product List
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Quantity +/- in Home/ Product Page
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Live Price Change
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Delivery Slot
              </li>
            </div>
            <div className="packageBtn3">
              <Link to="/contact">
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    } else if (newPackage == 3) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop" style={{ height: "200px" }}>
              <p className="header">STARTER ECOMMERCE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,500</span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Customized Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Up-to 100 Products
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Content Management System (CMS)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Mini Shopping Cart Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Payment Module Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Easy Product Search
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Dedicated designer & developer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Unlimited Revisions
              </li>
              <li>
                {" "}
                <h6>More Features</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Dedicated Project Manager
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                100% Satisfaction Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                100% Unique Design Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                100% Money Back Guarantee *
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                24*7 Customer Support
              </li>
            </div>
            <div className="packageBtn">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1500,
                    packageName: "Ecommerce STARTER ECOMMERCE PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2" style={{ height: "200px" }}>
              <p className="header">PROFESSIONAL ECOMMERCE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">3,000</span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Customized Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Up-to 250 Products
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Content Management System (CMS)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Full Shopping Cart Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Payment Module Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Easy Product Search
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />5
                Promotional Banner
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Dedicated designer & developer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Unlimited Revisions
              </li>
              <li>
                {" "}
                <h6>More Features</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Dedicated Project Manager
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                100% Satisfaction Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                100% Unique Design Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                100% Money Back Guarantee *
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                24*7 Customer Support
              </li>
            </div>
            <div className="packageBtn2">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 3000,
                    packageName: "Ecommerce PROFESSIONAL ECOMMERCE PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3" style={{ height: "200px" }}>
              <p className="header">PREMIUM ECOMMERCE PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">5,000</span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Customized Design
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Up-to 500 Products
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Custom Development on PHP or Other Language *
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                API Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                User Signin & Signup area
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                User Dashboard Area
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Full Shopping Cart Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Payment Module Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Easy Product Search
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />5
                Promotional Banner
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Dedicated designer & developer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Unlimited Revisions
              </li>
              <li>
                {" "}
                <h6>More Features</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Dedicated Project Manager
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                100% Satisfaction Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                100% Unique Design Guarantee
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                100% Money Back Guarantee *
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                24*7 Customer Support
              </li>
            </div>
            <div className="packageBtn3">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 5000,
                    packageName: "Ecommerce PREMIUM ECOMMERCE PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    } else if (newPackage == 4) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop">
              <p className="header">STARTER SEO PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">500</span>
              <span className="setPriceUnit ">/mo</span>
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                10 Keywords Plan(Moderate Competitive)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                In-depth Site Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Content Duplicacy Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Initial Backlinks analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Google Penalty Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Mobile Usability Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Competition Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Keyword Research
              </li>
              <li>
                {" "}
                <h6>On-Page Optimization Content</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Title & Meta Tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Content Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Mobile Site Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Page Speed Analysis & Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                HTML Code Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Internal Link Structuring
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Pages H tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Canonicalization/301 Redirect
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Image & Hyperlink Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Robots.txt Creation/Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Sitemap Creation
              </li>
              <li>
                {" "}
                <h6>Marketing & Backlinking Local</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Blog Writing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />1
                Content Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />2
                Press Release Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />5
                Press Release Social Bookmarking
              </li>
              <li>
                {" "}
                <h6>Search Optimization Monthly</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                NAP Syndication
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Citation Building
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Google & Bing My Local Listing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Updating Pages & Schema Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Classified Submissions
              </li>
              <li>
                {" "}
                <h6>Reporting Customer Support</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Search Engine Rank Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                SEO Reports
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Google Analytics Analysis Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Activity Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Monthly Action Plan
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Email/ Chat/ Telephone
              </li>
            </div>
            <div className="packageBtn">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 500,
                    packageName:
                      "Search Engine Optimization STARTER SEO PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2">
              <p className="header">PROFESSIONAL SEO PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,000</span>
              <span className="setPriceUnit ">/mo</span>
              {/* <div className="setPriceBack2 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                30 Keywords Plan (Competitive)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                In-depth Site Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Content Duplicacy Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Initial Backlinks analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Google Penalty Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Mobile Usability Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Competition Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Keyword Research
              </li>
              <li>
                {" "}
                <h6>On-Page Optimization Content</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Title & Meta Tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Content Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Mobile Site Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Page Speed Analysis & Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                HTML Code Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Internal Link Structuring
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Pages H tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Canonicalization/301 Redirect
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Image & Hyperlink Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Robots.txt Creation/Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Sitemap Creation
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Google Webmaster Tools Setup
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Google Analytics Setup
              </li>
              <li>
                {" "}
                <h6>Marketing & Backlinking Local</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />1
                Blog Writing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />4
                Content Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />3
                Press Release Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                15 Press Release Social Bookmarking
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />1
                Guest Blog Outreach
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Guest Blog Social Bookmarking
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Magazine / News Placement
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Q&A Posting
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Premium PR Distribution
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                DOC / PDF Submission
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />1
                Infographic Creation & Distribution
              </li>
              <li>
                {" "}
                <h6>Search Optimization Monthly</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                NAP Syndication
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Citation Building
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Google & Bing My Local Listing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Updating Pages & Schema Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Classified Submissions
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Coupon Distribution
              </li>
              <li>
                {" "}
                <h6>Reporting Customer Support</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Search Engine Rank Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                SEO Reports
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Google Analytics Analysis Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Activity Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Monthly Action Plan
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Email/ Chat/ Telephone
              </li>
            </div>
            <div className="packageBtn2">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1000,
                    packageName:
                      "Search Engine Optimization PROFESSIONAL SEO PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3">
              <p className="header">PREMIUM SEO PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,500</span>
              <span className="setPriceUnit ">/mo</span>
              {/* <div className="setPriceBack3 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                50 Keywords Plan (Competitive)
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                In-depth Site Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Content Duplicacy Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Initial Backlinks analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google Penalty Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Mobile Usability Check
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Competition Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Keyword Research
              </li>
              <li>
                {" "}
                <h6>On-Page Optimization Content</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Title & Meta Tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Content Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Mobile Site Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Page Speed Analysis & Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                HTML Code Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Internal Link Structuring
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Pages H tags Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Canonicalization/301 Redirect
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Image & Hyperlink Optimization
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Robots.txt Creation/Analysis
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Sitemap Creation
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google Webmaster Tools Setup
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google Analytics Setup
              </li>
              <li>
                {" "}
                <h6>Marketing & Backlinking Local</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />2
                Blog Writing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />6
                Content Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />5
                Press Release Writing & Sharing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                25 Press Release Social Bookmarking
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />2
                Guest Blog Outreach
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Guest Blog Social Bookmarking
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Magazine / News Placement
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Q&A Posting
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Premium PR Distribution
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                DOC / PDF Submission
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />1
                Infographic Creation & Distribution
              </li>
              <li>
                {" "}
                <h6>Search Optimization Monthly</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                NAP Syndication
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Citation Building
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google & Bing My Local Listing
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                $99 /month
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Updating Pages & Schema Integration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Classified Submissions
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Coupon Distribution
              </li>
              <li>
                {" "}
                <h6>Reporting Customer Support</h6>
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Search Engine Rank Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                SEO Reports
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Google Analytics Analysis Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Activity Report
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Monthly Action Plan
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Email/ Chat/ Telephone
              </li>
            </div>
            <div className="packageBtn3">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1500,
                    packageName:
                      "Search Engine Optimization PREMIUM SEO PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>{" "}
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    } else if (newPackage == 5) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop">
              <p className="header">STARTER ANIMATION PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">700</span>
               
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                30 Second Video
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Professional Script
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Storyboard
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Animation
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Voice – Over & Sound Effects
              </li>
            </div>
            <div className="packageBtn">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 700,
                    packageName: "Animation STARTER ANIMATION PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2">
              <p className="header">PROFESSIONAL ANIMATION PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,400</span>
               
              {/* <div className="setPriceBack2 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                60 Second Video
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Professional Script
              </li>
              {/* <li> <img className="setTickImage" src={Package2Tick} alt=">" />Sample Theme</li> */}
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Storyboard
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Animation
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Voice - Over & Sound Effects
              </li>
            </div>
            <div className="packageBtn2">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1400,
                    packageName: "Animation PROFESSIONAL ANIMATION PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3">
              <p className="header">PREMIUM ANIMATION PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">2,000</span>
               
              {/* <div className="setPriceBack3 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                90 Second Video
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Professional Script
              </li>
              {/* <li> <img className="setTickImage" src={Package3Tick} alt=">" />Sample Theme</li> */}
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Storyboard
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Animation
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Voice - Over & Sound Effects
              </li>
            </div>
            <div className="packageBtn3">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 2000,
                    packageName: "Animation PREMIUM ANIMATION PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>{" "}
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    } else if (newPackage == 6) {
      return (
        <div className="mainPackages">
          {/* Package 1 Start */}
          <div className="packages">
            <div className="packageTop">
              <p className="header">STARTER HOSTING PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">300</span>
              <span className="setPriceUnit ">/yr</span>
              {/* <div className="setPriceBack "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Free Domain Name
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Host 1 Website
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />3 Sub
                Domains
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />5 GB
                SSD Disk Space
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                50 GB Monthly Transfer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Entry Power
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                PHP, Python, Node.JS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />5
                MySQL Databases
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                25 POP Email Accounts
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Basic Protection
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Website Builder
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                CPanel + Softaculous
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Free Migration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package1Tick} alt=">" />
                Money Back Guarantee
              </li>
            </div>
            <div className="packageBtn">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 300,
                    packageName: "Animation STARTER HOSTING PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 1 End */}

          {/* Package 2 Start */}
          <div className="packages">
            <div className="packageTop2">
              <p className="header">PROFESSIONAL HOSTING PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">700</span>
              <span className="setPriceUnit ">/yr</span>
              {/* <div className="setPriceBack2 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Free Domain Name
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Host 1 Website
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                10 Sub Domains
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                25 GB SSD Disk Space
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                UL Monthly Transfer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Extreme Power
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                PHP, Python, Node.JS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                50 MySQL Databases
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                100 POP Email Accounts
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Litespeed Server
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Website Builder
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                CPanel + Softaculous
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Free SSL
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Free Migration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package2Tick} alt=">" />
                Money Back Guarantee
              </li>
            </div>
            <div className="packageBtn2">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 700,
                    packageName: "Animation PROFESSIONAL HOSTING PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>
              </Link>
            </div>
          </div>
          {/* Package 2 End */}

          {/* Package 3 Start */}
          <div className="packages">
            <div className="packageTop3">
              <p className="header">PREMIUM HOSTING PACKAGE</p>
               
            </div>
            <div className="setMainPriceBox">
              <span className="setDollarSign ">$</span>
              <span className="setMainPrice ">1,400</span>
              <span className="setPriceUnit ">/yr</span>
              {/* <div className="setPriceBack3 "></div> */}
            </div>
            <div className="setListPage">
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Free Domain Name
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Host UL Website
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                UL Sub Domains
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                75 GB SSD Disk Space
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                UL Monthly Transfer
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Extreme Power
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                PHP, Python, Node.JS
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                UL MySQL Databases
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                UL POP Email Accounts
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Litespeed Server
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Imunify 360
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Free Cloudflare
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Website Builder
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                CPanel + Softaculous
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Free SSL
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Free Migration
              </li>
              <li>
                {" "}
                <img className="setTickImage" src={Package3Tick} alt=">" />
                Money Back Guarantee
              </li>
            </div>
            <div className="packageBtn3">
              <Link
                to={{
                  pathname: "/paypal",
                  state: {
                    packageValue: 1400,
                    packageName: "Animation PREMIUM HOSTING PACKAGE",
                  },
                }}
              >
                <button>BUY NOW</button>{" "}
              </Link>
            </div>
          </div>
          {/* Package 3 End */}
        </div>
      );
    }
    return (
      <div className="mainPackages">
        {/* Package 1 Start */}
        <div className="packages">
          <div className="packageTop">
            <p className="header">STARTUP LOGO PACKAGE</p>
            
          </div>
          <div className="setMainPriceBox">
            <span className="setDollarSign ">$</span>
            <span className="setMainPrice ">50</span>
             
            {/* <div className="setPriceBack "></div> */}
          </div>
          <div className="setListPage">
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />3 Basic
              Logo Designs
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              10 Revisions
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              Free Color Options
            </li>
            {/* <li> <img className="setTickImage" src={Package1Tick} alt=">" />Free</li> */}
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              Free Icons
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />2 to 3
              Business Days Rotation
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              Final Files (.PNG, .JPG, .PDF, .TIFF)
            </li>
            <li>
              {" "}
              <h6>More Features</h6>
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              Dedicated Project Manager
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" /> 100%
              Unique & Custom Logo Design Concept(s)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              100% Satisfaction Guarantee
            </li>
            {/* <li> <img className="setTickImage" src={Package1Tick} alt=">" />30 Days Refund Warranty</li> */}
            <li>
              {" "}
              <img className="setTickImage" src={Package1Tick} alt=">" />
              24 * 7 Customer Support
            </li>
            {/* <li> <img className="setTickImage" src={Package1Tick} alt=">" />2 to 3 Business Days Rotation</li> */}
            {/* <li> <img className="setTickImage" src={Package1Tick} alt=">" />Final Files (.PNG, .JPG, .PDF, .TIFF)</li> */}
          </div>
          <li style={{ listStyleType: "none", textAlign: "center" }}>
            {" "}
            <input type="checkbox" onClick={() => setTotalPayment(PackagePrice(50,50))} name="vehicle1" value="Bike"/>
            <label for="vehicle1"><h6>Add on $50 for 12 Hours Rush Delivery</h6></label><br></br>
          </li>
          <div className="packageBtn">
            <Link
              to={{
                pathname: "/paypal",
                state: {
                  packageValue: totalPayment !== 0 ? totalPayment : 50,
                  packageName: "Logo Designing STARTUP LOGO PACKAGE",
                },
              }}
            >
              <button>BUY NOW</button>
            </Link>
          </div>
        </div>
        {/* Package 1 End */}

        {/* Package 2 Start */}
        <div className="packages">
          <div className="packageTop2">
            <p className="header">STANDARD LOGO PACKAGE</p>
            
          </div>
          <div className="setMainPriceBox">
            <span className="setDollarSign ">$</span>
            <span className="setMainPrice ">200</span>
             
            {/* <div className="setPriceBack2 "></div> */}
          </div>
          <div className="setListPage">
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />5 High
              Quality Logo Designs
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Unlimited Revisions
            </li>
            {/* <li> <img className="setTickImage" src={Package2Tick} alt=">" />Unlimited Revisions</li> */}
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Free Color Options
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Free Icons
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Free Invoice Design
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Stationery Design (Business Card, Letterhead)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />2 to 3
              Business Days
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Final Files (.PNG, .JPG, .PDF, .TIFF, .AI, .EPS)
            </li>
            <li>
              {" "}
              <h6>More Features</h6>
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              Dedicated Project Manager
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              100% Unique & Custom Logo Design Concept(s)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              100% Satisfaction Assurance
            </li>
            {/* <li> <img className="setTickImage" src={Package2Tick} alt=">" />30 Days Refund Warranty</li> */}
            <li>
              {" "}
              <img className="setTickImage" src={Package2Tick} alt=">" />
              24 * 7 Customer Support
            </li>
          </div>
          <li style={{ listStyleType: "none", textAlign: "center" }}>
            {" "}
            <input type="checkbox" onClick={() => setTotalPayment(PackagePrice(200,50))} name="vehicle1" value="Bike"/>
            <label for="vehicle1"><h6>Add on $50 for 12 Hours Rush Delivery</h6></label><br></br>
            
          </li>
          <div className="packageBtn2">
            <Link
              to={{
                pathname: "/paypal",
                state: {
                  packageValue: totalPayment !== 0 ? totalPayment : 200,
                  packageName: "Logo Designing STANDARD LOGO PACKAGE",
                },
              }}
            >
              <button>BUY NOW</button>
            </Link>
          </div>
        </div>
        {/* Package 2 End */}

        {/* Package 3 Start */}
        <div className="packages">
          <div className="packageTop3">
            <p className="header">PREMIUM LOGO PACKAGE</p>
            
          </div>
          <div className="setMainPriceBox">
            <span className="setDollarSign ">$</span>
            <span className="setMainPrice ">300</span>
             
            {/* <div className="setPriceBack3 "></div> */}
          </div>
          <div className="setListPage">
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              10 Premium Logo Designs
            </li>
            {/* <li> <img className="setTickImage" src={Package3Tick} alt=">" />By 8 Designers</li> */}
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Unlimited Revisions
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Free Color Options
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Free Icons
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />2 to 3
              Business Days
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Final Files (.PNG, .JPG, .PDF, .TIFF, AI, .EPS)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Stationery Design (Business Card, Letterhead, Envelope)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Free Invoice Design
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />2 Sided
              Flyer (OR) Bi-Fold Brochure Design
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Social Media Size Images
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Social Media Pages Design (Any 3)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              T-Shirt Design, Signage Design
            </li>
            <li>
              {" "}
              <h6>More Features</h6>
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              Dedicated Project Manager
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              100% Unique & Custom Logo Design Concept(s)
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              100% Satisfaction Assurance
            </li>
            <li>
              {" "}
              <img className="setTickImage" src={Package3Tick} alt=">" />
              24 * 7 Customer Support
            </li>
          </div>
          <li style={{ listStyleType: "none", textAlign: "center" }}>
            {" "}
            <input type="checkbox" onClick={() => setTotalPayment(PackagePrice(300,50))} name="vehicle1" value="Bike"/>
            <label for="vehicle1"><h6>Add on $50 for 12 Hours Rush Delivery</h6></label><br></br>
          </li>
          <div className="packageBtn3">
            <Link
              to={{
                pathname: "/paypal",
                state: {
                  packageValue: totalPayment !== 0 ? totalPayment : 300,
                  packageName: "Logo Designing PREMIUM LOGO PACKAGE",
                },
              }}
            >
              <button>BUY NOW</button>{" "}
            </Link>
          </div>
        </div>
        {/* Package 3 End */}
      </div>
    );
  }
  function CustomizePackages(){
    return(
      <div className="customizePackage">
        <div className="customizeHeader">Want To Create Your Own Package</div>
        <div className="customPackage1">
          <div className="Card1Head">Customize Your Own Package</div>
          <div className="CardDesc">We saved a spot for you to customize your package.</div>
          <Link to="/custom-package"><button className="Package1Btn">GET STARTED NOW</button></Link>
        </div>
        <div className="customPackage2">
        <div className="Card2Head">Hire us on hourly basis</div>
          <div className="CardDesc2">We saved a spot for you to customize your package.</div>
          <Link to="/custom-package"><button className="Package2Btn">GET STARTED NOW</button></Link>
        </div>
      </div>
    )
  }
  function setPackage(i) {
    console.log(i);
    const Tags = document.getElementById(`tag` + i);
    Tags.classList.add("setTagActive");
    for (var a = 0; a <= 6; a++) {
      if (a !== i) {
        const Tag1 = document.getElementById(`tag` + a);
        Tag1.classList.remove("setTagActive");
      }
    }
    setNewPackage(i);
    console.log(`tag` + i);
  }
  return (
    <>
      <InnerHeader componentDetails={componentDetails} />

      <div className="setTagSets">
        {packagesTags.map((v, i) => (
          <div id={`tag${i}`} onClick={() => setPackage(i)} className="setTag">
            {v.label}
          </div>
        ))}
      </div>
      <Packages />

      <CustomizePackages />
      <TopFooter />
      {/*<div className="uc-container">
            <img src={require('../../assets/images/uc-bg.jpg')}/>
        </div> */}
    </>
  );
};

export default Skills;
