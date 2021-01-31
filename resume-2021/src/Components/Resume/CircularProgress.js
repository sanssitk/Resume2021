import React, { useEffect, useRef, useState } from "react";

function CircularProgress({ bgcolor, completed }) {
  const [offset, setOffset] = useState(132);
  const circleRef = useRef(null);

  const size = 50;
  const progress = completed;
  const stokeWidth = 8;
  const circleOneColor = "rgb(224, 224, 222)";
  const circleTwoColor = bgcolor;

  const center = size / 2;
  const radius = (size - stokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setInterval(() => {
      const progressOffset = ((100 - progress) / 100) * circumference;
      setOffset(progressOffset);
    }, 1500);
    circleRef.current.style = "transition: stroke-dashoffset 2.5s ease-in-out";
    return () => clearInterval();    
  }, [setOffset, progress, circumference, offset]);

  return (
    <div className="circularProgress__container">
      <svg width={size} height={size} className="circularprogress" rotate="-90" origin={`${radius/2}, ${radius/2}`} >
        <circle
          className="circle-bg"
          stroke={circleOneColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={stokeWidth - 2}
        ></circle>
        <circle
          className="circle"
          ref={circleRef}
          stroke={circleTwoColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={stokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          // strokeLinecap="round"
        ></circle>
        <text x={center} y={center + 5} className="percentage">
          {progress}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;
