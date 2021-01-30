import React, { useEffect, useState } from "react";

function CircularProgress() {
  
  const size = 100;  
  const stokeWidth = 20;
  const circleOneColor = "#d9edfe";
  const circleTwoColor = "rgb(255, 188, 56)";

  const center = size / 2;
  const radius = (size - stokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;


  return (
    <div className="circularProgress__container">
      <svg width={size} height={size} className="circularprogress">
        <circle
          className="circle-bg"
          stroke={circleOneColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={stokeWidth}
        ></circle>
        <circle
          className="circle"
          stroke={circleTwoColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={stokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={200}
        ></circle>
        <text x={center} y={center} className="percentage">
          100%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;
