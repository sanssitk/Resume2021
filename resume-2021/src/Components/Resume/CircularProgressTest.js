import React, { useEffect, useState } from "react";

function CircularProgress({ bgcolor, completed }) {
  const [offset, setOffset] = useState(0);
  const size = 65;
  const progress = completed;
  const stokeWidth = 10;
  const circleOneColor = "#d9edfe";
  const circleTwoColor = bgcolor;

  const center = size / 2;
  const radius = (size - stokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    console.log(center);
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

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
          strokeDashoffset={offset}
        ></circle>
        <text x={center} y={center} className="percentage">
          {progress}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;
