import React from "react";
import "./Resume.css";
import Accordion from "../Accordion/Accordion";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

function Resume() {
  return (
    <Accordion
      color="#6ca338"
      icon={<ViewQuiltIcon />}
      title="Resume"
      header=""
      body="ResumeBOdy"
    />
  );
}

export default Resume;
