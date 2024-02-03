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
      backgroundColor: "#458bd7",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/software-solution.svg"),
      gradientContainerSectionName: ["Service ", " / Software Solution"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Software Solutions",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "Highest-Rated Software Solution Company",
      buttonContainerDescription:
        "We understand that it is really difficult to run a business especially when you are an entrepreneur, small or medium business. Running a business is hard and time-consuming but it should not take time away from your family and we will make sure that your family gets the time from you what they deserve. Automating your business is the key to progress. We offer solution that cater your needs and can make your business run smoothly. You can share your hurdles and difficulties with us and we will come up with a solution that will make your operation smoother and will give you some time spend with family.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/online-shopping.svg"),
      title: "Ecommerce Software",
      description:
        "We can  enable your businesses to conduct transactions for goods and services wholly or partially over the Internet.",
    },
    {
      image: require("../../../assets/inner_page_images/logistic-software.svg"),
      title: "Logistics Software",
      description:
        "Get the Top-Notch Logistics Management Software for your Business & boost your Profits. Get the best Logistics Delivery Software to tackle your last mile delivery challenges.",
    },
    {
      image: require("../../../assets/inner_page_images/supply-chain.svg"),
      title: "Supply Chain Management",
      description:
        "We can Automate Processes, Impress Customers, Empower Employees & Create Revenue. Fast Implementation And A Solution That Will Fit Your Business Now And In The Future.",
    },
    {
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "Shopping Cart Software",
      description:
        "We create shopping cart for your online store to ensure the user gets the best experience in online shopping.",
    },
    {
      image: require("../../../assets/inner_page_images/inventory-management.svg"),
      title: "Inventory Management Software",
      description:
        "We create Cutting-Edge Automation and Advanced Routes To Manage Any Warehouse. Track Every Stock Move With our Apps with instant access & Integrated Software.",
    },
    {
      image: require("../../../assets/inner_page_images/accounting-software.svg"),
      title: "Accounting Software",
      description:
        "Businesses run better with Reports,Ledgering,Tracking Expenses,Managing cash flow & creating Invoices.easy online accounting software for all types of businesses.",
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
      <div className="landinpage DevOps">
        <InnerHeader componentDetails={componentDetails} />
        <IndustryLeaders
          count={[1, 2, 3, 4]}
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
