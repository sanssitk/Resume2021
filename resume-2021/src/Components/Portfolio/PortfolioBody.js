import React from "react";
import PortfolioButtons from "./PortfolioButtons";

function PortfolioBody() {
  const border = "rgb(255, 188, 56)";
  return (
    <div className="profileBody">
      <PortfolioButtons border={border} />
    </div>
  );
}

export default PortfolioBody;
