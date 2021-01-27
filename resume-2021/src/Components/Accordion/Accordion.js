import React from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
  return (
    <div className="accordion__Section">
      <div className="accordion__Section__header">
        <div className="accordion__title__container">
          <div className="accordion__name">
            <span className="icon" style={{ backgroundColor: props.color }}>
              {props.icon}
            </span>
            <div
              className="accordion__title"
              style={{ backgroundColor: props.color }}
            >
              {props.title}
            </div>
          </div>
          <Chevron />
        </div>
        {props.header}
      </div>
      <div className="accordion__body">{props.body}</div>
    </div>
  );
}

export default Accordion;
