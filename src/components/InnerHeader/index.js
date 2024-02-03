import "../../styles/components/innerHeader.css";
import React from "react";
import Button from "../UI/Button";
import {Link} from 'react-router-dom'


const InnerHeader = ({ componentDetails }) => {
  return (
    <>
      {componentDetails &&
        componentDetails.map((item, key) => (
          <div className="" key={item.gradientContainerSectionName}>
            <div
              className="innerHeader_gradientBgContainer"
              style={
                item.backgroundGradientColor &&
                Object.keys(item.backgroundGradientColor).length > 0
                  ? {
                      background: `linear-gradient(${
                        item.backgroundGradientColor.deg &&
                        item.backgroundGradientColor.deg
                      }deg, ${
                        item.backgroundGradientColor.minColor &&
                        item.backgroundGradientColor.minColor
                      } 0%,${
                        item.backgroundGradientColor.maxColor &&
                        item.backgroundGradientColor.maxColor
                      }  100%)`,
                      
                      // content: `url(${AB})`,
                      // width:'200px'
                    }
                  : {
                      backgroundColor: `${
                        item.backgroundColor && item.backgroundColor
                      }`,
                    }
              }
            >
              <div className="innerHeader_gradientBgContainer_content">
                <img className='headerImage'src={item.headerImage} />
                {item.gradientContainerSectionName && (
                  <>
                    {/* <Link to='/services'><p className="sectionHeading">
                     {item.gradientContainerSectionName[0]}
                    </p></Link>
                    <p className="sectionHeading">
                     {item.gradientContainerSectionName[1]}
                    </p> */}
                    {item.gradientContainerSectionNameUnderlineColor && (
                      <div
                        className="sectionHeadingUnderline"
                        style={{
                          backgroundColor:
                            item.gradientContainerSectionNameUnderlineColor,
                        }}
                      >

                      </div>
                    )}
                  </>
                )}
                {item.gradientContainerWhiteHeading && (
                  <h3 className="white">
                    {item.gradientContainerWhiteHeading}
                  </h3>
                )}
                {item.gradientContainerRedHeading && (
                  <div className="red">
                    <h3>{item.gradientContainerRedHeading}</h3>
                  </div>
                )}
              </div>
            </div>

            <div className="innerHeader_bottomContainer">
              <div className="innerHeader_bottomContainer_imageContainer start">
                {/* {item.buttonContainerGreenLinesImage && (
                  <img style={{width:'80%'}}
                    src={item.buttonContainerGreenLinesImage}
                    alt={item.gradientContainerSectionName}
                  />
                )} */}
              </div>
              <div className="innerHeader_bottomContainer_contentContainer">
                {item.buttonContainerTitle && (
                  <h4>{item.buttonContainerTitle}</h4>
                )}
                {item.buttonContainerDescription && (
                  <p className='same-full'>{item.buttonContainerDescription}</p>
                )}

                {/* {item.buttonContainerButtonTitle ? (
                  <Button
                    style={{ textTransform: "capitalize" }}
                    title={item.buttonContainerButtonTitle}
                  />
                ) : null} */}
              </div>
              <div className="innerHeader_bottomContainer_imageContainer end">
                {/* {item.buttonContainerGreenLinesImage && (
                  <img style={{width:'50%'}}
                    src={item.buttonContainerGreenLinesImage}
                    alt={item.gradientContainerSectionName}
                  />
                )} */}
              </div>
            </div>

            {/* {item.clientsContainerTitle && item.clientsContainerlogos ? (
              <div className="innerHeader_clientsContainer">
                <h3>{item.clientsContainerTitle}</h3>
                <div className="cliensContainer">
                  <img
                    src={item.clientsContainerlogos}
                    alt={item.gradientContainerSectionName}
                  />
                </div>
              </div>
            ) : null} */}
          </div>
        ))}
    </>
  );
};

export default InnerHeader;
