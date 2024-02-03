import React, { useState } from "react";
import InnerHeader from "../../components/InnerHeader";
import Image from "../../assets/inner_page_images/about_image.png";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";
import "../../styles/home/index.css";
import "../../styles/aboutus/style.css";
import TopFooter from "../../components/footer/topfooter";
import {FaPlus} from 'react-icons/fa'
const CustomPackage = (props) => {
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      headerImage: require("../../assets/inner_page_images/about-us.svg"),
      gradientContainerImage: Image,
      gradientContainerSectionName: ["", ""],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Custom Package",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "",
      buttonContainerDescription: "",
      buttonContainerGreenLinesImage: GreenLineImage,
    },
  ];
  const [price, setCustomPrice] = useState(0)
  function CustomForm(){
      return(
      <div className="CustomPackage">
          <div className="PackHalf1">
              <div className="customHeading">Custom Quote Form</div>
              <div className="customForm">
                  <input type="text" className="inputText" placeholder="Full Name"/>
                  <input type="text" className="inputText" placeholder="Email"/>
                  <input type="text" className="inputText" placeholder="Phone Number"/>
                  <input type="text" className="inputText" placeholder="$0"/>
              </div>
              <div className="customHeading" >I am interested in</div>
              <div className="formSet">
                <div className="insideForm">
                  <div className="insideItem">Brand Design <FaPlus size={20} className="plusIcon"/></div>
                  <div className="setBrandDesign">
                    <div className="itemHeader">Items</div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 29)}>4 Logo Design Ideas <span>$29</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 99)}>6 Logo Design Ideas <span>$99</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 129)}>8 Logo Design Ideas <span>$129</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 179)}>10 Logo Design Ideas <span>$179</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 199)}>12 Logo Design Ideas <span>$199</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 249)}>Unlimited Logo Design Ideas <span>$249</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 199)}>Illustration 1 Concept <span>$199</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 299)}>Illustration 3 Concept <span>$299</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 399)}>Illustration 5 Concept <span>$399</span></div>
                    <div className="brandItem" onClick={() => setCustomPrice(price + 599)}>Illustration Unlimited Concepts <span>$599</span></div>
                  </div>
                </div>
              </div>
          </div>
          <div className="PackHalf2">
              <div className="customHeading2">Order Summary</div>
              <div className="customForm2">
                  <div className="cardHeader">Total Cost</div>
                  <div className="quoteWorth">${price}</div>
                  <button className="orderButton">Order Now</button>
              </div>
          </div>
      </div>
      )
  }
  return (
    <>
      <InnerHeader componentDetails={componentDetails} />
      <CustomForm />
      <TopFooter />
    </>
  );
};

export default CustomPackage;
