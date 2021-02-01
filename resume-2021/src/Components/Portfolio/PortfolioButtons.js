import React, { useEffect, useRef, useState } from "react";
import "./PortfolioButtons.css";
function PortfolioButtons({ buttonName }) {
  const widthDIV = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    const xlen = widthDIV.current.clientWidth + 40;
    setWidth(xlen);
  }, []);

  return (
    <div className="portfolioButtons__wrapper">
      <svg height="40" width={width} xmlns="http://www.w3.org/2000/svg">
        <rect
          className="shape"
          height="40"
          width={width}
          style={{ stroke: "rgb(255, 188, 56)" }}
          strokeLinecap="round"
          strokeDasharray={`${width} 500`}
          strokeDashoffset={-width - 40}
        />
      </svg>
      <div ref={widthDIV} className="text">
        {buttonName}
      </div>
    </div>
  );
}

export default PortfolioButtons;
