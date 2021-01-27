import React from "react";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Chevron(props) {
  return (
    <div className="chevron">
      {/* <KeyboardArrowDownIcon /> */}
      <FontAwesomeIcon icon={faChevronDown}/>
    </div>
  );
}

export default Chevron;
