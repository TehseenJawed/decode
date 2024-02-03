import "../../styles/components/appsAndSolutions.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import GreenArrow from "../../assets/inner_page_images/green-small-arrow.png";
import Button from "../UI/Button";
import {Link} from 'react-router-dom'

const AppsAndSolutions = ({ appsAndSolutionsComponentDetails, styling, bgColor, slider }) => {
  
  const [slidePage, setSlidePage] = slider
  return (
    <>
      {appsAndSolutionsComponentDetails &&
        appsAndSolutionsComponentDetails.length > 0 &&
        appsAndSolutionsComponentDetails.map((item, key) => {
          if(slidePage == 1 && slidePage ==key){
            
          const {
            mainHeading,
            description,
            subHeading,
            subHeadingPoints,
            buttonTitle,
            image,
            styling,
            bgColor,
          } = item;

          const SubHeadingPoints = (index) => (
            <ul>
              {subHeadingPoints &&
                subHeadingPoints.length > 0 &&
                subHeadingPoints[index] &&
                subHeadingPoints[index].length > 0 &&
                subHeadingPoints[index].map((item, key) => (
                  <li key={item}>
                    <img src={GreenArrow} alt='GreenArrow' />
                    <p>{item}</p>
                  </li>
                ))}
            </ul>
          );
          const SubHeading = (index) => (
            <>
              {subHeading &&
                subHeading.length > 0 &&
                subHeading[index] &&
                subHeading[index].length > 0 && <h2>{subHeading[index]}</h2>}
            </>
          );

          return (
            <div
              className='appsAndSolutions'
              style={bgColor && bgColor !== undefined ? bgColor : null}
            >
              <Row className='mainSection'>
                <Col xs='12' sm='6' md='12' lg='6' xl='6'>
                  {mainHeading && mainHeading.length > 0 && <h1>{mainHeading}</h1>}
                  {description &&
                    description.length > 0 &&
                    description.map((paragraph, key) => <p key={paragraph}>{paragraph}</p>)}
                  {SubHeading(0)}
                  {SubHeadingPoints(0)}
                  {SubHeading(1)}
                  {SubHeadingPoints(1)}
                  <Link to="/contact" style={{marginBottom:'5%'}}>
                    
                    <a href="#cform" className="view" style={{position:'absolute', padding:'3% 6%', margin:'2% 0%'}}>
                <span>{buttonTitle}</span>
              </a>
                    </Link>
                </Col>
                <Col xs='12' sm='6' md='12' lg='6' xl='6' className='rightImageContainer'>
                  {image && (
                    <div
                      className='appsAndSolutions_imageContainer'
                      style={styling && styling !== undefined ? styling : null}
                    >
                      <img
                        className='appsAndSolutions_image'
                        src={image}
                        alt={mainHeading}
                        style={styling && styling !== undefined ? styling : null}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          );
          }
          else if(slidePage == 0 && slidePage ==key){
            
          const {
            mainHeading,
            description,
            subHeading,
            subHeadingPoints,
            buttonTitle,
            image,
            styling,
            bgColor,
          } = item;

          const SubHeadingPoints = (index) => (
            <ul>
              {subHeadingPoints &&
                subHeadingPoints.length > 0 &&
                subHeadingPoints[index] &&
                subHeadingPoints[index].length > 0 &&
                subHeadingPoints[index].map((item, key) => (
                  <li key={item}>
                    <img src={GreenArrow} alt='GreenArrow' />
                    <p>{item}</p>
                  </li>
                ))}
            </ul>
          );
          const SubHeading = (index) => (
            <>
              {subHeading &&
                subHeading.length > 0 &&
                subHeading[index] &&
                subHeading[index].length > 0 && <h2>{subHeading[index]}</h2>}
            </>
          );

          return (
            <div
              className='appsAndSolutions'
              style={bgColor && bgColor !== undefined ? bgColor : null}
            >
              <Row className='mainSection'>
                <Col xs='12' sm='6' md='12' lg='6' xl='6'>
                  {mainHeading && mainHeading.length > 0 && <h1>{mainHeading}</h1>}
                  {description &&
                    description.length > 0 &&
                    description.map((paragraph, key) => <p key={paragraph}>{paragraph}</p>)}
                  {SubHeading(0)}
                  {SubHeadingPoints(0)}
                  {SubHeading(1)}
                  {SubHeadingPoints(1)}
                  <Link to="/contact" style={{marginBottom:'5%'}}>
                    
                    <a href="#cform" className="view" style={{position:'absolute', padding:'3% 6%', margin:'2% 0%'}}>
                <span>{buttonTitle}</span>
              </a>
                    </Link>
                </Col>
                <Col xs='12' sm='6' md='12' lg='6' xl='6' className='rightImageContainer'>
                  {image && (
                    <div
                      className='appsAndSolutions_imageContainer'
                      style={styling && styling !== undefined ? styling : null}
                    >
                      <img
                        className='appsAndSolutions_image'
                        src={image}
                        alt={mainHeading}
                        style={styling && styling !== undefined ? styling : null}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          );
          }
        })}
    </>
  );
};

export default AppsAndSolutions;
