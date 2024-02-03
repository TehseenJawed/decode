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
      backgroundColor: "#ed1e79",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/content-writing.svg"),
      gradientContainerSectionName: ["Service ", " / Content Writing"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Content Writing",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "We House Industry Leading Content Writers",

      buttonContainerDescription:
        "We offer content writing for your website. We write and can edit your web content, typically for digital marketing purposes. Our services can include but is not limited to blog posts, ebooks, product category descriptions, landing pages etc.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/web-content.svg"),
      title: "Web Content",
      description:
        "Web content is the textual, visual, or aural content that is encountered as part of the user experience on websites.",
    },
    {
      image: require("../../../assets/inner_page_images/blogging.svg"),
      title: "Blogging",
      description:
        "Our content writer deeply focus on maintaining the flow of the blogging and uses the relevant images and color cobination that makes the blog interesting for readers.",
    },
    {
      image: require("../../../assets/inner_page_images/social-media.svg"),
      title: "Social Media",
      description:
        "We can help you an professional social media writing. Our content writers regularly write social media posts in the language of your target audience.",
    },
    {
      image: require("../../../assets/inner_page_images/ad-n-sale.svg"),
      title: "Ad And Sales Copy",
      description:
        "Our content writers are skilled in getting the customer's attention and also know how to cater them with their needs.",
    },
    {
      image: require("../../../assets/inner_page_images/industry-write.svg"),
      title: "Expert, or industry writing",
      description:
        "Our content writers have prodigious research skills making them expert writers in any industrial field.",
    },
    {
      image: require("../../../assets/inner_page_images/news-write.svg"),
      title: "Journalistic/News Writing",
      description:
        "Our content writers engage in the daily news, gathering information, and covering current affairs making them great journalistic writers.",
    },
    {
      image: require("../../../assets/inner_page_images/creative-writing.svg"),
      title: "Creative Writing",
      description:
        "Our content writers with their exceptional skills provide the client with excellent material and focus on their utmost satisfaction.",
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
          count={[1, 2, 3, 4, 5, 6, 7]}
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
