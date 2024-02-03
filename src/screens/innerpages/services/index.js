import React from "react";
import InnerHeader from "../../../components/InnerHeader";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import Image from "../../../assets/inner_page_images/about_image.png";
import Servicesection from "../../../components/servicesection/index.js";
import "../../../styles/services/style.css";
import TopFooter from "../../../components/footer/topfooter";

const Services = (props) => {
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      gradientContainerImage: Image,
      headerImage: require("../../../assets/inner_page_images/service.svg"),
      gradientContainerSectionName: ["", "Services"],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Services",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "We transform your ideas into reality. Dream it and we will build it.",
      buttonContainerDescription:
        "We are dedicated professionals who are committed to help you lay the digital foundation of your business. We are here to provide the experience you wish your clients should see by innovative and ingenious solutions for your business. Everyday, we strive to assist you in augmenting your brand’s online visibility, expand the reach & engagement with your targeted audience and eventually driving sales.",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];
  const webDevelopmentServices = [
    {
      id: 1,
      title: "CMS Based Websites",
      image: require("../../../assets/inner_page_images/cms-websites.svg"),
    },
    {
      id: 2,
      title: "Ecommerce Application",
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
    },
    {
      id: 3,
      title: "API Development And Documentation",
      image: require("../../../assets/inner_page_images/api.svg"),
    },
    {
      id: 4,
      title: "Website Rescue And Optimisation",
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
    },
    {
      id: 5,
      title: "Web Applications",
      image: require("../../../assets/inner_page_images/web-applications.svg"),
    },
    {
      id: 6,
      title: "Software Development",
      image: require("../../../assets/inner_page_images/software-development.svg"),
    },
    {
      id: 7,
      title: "Fixing Bugs And Issues",
      image: require("../../../assets/inner_page_images/fixing-bugs.svg"),
    },
    {
      id: 8,
      title: "Business Automation",
      image: require("../../../assets/inner_page_images/business-automation.svg"),
    },
    // {
    //   id: 8,
    //   title: "",
    //   image: "",
    // },
  ];
  const graphicDesignServices = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/visual-identity.svg"),
      title: "Visual Identity Design",
    },
    {
      id: 2,
      image: require("../../../assets/inner_page_images/ad-n-sale.svg"),
      title: "Marketing & Advertising Graphic Design",
    },
    {
      id: 3,
      image: require("../../../assets/inner_page_images/interface-graphics.svg"),
      title: "User Interface Graphic Design",
    },
    {
      id: 4,
      image: require("../../../assets/inner_page_images/packaging-design.svg"),
      title: "Packaging Graphic Design",
    },
    {
      id: 5,
      image: require("../../../assets/inner_page_images/environment-graphics.svg"),
      title: "Environmental Graphic Design",
    },
    {
      id: 6,
      image: require("../../../assets/inner_page_images/illustration-graphics.svg"),
      title: "Art And Illustration For Graphic Design",
    },
    // {
    //   id: 6,
    //   image: "",
    //   title: "",
    // },
  ];
  const webDesignServices = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/responsive-design.svg"),
      title: "Responsive Design",
    },
    {
      id: 2,
      image: require("../../../assets/inner_page_images/user-interface.svg"),
      title: "User Interface",
    },
    {
      id: 3,
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "User Experience",
    },
    {
      id: 4,
      image: require("../../../assets/inner_page_images/high-fidility.svg"),
      title: "High Fidelity Design",
    },
    {
      id: 5,
      image: require("../../../assets/inner_page_images/interaction.svg"),
      title: "Interaction Design.",
    },
    {
      id: 6,
      image: require("../../../assets/inner_page_images/visual.svg"),
      title: "Visual Design",
    },
    {
      id: 7,
      image: require("../../../assets/inner_page_images/motion-design.svg"),
      title: "Motion Design",
    },
    // {
    //   id: 7,
    //   image: "",
    //   title: "",
    // },
  ];
  const MobileAppDevelopment = [
    {
      id: 1,
      title: "IOS",
      image: require("../../../assets/inner_page_images/apple.svg"),
    },
    {
      id: 2,
      title: "Android",
      image: require("../../../assets/inner_page_images/android.svg"),
    },
    {
      id: 2,
      title: "Hybrid",
      image: require("../../../assets/inner_page_images/hybrid.svg"),
    },
    // {
    //   id: 2,
    //   title: "",
    //   image: "",
    // },
  ];
  const EcommerceApplication = [
    {
      id: 1,
      title: "Woocommerce",
      image: require("../../../assets/inner_page_images/woocommerce.svg"),
    },
    {
      id: 2,
      title: "Magento",
      image: require("../../../assets/inner_page_images/magento.svg"),
    },
    {
      id: 2,
      title: "Shopify",
      image: require("../../../assets/inner_page_images/shopify.svg"),
    },
    // {
    //   id: 2,
    //   title: "",
    //   image: "",
    // },
  ];
  const DigitalMarketing = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/cms-websites.svg"),
      title: "SEO",
    },
    {
      id: 2,
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "Pay-Per-Click",
    },
    {
      id: 3,
      image: require("../../../assets/inner_page_images/socialmedia.svg"),
      title: "Social Media Marketing",
    },
    {
      id: 4,
      image: require("../../../assets/inner_page_images/web-optimization.svg"),
      title: "Content Marketing",
    },
    // {
    //   id: 4,
    //   image: "",
    //   title: "",
    // },
  ];
  const Devops = [
    {
      id: 1,
      title: "Code",
      image: require("../../../assets/inner_page_images/code.svg"),
    },
    {
      id: 2,
      title: "Build",
      image: require("../../../assets/inner_page_images/software-development.svg"),
    },
    {
      id: 2,
      title: "Release",
      image: require("../../../assets/inner_page_images/product-release.svg"),
    },
    {
      id: 2,
      title: "Deploy",
      image: require("../../../assets/inner_page_images/business-automation.svg"),
    },
    {
      id: 2,
      title: "Monitor",
      image: require("../../../assets/inner_page_images/monitor.svg"),
    },
    // {
    //   id: 2,
    //   title: "",
    //   image: "",
    // },
  ];
  const SoftwareSolution = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/online-shopping.svg"),
      title: "Ecommerce Software",
    },
    {
      id: 2,
      image: require("../../../assets/inner_page_images/logistic-software.svg"),
      title: "Logistics Software",
    },
    {
      id: 3,
      image: require("../../../assets/inner_page_images/supply-chain.svg"),
      title: "Supply Chain Management",
    },
    {
      id: 4,
      image: require("../../../assets/inner_page_images/ecommerce.svg"),
      title: "Shopping Cart Software",
    },
    {
      id: 5,
      image: require("../../../assets/inner_page_images/inventory-management.svg"),
      title: "Inventory Management Software",
    },
    {
      id: 6,
      image: require("../../../assets/inner_page_images/accounting-software.svg"),
      title: "Accounting Software",
    },
    // {
    //   id: 6,
    //   image: "",
    //   title: "",
    // },
  ];
  const SEO = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/on-page-seo.svg"),
      title: "On-Page SEO",
    },
    {
      id: 2,
      image: require("../../../assets/inner_page_images/off-page-seo.svg"),
      title: "Off-Page SEO",
    },
    {
      id: 3,
      image: require("../../../assets/inner_page_images/youtube-seo.svg"),
      title: "YouTube SEO",
    },
    // {
    //   id: 3,
    //   image: "",
    //   title: "",
    // },
  ];
  const ContentWriting = [
    {
      id: 1,
      image: require("../../../assets/inner_page_images/web-content.svg"),
      title: "Web Content",
    },

    {
      id: 2,
      image: require("../../../assets/inner_page_images/blogging.svg"),
      title: "Blogging",
    },

    {
      id: 3,
      image: require("../../../assets/inner_page_images/social-media.svg"),
      title: "Social Media",
    },
    {
      id: 4,
      image: require("../../../assets/inner_page_images/ad-n-sale.svg"),
      title: "Ad And Sales Copy",
    },
    {
      id: 5,
      image: require("../../../assets/inner_page_images/industry-write.svg"),
      title: "Expert, or industry writing",
    },
    {
      id: 6,
      image: require("../../../assets/inner_page_images/news-write.svg"),
      title: "Journalistic/News Writing",
    },
    {
      id: 7,
      image: require("../../../assets/inner_page_images/blog.svg"),
      title: "Creative Writing",
    },
    // {
    //   id: 7,
    //   image: "",
    //   title: "",
    // },
  ];
  return (
    <>
      <InnerHeader componentDetails={componentDetails} />
      {/*<div className="uc-container">
            <img src={require('../../../assets/images/uc-bg.jpg')}/>
        </div>*/}
      <div className="services">
        <Servicesection
          setArray={[]}
          setList={5}
          category={graphicDesignServices}
          pageLink="graphics"
          serviceimage={require("../../../assets/images/services/graphicDesigning.png")}
          servicetitle="Graphic Designing"
          sdescription="We offer creativity, personalization and innovative visual designs. We believe great visuals is a keen step in maintaining the relationship between the business and its audience. Our designers create a visual masterpiece that End-user finds more attractive and engaging."
          para2=""
        />
        <Servicesection
          category={webDesignServices}
          setList={6}
          setArray={[1]}
          pageLink="webdesign"
          serviceimage={require("../../../assets/images/services/webdesgin.png")}
          servicetitle="Web Designing"
          sdescription="Get your site visualized before it's even made, our top-notched designers will design your site with the latest trends and design."
          // para2='When we’re taking your app through development, you’ll be completely in the loop.'
        />
        <Servicesection
          setArray={[1, 2]}
          category={webDevelopmentServices}
          setList={7}
          pageLink="webapp-development"
          serviceimage={require("../../../assets/images/services/web-dev.png")}
          servicetitle="Web Application Development"
          sdescription="We offer Web Application Development Services to help you build anything from basic to complex web applications. Regardless of how complex or small your needs are, Our dedicated team of web developers."
          para2="Regardless of how complex or small your needs are. Our dedicated in-house team of web developers and project managers will ensure that the job gets done with the highest level of professionalism and most cost affordably."
        />
        <Servicesection
          category={DigitalMarketing}
          setList={3}
          setArray={[1, 2, 3]}
          pageLink="digitalmarketing"
          serviceimage={require("../../../assets/images/services/digitalMarketing.png")}
          servicetitle="Digital Marketing"
          sdescription="At Di Pixels we provide you digital marketing services to give you the best digital experience you deserve. Our beliefs lies in providing everlasting impression by proving digital marketing best solutions with our dedication in our services."
        />
        <Servicesection
          setArray={[1, 2, 3, 4]}
          category={SoftwareSolution}
          setList={5}
          pageLink="software-solution"
          serviceimage={require("../../../assets/images/services/softwareSolution.png")}
          servicetitle="Software Solutions"
          sdescription="We understand that it is really difficult to run a business especially when you are an entrepreneur, small or medium business. Running a business is hard and time-consuming but it should not take time away from your family."
          // para3='Create and orchestrate your software components with the help of our DevOps engineers.'
        />
        <Servicesection
          category={MobileAppDevelopment}
          setList={2}
          setArray={[1, 2, 3, 4, 5]}
          pageLink="mobileapp-development"
          serviceimage={require("../../../assets/images/services/mobile-dev.png")}
          servicetitle="Interactive Mobile Apps For iOS And Android"
          sdescription="We can help you in getting apps to improve the way your business operates, or launch a high-end, Interactive and user-friendly mobile apps for iOS and Android. At Dipixels we are committed to provide a dedicated team of skilled developers working exclusively on your vision."
          // para2='When we’re taking your app through development, you’ll be completely in the loop. From strategy, to delivery, to support, we keep up transpare.'
        />
        <Servicesection
          setArray={[1, 2, 3, 4, 5, 6]}
          setList={2}
          category={SEO}
          pageLink="seo"
          serviceimage={require("../../../assets/images/services/seo.png")}
          servicetitle="SEO"
          sdescription="We provide search engine optimization for your website to increase its visibility for relevant searches. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.          "
          // para2='We deliver comprehensive DevOps services including environment configuration, automatic deployment, and consultation to future-proof your software.'
          // para3='Create and orchestrate your software components with the help of our DevOps engineers.'
        />
        <Servicesection
          setArray={[1, 2, 3, 4, 5, 6, 7]}
          category={ContentWriting}
          setList={6}
          pageLink="content-writing"
          serviceimage={require("../../../assets/images/services/content-writing.png")}
          servicetitle="Content Writing"
          sdescription="We offer content writing for your website. We write and can edit your web content, typically for digital marketing purposes. Our services can include but is not limited to blog posts, ebooks, product category descriptions, landing pages etc."
          // para2='We deliver comprehensive DevOps services including environment configuration, automatic deployment, and consultation to future-proof your software.'
          // para3='Create and orchestrate your software components with the help of our DevOps engineers.'
        />
        <Servicesection
          category={EcommerceApplication}
          setArray={[]}
          setList={2}
          pageLink="ecommerce"
          serviceimage={require("../../../assets/images/services/Ecom-apps.png")}
          servicetitle="E-commerce Application Development"
          sdescription="If your E-commerce website is not set up correctly it will not bring you any sales. And in fact, it will probably cost you. Today’s business world is competitive, and to survive this competition, You need professionally developed tools to make you the best."
          // para2="Today’s business world is competitive, and while it’s relatively easy to get started, it’s very hard to rise to the top. "
        />
        <Servicesection
          setArray={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          category={Devops}
          setList={4}
          pageLink="devops"
          serviceimage={require("../../../assets/images/services/devops.png")}
          servicetitle="DevOps"
          sdescription="Planning, collaborating and shipping faster with DiPixels. We provide 24/7 DevOps services for easy and fast development, testing, deployment, monitoring, managing and more, making it easier for you with the help of our experts at DiPixels."
          // para2='We deliver comprehensive DevOps services including environment configuration, automatic deployment, and consultation to future-proof your software.'
          // para3='Create and orchestrate your software components with the help of our DevOps engineers.'
        />
      </div>
      {/**/}

      <TopFooter />
    </>
  );
};

export default Services;
