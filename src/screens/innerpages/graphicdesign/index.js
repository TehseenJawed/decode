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
      backgroundColor: "#dc3545",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/web-design.svg"),
      gradientContainerSectionName: ["Service ", " / Graphic Design"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Graphic Designing",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "Our Most Innovative & Personalized Graphic Designs at your reach.",
      buttonContainerDescription:
        "We offer creativity, personalization and innovative visual designs. We believe great visuals is a keen step in maintaining the relationship between the business and its audience. Our designers create a visual masterpiece that End-user finds more attractive and engaging.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/visual-identity.svg"),
      title: "Visual identity Design",
      description:
        "A brand is a relationship between a business and its audience. Visual Graphic Designing makes it possible for you to feel the look of how your brand may look once design is completed.",
    },
    {
      image: require("../../../assets/inner_page_images/ad-n-sale.svg"),
      title: "Marketing & advertising graphic design",
      description:
        "Companies depend on successful marketing efforts to tap into their target audience’s decision-making process, Our graphic designers make sure to create a visual masterpiece.",
    },
    {
      image: require("../../../assets/inner_page_images/interface-graphics.svg"),
      title: "User interface graphic design",
      description:
        "Our UI designers specialize in all platforms and we make sure that the user receives a smooth and friendly experience throughout the application.",
    },
    {
      image: require("../../../assets/inner_page_images/packaging-design.svg"),
      title: "Packaging graphic design",
      description:
        "Package design communicates directly to consumers, our packaging designers create concepts, develop mockups and create the print-ready files for your product.",
    },
    {
      image: require("../../../assets/inner_page_images/environment-graphics.svg"),
      title: "Environmental graphic design",
      description:
        "Our graphic designers visually connect people to places to improve their overall experience by making spaces more memorable, interesting, informative and easier to navigate.",
    },
    {
      image: require("../../../assets/inner_page_images/illustration-graphics.svg"),
      title: "Art and illustration for graphic design",
      description:
        "Our graphic and illustrators create compositions to communicate and solve problems, from fine art to decoration to storytelling illustrations our illustrators make sure you get the product.",
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
          count={[]}
          categoryCardDetails={categoryCardDetails}
          industryLeadersDetails={industryLeadersDetails}
          buttonTitle="Schedule Time To Talk"
          imageContainer={true}
        />
      </div>
      {/* <TopFooter /> */}
    </>
  );
};

export default Devops;
