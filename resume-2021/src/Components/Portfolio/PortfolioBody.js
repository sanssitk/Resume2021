import React from "react";
import PortfolioButtons from "./PortfolioButtons";

import isotope from "isotope-layout";

function PortfolioBody() {
  const portfoliodata = {
    buttons: [
      "All",
      "JavaScript",
      "React",
      "Angular",
      "Ecommerce",
      "WordPress/CMS",
    ],
  };

  return (
    <div className="profileBody">
      {portfoliodata.buttons.map((button, index) => (
        <PortfolioButtons key={index} buttonName={button} />
      ))}
    </div>
  );
}

export default PortfolioBody;
