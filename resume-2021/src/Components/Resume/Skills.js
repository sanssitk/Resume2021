import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useStateValue } from "../../StateManagement/StateProvider";
import { webSkills, mobSkills, designSkills } from "./SkillsData";
import Design from "./Designs";
import CircularProgress from "./CircularProgress";

function Skills() {
  const [{ resumeIsOpen }] = useStateValue();

  return (
    <>
      {resumeIsOpen ? (
        <div className="skills">
          <h2>web skills</h2>
          {webSkills.map((item, index) => (
            <ProgressBar
              key={index}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <br />
          <h2>mob skills</h2>
          {mobSkills.map((item, index) => (
            <ProgressBar
              key={index}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <br />
          <h2>design skills</h2>
          {designSkills.map((item, index) => (
            <Design
              key={index}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <br />
          {/* <div className="circular__progress__div">
            {designSkills.map((item, index) => (
              <CircularProgress
                key={index}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div> */}
          <div className="circular__progress__div">
            <CircularProgress />
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default Skills;
