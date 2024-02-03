import "../../styles/ui/categoryCard.css";
import "../../styles/home/index.css";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const CategoryCard = ({ categoryCardDetails, count, categoryCardsPerRow, style }) => {
  const Category_Card = (item, key, categoryCardsPerRow = "3") => (
    <Col
    className="catcontainer"
      xs="12"
      sm="6"
      md={categoryCardsPerRow}
      lg={categoryCardsPerRow}
      xl={categoryCardsPerRow}
      key={item.title}

    >
      {count.map((v,i) => <div></div>)}
      <div
        key={item.title}
        className="categoryCard box "
        style={
          style && style.padding !== undefined
            ? { padding: style.padding }
            : { padding: "0px 20px" }
        }
      >
        {item.image && (
          <div className="categoryCard_imageContainer">
            <img  src={item.image} alt={item.title} />
          </div>
        )}
        <div style={{zIndex:'1' ,height:'250px'}}>
        {item.title && item.title.length > 0 && <h3 >{item.title}</h3>}
        {item.description && item.description.length > 0 && (
          <p
            style={
              style && style.minWidth !== undefined
                ? { minWidth: style.minWidth }
                : { minWidth: "230px" }
            }
            style={
              style && style.margin !== undefined
                ? { margin: style.margin }
                : { minWidth: "0px" }
            }
          >
            {item.description}
          </p>
        )}
        </div>
      </div>
    </Col>
  );
  return (
    <Row style={{justifyContent:'center'}} className='bbox'>
      {categoryCardDetails &&
        categoryCardDetails.map((item, key) =>
          categoryCardsPerRow && categoryCardsPerRow === undefined
            ? Category_Card(item, key, (categoryCardsPerRow = "3"))
            : Category_Card(item, key, categoryCardsPerRow)
        )}
    </Row>
  );
};

export default CategoryCard;
