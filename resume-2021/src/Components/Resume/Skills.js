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
              key={item.title}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <br />
          <h2>mob skills</h2>
          {mobSkills.map((item, index) => (
            <ProgressBar
              key={item.title}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <br />
          <h2>design skills</h2>
          {designSkills.map((item, index) => (
            <div className="designSkill_container" key={index}>
              <CircularProgress                
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
              <div className="buttleticon" style={{ background: `${item.bgcolor}` }} />
              <Design title={item.title} />
            </div>
          ))}
          <br />
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default Skills;
