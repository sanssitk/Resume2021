import React, { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px"); 
  const bodyContent = useRef(null);

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleClick = () => {
    setIsOpen(isOpen ? false : true);
    setHeight(isOpen === true ? `${bodyContent.current.scrollHeight}px` : "0px");
    console.log(bodyContent.current)
  };

  return (
    <div className="accordion__Section">
      <div className="accordion__Section__header">
        <div className="accordion__title__container" onClick={handleClick}>
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
      <div
        ref={bodyContent}
        className="accordion__body"
        style={{ maxHeight: `${height}` }}
      >
        {props.body}
      </div>
    </div>
  );
}

export default Accordion;
