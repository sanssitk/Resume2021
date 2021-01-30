import React from "react";
import "./PortfolioButtons.css";
function PortfolioButtons({ border }) {
  return (
    <div className="portfolioButtons__wrapper">
      <svg height="50" width="100" xmlns="http://www.w3.org/2000/svg">
        <rect
          className="shape"
          height="50"
          width="100"
          style={{ stroke: `${border}` }}
        />
      </svg>
      <div className="text">HOME</div>
    </div>
  );
}

export default PortfolioButtons;
