import React, { useEffect, useState } from "react";

function ProgressBar({ bgcolor, completed, title }) {
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    setInterval(() => {    
      setAnimate(completed);
    }, 500);
  }, []);

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
  };
  const fillerStyles = {
    height: "100%",
    width: `${animate}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    marginRight: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  };

  return (
    <div className="progressbar" style={{ margin: "10px 0" }}>
      <h4 style={{ fontSize: 16, fontWeight: 500 }}>{title}</h4>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <p style={labelStyles}>{`${animate}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
