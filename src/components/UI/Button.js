import "../../styles/ui/button.css";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ style, title, pageLink }) => {
  return (
    <>
      {!(style === undefined) ? (
        <Link to={`/${pageLink ? pageLink : ""}`} className='view' style={style}>
          <span>{title}</span>
        </Link>
      ) : (
        <Link to={`/${pageLink ? pageLink : ""}`} className='view'>
          <span>{title}</span>
        </Link>
      )}
    </>
  );
};

export default Button;
