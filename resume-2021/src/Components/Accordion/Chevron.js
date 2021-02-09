import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Chevron() {
  const [isOpen, setIsOpen] = useState(false);
  const chevronRotate = () => {
    setIsOpen(!isOpen);
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
