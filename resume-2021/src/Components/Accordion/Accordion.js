import React, { useRef, useState } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";
import { useStateValue } from "../../StateManagement/StateProvider";

function Accordion(props) {
  const [
    { profileIsOpen, resumeIsOpen, portfolioIsOpen },
    dispatch,
  ] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const bodyContent = useRef(null);
  const parentDiv = useRef(null);

  const handleClick = (e) => {
    const clickedDiv = parentDiv.current.id;    
    switch (clickedDiv) {
      case "Profile":
        setIsOpen(!isOpen);
        dispatch({
          type: "SET_PROFILE",
          profileIsOpen: !profileIsOpen,
        });
        break;
      case "Resume":
        setIsOpen(!isOpen);
        dispatch({
          type: "SET_RESUME",
          resumeIsOpen: !resumeIsOpen,
        });
        break;
      case "Portfolio":
        setIsOpen(!isOpen);
        dispatch({
          type: "SET_PORTFOLIO",
          portfolioIsOpen: !portfolioIsOpen,
        });
        break;

      default:
        setIsOpen(false);
        break;
    }
    setHeight(
      isOpen === false ? `${bodyContent.current.scrollHeight}px` : "0px"
    );
  };

  return (
    <div className="accordion__Section">
      <div className="accordion__Section__header">
        <div
          className="accordion__title__container"
          ref={parentDiv}
          id={props.title}
          onClick={handleClick}
        >
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
