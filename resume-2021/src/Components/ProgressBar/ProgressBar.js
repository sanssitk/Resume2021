import React, { useEffect, useState } from "react";

function ProgressBar({ bgcolor, completed, title }) {
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setAnimate(completed);
    }, 500);
  }, [completed]);

  const containerStyles = {
    height: 15,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 8,
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
    fontSize: 12,    
  };

  const labletitle = { fontSize: 12, fontWeight: 500, color: "#646464", paddingBottom: 2, };

  return (
    <div className="progressbar" >
      <h4 style={labletitle}>{title}</h4>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <p style={labelStyles}>{`${animate}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
