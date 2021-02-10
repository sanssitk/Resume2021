import React from "react";
import employmentDatas from "./employmentDatas";
function Employments() {
  return (
    <div className="employments">
      {employmentDatas.map((employee) => (
        <div key={employee.field}>
          <div
            className="employment__header"
            style={{
              background: `linear-gradient(90deg, ${employee.color} 6%, rgba(55, 55, 55, 1) 6%`,
            }}
          >
            {employee.field}
          </div>
          {employee.details.map((detail) => (
            <div key={detail.id} className="employment__historyContainer">
              <div className="employment__detailheader">
                <div className="employment">
                  <div
                    className="bulletpoint"
                    style={{
                      backgroundColor: `${employee.color}`,
                    }}
                  />
                  <div className="employment__titles">
                    <h4>{detail.title}</h4>
                    <p>{detail.company}</p>
                  </div>
                </div>

                <div className="employment__period">
                  {detail.start}-{detail.end}
                </div>
              </div>
              <div className="employment__details">{detail.description}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Employments;
