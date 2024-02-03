import React from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/web_development_image.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import design from "../../../assets/icons/best/design.svg";
const WebApp = () => {
  const componentDetails = [
    {
      backgroundColor: "#0078EF",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/web-dev-white.svg"),
      gradientContainerSectionName: ["Service ", " / Web Development"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08 ",
      gradientContainerWhiteHeading: "Web Development",
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
      image: require("../../../assets/inner_page_images/cms-websites.svg"),
      title: "CMS Based Websites",
      description:
        "Our developers have experience building websites for almost every industry and on almost every platform including WordPress, Drupal and Joomla.",
    },
    {
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "Ecommerce Applications",
      description:
        "If you have a store or need new one, we can surely help you with the same. We can create a store for you from scratch or, leverage popular platforms such as WooCommerce, Shopify or Magento.",
    },
    {
      image: require("../../../assets/inner_page_images/api.svg"),
      title: "API Development And Documentation",
      description:
        "We can help you if you need to build or, consume an API. Our teams have worked with all sort of APIs including Voice, Video, Payment, Cloud, Accounting etc.",
    },
    {
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
      title: "Website Rescue And Optimisation",
      description:
        "Is your website hacked or running slow? Our cross sectional team of developers and hosting experts can help rescue it and prevent further issues.",
    },
    {
      image: require("../../../assets/inner_page_images/web-applications.svg"),
      title: "Web Applications",
      description:
        "Being a web development company, we have built all sorts of web applications from online forms, workflows to whole management systems. We work on projects both big and small.",
    },
    {
      image: require("../../../assets/inner_page_images/software-development.svg"),
      title: "Software Development",
      description:
        "Our engineering team has a lot of experience in developing complex web based business systems with multiple users and roles and that connect with CRM, Accounting, Inventory and Other Systems.",
    },
    {
      image: require("../../../assets/inner_page_images/fixing-bugs.svg"),
      title: "Fixing Bugs And Issues",
      description:
        "We can fix any bugs or issues on your website. We have an experienced team of web developers, web designers, and support personnel for hire to help you with any website or web application problem.",
    },
    {
      image: require("../../../assets/inner_page_images/business-automation.svg"),
      title: "Business Automation",
      description:
        "Do you have a manual process that you need to automate? Our team can develop a customised, secure and scalable system as per your business needs.",
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
    <div className="landinpage webApp">
      <InnerHeader componentDetails={componentDetails} />
      <IndustryLeaders
        count={[1, 2]}
        categoryCardDetails={categoryCardDetails}
        industryLeadersDetails={industryLeadersDetails}
        buttonTitle="Schedule Time To Talk"
        imageContainer={true}
      />
    </div>
  );
};

export default WebApp;
