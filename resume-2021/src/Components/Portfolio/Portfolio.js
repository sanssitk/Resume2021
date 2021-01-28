import React from "react";
import "./Portfolio.css";
import Accordion from "../Accordion/Accordion";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function Portfolio() {
  return (
    
    <Accordion    
      color="#ffbc38"
      icon={<BusinessCenterIcon />}
      title="Portfolio"
      header=""
      body="PortfolioBody"
    />
    
  );
}

export default Portfolio;
