import "../../styles/components/industryLeaders.css";
import React from "react";
import Backend from "../../assets/inner_page_images/backend.png";
import Database from "../../assets/inner_page_images/database.png";
import Frontend from "../../assets/inner_page_images/frontend.png";
import Arrows from "../../assets/inner_page_images/arrows.png";
import GreenArrow from "../../assets/inner_page_images/green-small-arrow.png";
import CategoryCard from "../UI/CategoryCard";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { Col, Row } from "react-bootstrap";
import { BiWindows } from "react-icons/bi";

import Brief from "../../assets/inner_page_images/taking-brief.svg";
import Brainstorm from "../../assets/inner_page_images/documents.svg";
import design from "../../assets/inner_page_images/design.svg";

import Identification from "../../assets/inner_page_images/identification.svg";
import ContentCreation from "../../assets/inner_page_images/content-creation.svg";
import InterfaceDesign from "../../assets/inner_page_images/interface-design.svg";

import Plan from "../../assets/inner_page_images/plan.svg";
import Design from "../../assets/inner_page_images/create-n-promote.svg";
import Development from "../../assets/inner_page_images/web.svg";

// import Plan from "../../assets/inner_page_images/plan.svg";
import CreateNPromote from "../../assets/inner_page_images/create-n-promote.svg";
import Optimization from "../../assets/inner_page_images/optimization.svg";

import Analysis from "../../assets/inner_page_images/analysis.svg";
import Implimentation from "../../assets/inner_page_images/implementer.svg";
import Deployment from "../../assets/inner_page_images/deployment.svg";
import Maintainance from "../../assets/inner_page_images/maintenance.svg";

import InfoGather from "../../assets/inner_page_images/data-gathering.svg";
import Optimize from "../../assets/inner_page_images/optimization.svg";
import WebTrafic from "../../assets/inner_page_images/web-traffic.svg";

import PreWriting from "../../assets/inner_page_images/notes.svg";
import Composing from "../../assets/inner_page_images/compose.svg";
import PostWriting from "../../assets/inner_page_images/postWriting.svg";

import Comunication from "../../assets/inner_page_images/conversation.svg";
import Integration from "../../assets/inner_page_images/integration.svg";
import Automation from "../../assets/inner_page_images/automation.svg";

import ResearchDigital from "../../assets/inner_page_images/research-digital.svg";
import CreateNPromoteDigital from "../../assets/inner_page_images/create-n-promote-digital.svg";
import OptimizationDigital from "../../assets/inner_page_images/optimization-digital.svg";


