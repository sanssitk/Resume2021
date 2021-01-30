import React from "react";

function Designs({ title, bgcolor, completed }) {
  return (
    <div className="design">
      <div className="row">
        <div
          className="buttleticon"
          style={{ background: `${bgcolor}`}}
        />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Designs;
