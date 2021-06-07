import React from "react";
import "./Resume.css";
import Accordion from "../Accordion/Accordion";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import ResumeBody from "./ResumeBody";

function Resume() {
  return (
    <Accordion
      color="#6ca338"
      icon={<ViewQuiltIcon />}
      title="Resume"
      header=""
      body={<ResumeBody />}
    />
  );
}

export default Resume;
