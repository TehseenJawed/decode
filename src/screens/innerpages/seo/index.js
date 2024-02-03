import React from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/graphicdesign.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import TopFooter from "../../../components/footer/topfooter";
const Devops = () => {
  const componentDetails = [
    {
      backgroundColor: "#71d803",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/seo-white.svg"),
      gradientContainerSectionName: ["Service ", " / SEO"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "SEO",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "",
      buttonContainerDescription: "",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/on-page-seo.svg"),
      title: "On-page SEO",
      description:
        "We can optimize your sites to rank higher and earn more relevant traffic in search engines such as Google, Bing, and Yahoo.",
    },
    {
      image: require("../../../assets/inner_page_images/off-page-seo.svg"),
      title: "Off-page SEO",
      description:
        "We can set your website's structure, content, and speed such that your site comes at the top of the search engines.",
    },
    {
      image: require("../../../assets/inner_page_images/youtube-seo.svg"),
      title: "YouTube SEO",
      description:
        "We can optimize your videos, playlist, and description such that your videos come on search engines and increase your number of views on each video.",
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
          count={[1, 2, 3, 4, 5, 6]}
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

export default Devops;
