import React from "react";

function Employments() {
  return (
    <div className="employments">
      <div className="employment__header">Employment</div>

      <div className="employment__historyContainer">
        <div className="employment__detailheader">
          <div className="employment">
            <div className="bulletpoint" />
            <div className="employment__titles">
              <h4>Full Stack Web Developer</h4>
              <p>Stagwell Technology. (Fulltime Remote Work)</p>
            </div>
          </div>

          <div className="employment__period">
            2017-Present
          </div>
        </div>
        <div className="employment__details">
          Build and support modern accessible websites and creative mobile idea.
          Implement software development solutions for the web department and
          mobile app creation. Create automated processes that increase workflow
          speed.
        </div>
      </div>
    </div>
  );
}

export default Employments;
