import "../../../styles/innerpages/ecommerce.css";
import React, {useState} from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/ecomerce_development_image.png";
import IndustryLeaders from "../../../components/IndustryLeaders";
import AppsAndSolutions from "../../../components/AppsAndSolutions";
import Button from "../../../components/UI/Button";
import TopFooter from "../../../components/footer/topfooter";
import { Link } from "react-router-dom";
const Ecommerce = () => {
  const SlidePage = useState(0)
  const [slidePage, setSlidePage] = SlidePage
  const componentDetails = [
    {
      backgroundColor: "#ED1F26",
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/ecommerce-white.svg"),
      gradientContainerSectionName: ["Service ", " / Ecommerce"],
      gradientContainerSectionNameUnderlineColor: "#000000",
      gradientContainerWhiteHeading: "Ecommerce App",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "Get A High-Profit Ecommerce Website To Bring In Revenue Like Clockwork",
      buttonContainerDescription:
        "If your ecommerce website isn’t set up correctly it isn’t going to bring you any money. And in fact, it will probably cost you.Today’s business world is competitive, and while it’s relatively easy to get started, it’s very hard to rise to the top.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];

  const categoryCardDetails = [
    {
      image: require("../../../assets/inner_page_images/woocommerce.svg"),
      title: "Woocommerce",
      description:
        "Sell online with the fully customizable, open-source eCommerce platform. Make Payments. Get Newsletter. View Features.Highlights: Newsletter Available, through WOO commerce integration.",
    },
    {
      image: require("../../../assets/inner_page_images/magento.svg"),
      title: "Magento",
      description:
        "Create engaging, shoppable experiences with Magento Commerce. See how our next-generation technology, global partner ecosystem, and extensions marketplace can breathe life into your business.",
    },
    {
      image: require("../../../assets/inner_page_images/shopify.svg"),
      title: "Shopify",
      description:
        "Our Shopify developers handle everything from marketing and payments, to secure checkout and shipping.",
    },
  ];
  const industryLeadersDetails = [
    {
      heading: "Beautiful Mobile Apps For Ios And Android",
      paragraph:
        "If you’re serious about getting apps to improve the way your business operates, or launching high-end and beautiful mobile apps for iOS and Android, then you should know that there’s only one place you can get a dedicated team of skilled developers working exclusively on your vision: right here at Di Pixels.",
    },
    {
      heading: "Categories",
    },
  ];

  const appsAndSolutionsComponentDetails = [
    {
      mainHeading: "Hosted Ecommerce Solutions",
      description: [
        "If you’ve heard of Software as a Service (SaaS), this is it. Just getting started? This option is great for a first-time ecommerce website. You’ll get a complete online shopping cart system, an integrated product catalogue tool (preconfigured for easy implementation) and a website that can be tailored to your brand identity.",
      ],
      subHeading: ["Plus, You Can Also Choose To Have The Following:"],
      subHeadingPoints: [
        [
          "Shopping Cart",
          "Product Database",
          "Online Payment Processing",
          "Shipping Options",
          "Promotional Tools",
          "Traffic/Customer Reports",
          "Content Management Tools",
        ],
      ],
      buttonTitle: "Schedule Time To Talk",
      image: require("../../../assets/inner_page_images/hosted-ecommerce-solutions.png"),
      styling: {
        margin: "0px",
        width: "100%",
        height: "100%",
      },
    },
    {
      mainHeading: "Advanced Ecommerce Solutions",
      description: [
        "If you’ve heard of Software as a Service (SaaS), this is it. Just getting started? This option is great for a first-time ecommerce website. You’ll get a complete online shopping cart system, an integrated product catalogue tool (preconfigured for easy implementation) and a website that can be tailored to your brand identity.",
      ],
      subHeading: [
        "In Addition To The Features Available With A Hosted Solution, You Can Get:",
      ],
      subHeadingPoints: [
        [
          "Open-Source or Microsoft technologies",
          "Custom application interface",
          "programming",
          "Product database integration",
          "Legacy system integration",
          "Enterprise system integration",
          "development",
          "Scalability with full feature capacity",
        ],
      ],
      buttonTitle: "Schedule Time To Talk",
      image: require("../../../assets/inner_page_images/advanced-ecommerce-solutions.png"),
      styling: {
        margin: "0px",
        width: "100%",
        height: "100%",
      },
    },
  ];
  const pointsArray = [
    "They have a layout this isn’t aesthetic, usable, or quick-loading.",
    "Their site doesn’t incorporate the ease of use and functionality customers need for the GREAT experiences that will make them linger and keep coming back.",
    "It isn't SEO friendly.",
    " It has no integration with your business operations apps and your product catalog.",
    "They aren’t set up to get easy reports and statistics to quickly measure performance and make the decisions that bring your site to its fullest potential.",
    "It isn’t easy to update and maintain by your staff.",
  ];
  return (
    <>
      <div className="landinpage ecommerce ">
        <InnerHeader componentDetails={componentDetails} />
        <IndustryLeaders
          count={[]}
          categoryCardDetails={categoryCardDetails}
          industryLeadersDetails={industryLeadersDetails}
          firstSectionButton="Schedule Time To Talk"
          categoryCardsPerRow="4"
          style={{
            minwidth: "330px",
            padding: "20px 20px 10px",
            margin: "0px 0px 60px",
          }}
        />

        <div className="mobileApp_unAcceptableSection">
          <div className="unAcceptableSection">
            <h1>
              If You Want To Build An Online Store, But You Aren’t Sure Where To
              Start, Here Are Some Common Problems People Have & What You Should
              Avoid
            </h1>
            {pointsArray &&
              pointsArray.length > 0 &&
              pointsArray.map((i, k) => (
                <div className="point" k={i}>
                  <span className="counter">{`${k + 1}.`}</span>
                  <p className="listContent">{i}</p>
                </div>
              ))}
            <h1 className="unAcceptable_heading">
              We can help you to make it right!
            </h1>
            <p>
              Your site needs all those options, especially in today’s
              competitive business world. But here’s the good news: we can
              provide all that, and more.
            </p>
            <p>
              You’ll get to select from an entire range of ecommerce packages,
              software, and shopping cart systems that provide you with the best
              value for your investment. Not only will our ecommerce experts
              design and develop a complete moneymaking website for you, but
              we’ll also provide you with the support and maintenance you need
              to compete in the online marketplace.
            </p>
            <div className="unAcceptableSection_buttonContainer">
              <Link onClick={() => setSlidePage(0)} className="view">
                <span>Hosted Ecommerce Solution</span>
              </Link>
              <Link onClick={() => setSlidePage(1)} className="view">
                <span>Advance Ecommerce Solution</span>
              </Link>
            </div>
          </div>
        </div>

        <AppsAndSolutions
        slider = {SlidePage}
          appsAndSolutionsComponentDetails={appsAndSolutionsComponentDetails}
        />
      </div>
      <TopFooter />
    </>
  );
};

export default Ecommerce;
