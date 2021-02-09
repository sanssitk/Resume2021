import React, { useRef, useState } from "react";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../StateManagement/StateProvider";

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
