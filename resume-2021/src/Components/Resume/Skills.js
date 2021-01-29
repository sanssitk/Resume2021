import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

function Skills() {
  const testData = [
    { title: "React", bgcolor: "#6a1b9a", completed: 60 },
    { title: "Angular", bgcolor: "#00695c", completed: 30 },
    { title: "VeuJs", bgcolor: "#ef6c00", completed: 53 },
  ];

  return (
    <div className="skills">
      {testData.map((item, index) => (
        <ProgressBar
          key={index}
          title={item.title}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
    </div>
  );
}

export default Skills;
