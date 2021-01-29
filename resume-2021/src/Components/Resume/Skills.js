import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useStateValue } from "../../StateManagement/StateProvider";
import { skills } from "./SkillsData"

function Skills() {
  const [{ resumeIsOpen }] = useStateValue();

  return (
    <>
      {resumeIsOpen ? (
        <div className="skills">
          {skills.map((item, index) => (
            <ProgressBar
              key={index}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default Skills;
