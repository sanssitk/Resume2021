import React, { useEffect, useRef, useState } from "react";
import "./PortfolioButtons.css";
function PortfolioButtons({ buttonName, activeButton }) {
  const widthDIV = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const xlen = widthDIV.current.clientWidth + 16;
    setWidth(xlen);
  }, [width]);

  return (
    <div className="portfolioButtons__wrapper" >
      <svg height="40" width={width} xmlns="http://www.w3.org/2000/svg">
        <rect
          className={activeButton(buttonName)}
          height="40"
          width={width}
          style={{ stroke: "rgb(255, 188, 56)" }}
          strokeLinecap="round"
          strokeDasharray={`${width} 220`}
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
