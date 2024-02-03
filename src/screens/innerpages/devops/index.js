import React from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/devops_development_image.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import TopFooter from "../../../components/footer/topfooter";
const Devops = () => {
  const componentDetails = [
    {
      backgroundColor: "#797bd9",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/devops1.svg"),
      gradientContainerSectionName: ["Service ", " / DevOps"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "DevOps",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "Highest-Rated Company In Industry",
      buttonContainerDescription:
        "Planning, collaborating and shipping faster with DiPixels. We provide 24/7 DevOps services for easy and fast development, testing, deployment, monitoring, managing and more, making it easier for you with the help of our experts at DiPixels.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const Devops = [
    {
      id: 1,
      title: "Code",
      image: require("../../../assets/inner_page_images/cms-websites.svg"),
    },
    {
      id: 2,
      title: "Build",
      image: require("../../../assets/inner_page_images/software-development.svg"),
    },
    {
      id: 2,
      title: "Release",
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
    },
    {
      id: 2,
      title: "Deploy",
      image: require("../../../assets/inner_page_images/business-automation.svg"),
    },
    {
      id: 2,
      title: "Monitor",
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/code.svg"),
      title: "Code",
      description:
        "Here the developers are doing code development and code review. When the code is ready, they merge it. In DevOps practice, it is important to share a code tool between Ops and developers teams like Github or Gitlab.",
    },
    {
      image: require("../../../assets/inner_page_images/build.svg"),
      title: "Build",
      description:
        "This step is the first one toward automation. The goal here is to build the source code into one desired format, compiling, testing and deploying in a particular place of the infrastructure. ",
    },
    {
      image: require("../../../assets/inner_page_images/release.svg"),
      title: "Release",
      description:
        "The code has passed the testing (continuous integration) process and is ready to be deployed.",
    },
    {
      image: require("../../../assets/inner_page_images/deployment.svg"),
      title: "Deploy",
      description:
        "The operational team is deploying the new feature in production. But as automation is one of the DevOps principles, it is possible to set up continuous deployment. ",
    },
    {
      image: require("../../../assets/inner_page_images/monitor.svg"),
      title: "Monitor",
      description:
        "The monitoring is an important step as it allows to fix incidents faster and to create a better experience for your end-user.",
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
      paragraph:
        "Regardless of how complex or even small your needs are , our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably.",
    },
  ];

  return (
    <>
      <div className="landinpage devops">
        <InnerHeader componentDetails={componentDetails} />
        <IndustryLeaders
          count={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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
