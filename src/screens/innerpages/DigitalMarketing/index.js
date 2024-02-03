import React from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/devops_development_image.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import TopFooter from "../../../components/footer/topfooter";
const DigitalMarketing = () => {
  const componentDetails = [
    {
      backgroundColor: "#FF824C",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/digital-marketing.svg"),
      gradientContainerSectionName: ["Service ", " / Digital Marketing"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Digital Marketing",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "Highest Rated Digital Marketing Company",
      buttonContainerDescription:
        "At Di Pixels we provide you digital marketing services which enhance your digital experience. Our belief lies in providing everlasting and interactive impression by providing digital marketing solutions.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/cms-websites.svg"),
      title: "SEO",
      description:
        "At Di Pixels we provide you digital marketing services to give you the best digital experience you deserve.",
    },
    {
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "Pay-per-Click",
      description:
        "Our beliefs lies in providing everlasting impression for customers by proving digital marketing best solutions with our dedication in our services.",
    },
    {
      image: require("../../../assets/inner_page_images/socialmedia.svg"),
      title: "Social Media Marketing",
      description:
        "Making your brand easy and interactive for customers by identifiying and providing required services at the right time on right screen.",
    },
    {
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
      title: "Content Marketing",
      description:
        "All the solutions we provide to our customers are available for you as well to digitilize your brand and grow it.",
    },
  ];
  const industryLeadersDetails = [
    {
      heading: "Industry Leaders In Web Development",
      paragraph:
        "When it comes to website development, we push the limits and set new standards by creating functionally rich and aesthetically stunning websites. Best-in-class UX and compelling functionality under the hood – we deliver the best of both worlds.",
    },
    {
      heading: "Categories",
      paragraph: "",
    },
  ];

  return (
    <>
      <div className="landinpage devops">
        <InnerHeader componentDetails={componentDetails} />
        <IndustryLeaders
          count={[1, 2, 3]}
          categoryCardDetails={categoryCardDetails}
          industryLeadersDetails={industryLeadersDetails}
          buttonTitle="Schedule Time To Talk"
          imageContainer={true}
        />
      </div>
      <TopFooter />
    </>
  );
};

export default DigitalMarketing;
