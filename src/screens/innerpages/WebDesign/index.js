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
      backgroundColor: "#17a2b8",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/web-design-white.svg"),
      gradientContainerSectionName: ["Service ", " / Web Designing"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Web Designing",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "Web Designing and Modeling",
      buttonContainerDescription:
        "Get your website visualized before it's even made, our top-notch designers will design your site with the latest trends.                 ",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/responsive-design.svg"),
      title: "Responsive Design",
      description:
        "We modal web pages to render verity of devices of different screen sizes.",
    },
    {
      image: require("../../../assets/inner_page_images/user-interface.svg"),
      title: "User Interface",
      description:
        "Designing visually appealing and highly digital experience for customers is our primary goal.",
    },
    {
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "User Experience",
      description:
        "Our user research experts helps you engage customers to your brand.",
    },
    {
      image: require("../../../assets/inner_page_images/high-fidility.svg"),
      title: "High Fidelity Design",
      description:
        "Our high-fidelity sites take you as close as possible to a true representation of the user interface.",
    },
    {
      image: require("../../../assets/inner_page_images/interaction.svg"),
      title: "Interaction Design.",
      description:
        "We create user centered design for  users  needs, aims and behavior when interacting with products.",
    },
    {
      image: require("../../../assets/inner_page_images/visual.svg"),
      title: "Visual Design",
      description:
        "Our designers catch the glance of potential customers through their visual design techniques to hold their attention for longer period.",
    },
    {
      image: require("../../../assets/inner_page_images/motion-design.svg"),
      title: "Motion Design",
      description:
        "We follow a unique way to create motion graphics videos that helps customer learn your brand better.",
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
          count={[1]}
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
