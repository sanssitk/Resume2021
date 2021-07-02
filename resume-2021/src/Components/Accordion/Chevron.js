import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Chevron({ isOpen }) {

  const chevronRotate = () => {
    isOpen = !isOpen;
  };

  return (
    <div
      onClick={chevronRotate}
      className={isOpen ? "chevron chevronActive" : "chevron"}
    >
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default Chevron;