const IndustryLeaders = ({
  buttonTitle,
  categoryCardDetails,
  count,
  industryLeadersDetails,
  categoryCardsPerRow,
  style,
  imageContainer,
  firstSectionButton,
  mobileFeaturesPoints,
}) => {
  const graphicDesigning = [
    { image: Brief, title: "Taking Brief" },
    { image: Brainstorm, title: "Research and Brainstorm" },
    { image: design, title: "Sketching and Designing" },
  ];
  const webDesigning = [
    { image: Identification, title: "Goal Identification" },
    { image: ContentCreation, title: "Content Creation" },
    { image: InterfaceDesign, title: "Interface Design" },
  ];
  const webDevelopment = [
    { image: Plan, title: "Planning" },
    { image: Design, title: "Design" },
    { image: Development, title: "Development" },
  ];
  const digitalMarketing = [
    { image: ResearchDigital, title: "Research" },
    { image: CreateNPromoteDigital, title: "Create and Promote" },
    { image: OptimizationDigital, title: "Optimize" },
  ];
  const softwareSolution = [
    { image: Analysis, title: "Analysis and Planning" },
    { image: Implimentation, title: "Implementation and Releasing" },
    { image: Maintainance, title: "Testing and Maintenance" },
  ];
  const appDevelopment = [
    { image: Analysis, title: "Analysis and Planing" },
    { image: Development, title: "Development" },
    { image: Deployment, title: "Deployment and Support" },
  ];
  const seo = [
    { image: InfoGather, title: "Information Gathering" },
    { image: Optimize, title: "Adding content and Optimization" },
    { image: WebTrafic, title: "Maximizing Traffic" },
  ];
  const ecommerce = [
    { image: Brainstorm, title: "Research" },
    { image: Design, title: "Design and development" },
    { image: Deployment, title: "Release" },
  ];
  const contentWriting = [
    { image: PreWriting, title: "Pre-Writing" },
    { image: Composing, title: "Composing" },
    { image: PostWriting, title: "Post-Writting" },
  ];
  const devOps = [
    { image: Comunication, title: "Communication" },
    { image: Integration, title: "Integration" },
    { image: Automation, title: "Automation" },
  ];
  // function App(){
  //   switch(window.location.pathname){
  //     case "/grahics":
  //   }
  // }
  const IndustryLeaderWebDevelopment = () => {
    switch(window.location.pathname){
      case '/graphics':
      return (
        <>
          {graphicDesigning &&
            graphicDesigning.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img style={{width:'150px'}} src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/webdesign':
      return (
        <>
          {webDesigning &&
            webDesigning.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/webapp-development':
      return (
        <>
          {webDevelopment &&
            webDevelopment.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/digitalmarketing':
      return (
        <>
          {digitalMarketing &&
            digitalMarketing.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/software-solution':
      return (
        <>
          {softwareSolution &&
            softwareSolution.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/mobileapp-development':
      return (
        <>
          {appDevelopment &&
            appDevelopment.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/seo':
      return (
        <>
          {seo &&
            seo.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/content-writing':
      return (
        <>
          {contentWriting &&
            contentWriting.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/ecommerce':
      return (
        <>
          {ecommerce &&
            ecommerce.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      case '/devops':
      return (
        <>
          {devOps &&
            devOps.map((item, key) => (
              <>
                <div className='contentWrapper' key={item.title}>
                  <div className='imageContainer'>
                    {item.image && <img className='allImage' src={item.image} alt={item.title} />}
                  </div>
                  {item.title && <h4>{item.title}</h4>}
                </div>
                <img className='arrowImage' src={Arrows} alt='Arrows' />
              </>
            ))}
        </>
      );
      default:
        return <div></div>
    }
  };
  const ScheduleButton = (buttonType) => (<div></div>
    // <Button
    //   title={buttonType}
    //   style={{
    //     textTransform: "capitalize",
    //     padding: "22px 41px",
    //     margin: buttonType === firstSectionButton ? "20px 0px 80px" : "auto",
    //   }}
    // />
  );

  return (
    <div className='industryLeaders'>
      {/* {industryLeadersDetails && industryLeadersDetails.length > 0 && (
        <>
          {industryLeadersDetails[0].heading && <h1>{industryLeadersDetails[0].heading}</h1>}
          {industryLeadersDetails[0].paragraph && <p>{industryLeadersDetails[0].paragraph}</p>}
        </>
      )} */}

      <div className='industryLeaders_mobileFeaturesContainer'>
        <Row>
          {mobileFeaturesPoints &&
            mobileFeaturesPoints.length > 0 &&
            mobileFeaturesPoints.map((item, key) => (
              <Col xs='12' sm='12' md={item.order} lg={item.order} xl={item.order} key={item.title}>
                {item.title && item.title.length > 0 && (
                  <div className='mobileFeaturesContainer_contentContainer'>
                    {/* <img src={GreenArrow} alt='GreenArrow' /> */}
                    <p> {item.title}</p>
                  </div>
                )}
              </Col>
            ))}
        </Row>
      </div>

      {imageContainer && imageContainer === true ? (
        <div className='industryLeaders_imageContainer'>{IndustryLeaderWebDevelopment()}</div>
      ) : (
        ScheduleButton(firstSectionButton)
      )}

      {industryLeadersDetails && industryLeadersDetails.length > 0 && (
        <>
          {industryLeadersDetails[1].heading && <h1>{industryLeadersDetails[1].heading}</h1>}
          {industryLeadersDetails[1].paragraph && <p>{industryLeadersDetails[1].paragraph}</p>}
        </>
      )}
      <div className='categoriesContainer'>
        <CategoryCard
          count={count}
          categoryCardDetails={categoryCardDetails}
          categoryCardsPerRow={categoryCardsPerRow}
          style={style}
        />
      </div>
      {buttonTitle && buttonTitle.length > 0 && (
        <div className='categoriesContainer_button'>{ScheduleButton(buttonTitle)}</div>
      )}
      
    </div>
  );
};

export default IndustryLeaders;
