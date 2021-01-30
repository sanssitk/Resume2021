import React, { useEffect, useState } from "react";

function CircularProgress() {
  const size = 170;
  const stokeWidth = 40;
  const circleOneColor = "#d9edfe";
  const circleTwoColor = "rgb(255, 188, 56)";

  const center = size / 2;
  const radius = (size - stokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="circularProgress__container">
      <svg xmlns="http://www.w3.org/2000/svg" class="piechart">
        <path d="M66,66 L130,66  A64,64 0 0,1 57,129 z" fill="#327ea3"></path>
        <path d="M66,66 L57, 129 A64,64 0 0,1 2,60 z" fill="#4ca5d0"></path>
        <path d="M66,66 L2,  60  A64,64 0 0,1 34,11 z" fill="#6ca338"></path>
        <path d="M66,66 L34, 11  A64,64 0 0,1 103,14 z" fill="#ffbc38"></path>
        <path d="M66,66 L103,14  A64,64 0 0,1 130,66 z" fill="#e82c0c"></path>
        <circle cx="66" cy="66" r="30" fill="#ffffff"></circle>
      </svg>
    </div>
  );
}

export default CircularProgress;
