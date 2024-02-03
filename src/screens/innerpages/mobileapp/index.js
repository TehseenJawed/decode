import React, {useState} from "react";
import InnerHeader from "../../../components/InnerHeader";
import Image from "../../../assets/inner_page_images/mobile_development_image.png";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import AppsAndSolutions from "../../../components/AppsAndSolutions";
import TopFooter from '../../../components/footer/topfooter'
const MobileApp = () => {
  
  const SlidePage = useState(1)
  const componentDetails = [
    {
      backgroundColor: "#FDCD08",
      gradientContainerImage: Image,
      headerImage: require('../../../assets/inner_page_images/app-dev.svg'),
      gradientContainerSectionName: ["Service ", " / Mobile App Development"],
      gradientContainerSectionNameUnderlineColor: "#000000",
      gradientContainerWhiteHeading: "App Development",
      gradientContainerRedHeading: "",
      buttonContainerTitle: "We Build Handcrafted Mobile Apps",
      buttonContainerDescription: "At Dipixels we are dedicated to work with you and your team on planning and strategy. We help you bring your ideas into reality. We help to drive customer engagement & sales by building applications for Apple & Google app stores. We have hands on experience with both native and hybrid mobile apps. We custom-build, design, and deploy an enterprise app you can use to streamline and mobilize your inward-facing systems.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/apple.svg"),
      title: "IOS",
      description:
        "We provide complete IOS application with unique,amazing and engaging interface with full functionality",
    },
    {
      image: require("../../../assets/inner_page_images/android.svg"),
      title: "Android",
      description:
        "We develop complete android application with interesting, astonishing and engaging interface with full functionality.",
    },
    {
      image: require("../../../assets/inner_page_images/hybrid.svg"),
      title: "Hybrid",
      description:
        "We develop application which can work on both andriod and Ios with amazing interface and complete functionality.",
    },
  ];
  const mobileFeaturesPoints = [
    {
      title: "We work with you and your team on planning and strategy.",
      order: 4,
    },
    {
      title:
        "We help you drive customer engagement and sales by building applications for purchase on the Apple and Google app stores.",
      order: 8,
    },
    {
      title:
        "We have hands on experience with both native and hybrid mobile apps.",
      order: 4,
    },
    {
      title:
        "We custom-build, design, and deploy an enterprise app you can use to streamline and mobilize your inward-facing systems.",
      order: 8,
    },
  ];

  const industryLeadersDetails = [
    {
      heading:
        "If Your Ecommerce Website Isn’t Set Up Correctly It Isn’t Going To Bring You Any Money. And In Fact, It Will Probably Cost You.",
      paragraph:
        "If you’re serious about getting apps to improve the way your business operates, or launching high-end and beautiful mobile apps for iOS and Android, then you should know that there’s only one place you can get a dedicated team of skilled developers working exclusively on your vision: right here at Di Pixels.",
    },
    {
      heading: "Services",
    },
  ];

  // ***************************************************************************************

  const appsAndSolutionsComponentDetails = [
    {
      mainHeading: "Consumer Apps",
      description: [
        "We develop apps that will solve your specific problems, based on a deep and thorough understanding of your personal needs. Just tell us you have to have, and we’ll give it to you. Your app will be customized, developed, and handcrafted from the ground up.",
        "When we’re taking your app through development, you’ll be completely in the loop. From strategy, to delivery, to support, we keep up transparency while maintaining competitive costs. Because we maintain a large team of developers with a wide array of skills, your app will be available by default on any mobile platform — iOS or Android.",
      ],
      subHeading: [
        "Here’s What We Can Do For Your Consumer Apps:",
        "Get Consumer Apps For:",
      ],
      subHeadingPoints: [
        [
          "Create personalized design and themes",
          "Develop them for a variety of devices",
          "Customize them for standout user experiences",
          "Optimize them for speed, performance, and ease of use across devices",
          "Release them onto the Apple App Store or the Google Play Store",
          "Provide ongoing support and feature enhancements",
        ],
        [
          "Commerce",
          "Social media",
          "Education",
          "News media",
          "Lifestyle",
          "Entertainment media",
          "Gaming",
        ],
      ],
      buttonTitle: "Schedule Time To Talk",
      image: require("../../../assets/inner_page_images/consumer-apps.png"),
      // styling: {
      //   margin: "0 0 0 30px",
      //   width: "100%",
      //   height: "100%",
      // },
      bgColor: { backgroundColor: "#F5F7FA", padding: "30px 0" },
    },

    {
      mainHeading: "Enterprise Apps",
      description: [
        "Improved efficiency, faster communication and a greater ROI. That’s just some of what we can make your back-end enterprise apps do for you. Our team develops solutions for your entire organization through consistent, scalable and adaptable platforms.",
        "Once we understand your needs, we’ll stuff your apps full of powerful features to take your efficiency and customer relations to the next level. Your app will remain cost-effective, reliable, and easy-to-use, and will also represent a drastic step forward in the efficiency of your business.",
      ],
      subHeading: ["Get Enterprise Apps For:"],
      subHeadingPoints: [
        [
          "Customer service",
          "Document management",
          "Automated billing systems",
          "Accounting management",
          "Payment processing",
          "Customer relationship management (CRM)",
          "Enterprise resource planning (ERP)",
          "Business intelligence",
          "Executive dashboards",
          "Business continuity planning (BCP)",
          "HR management",
          "Messaging and collaboration systems",
          "Remote sales and field force enablement",
        ],
      ],
      buttonTitle: "Schedule Time To Talk",
      image: require("../../../assets/inner_page_images/enterprise-apps.png"),
    },
  ];
  return (<>
    <div className="landinpage mobileApp">
      <InnerHeader componentDetails={componentDetails} />
      <IndustryLeaders
        count={[1,2,3,4,5]}
        categoryCardDetails={categoryCardDetails}
        industryLeadersDetails={industryLeadersDetails}
        firstSectionButton="Schedule Time To Talk"
        categoryCardsPerRow="4"
        style={{
          minwidth: "330px",
          padding: "20px 20px 10px",
          margin: "0px 0px 60px",
        }}
        mobileFeaturesPoints={mobileFeaturesPoints}
      />
      <AppsAndSolutions
      slider = {SlidePage}
        appsAndSolutionsComponentDetails={appsAndSolutionsComponentDetails}
      />
    </div>
    <TopFooter />
  </>);
};

export default MobileApp;
