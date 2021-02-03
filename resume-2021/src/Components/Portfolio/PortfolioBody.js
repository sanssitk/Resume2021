import React, { useEffect, useState } from "react";
import PortfolioButtons from "./PortfolioButtons";
// import { useStateValue } from "../../StateManagement/StateProvider";
import { portfolioButtons } from "./PortfolioDatas";
import { portfolioGallery } from "./PortfolioDatas";
import "./Portfolio.css";

//ISOTOPE
import Isotope from "isotope-layout";
import Pagination from "./Pagination";

function PortfolioBody() {
  const [height, setHeight] = useState("350px");
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");
  const [activebutton, setActivebutton] = useState("all");

  // initialize an Isotope object with configs
  useEffect(() => {
    // setHeight(isOpen ? "0px" : `${bodyContent.current.scrollHeight}px`);
    setIsotope(
      new Isotope(".gallery__container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
        stagger: 50,
        transitionDuration: '0.8s',
        hiddenStyle: {
          opacity: 0,
          transform: 'scale(0.001)'
        },
        visibleStyle: {
          opacity: 1,
          transform: 'scale(1)'
        }
      })
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const handleClickButton = (e) => {
    const value = e.currentTarget.attributes.value.value;
    setActivebutton(value);
    setFilterKey(value === "all" ? "*" : value);
  };

  const toggleActiveButton = (button) => {
    if (activebutton === button) {
      return "shape active";
    } else {
      return "shape";
    }
  };

  return (
    <div className="profileBody">
      <div className="buttons">
        <ul>
          {portfolioButtons.buttons.map((button, index) => (
            <li key={index} value={button} onClick={handleClickButton}>
              <PortfolioButtons
                buttonName={button}
                activeButton={toggleActiveButton}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery__container" style={{ maxHeight: `${height}` }}>
        {portfolioGallery.ecommerce.map((ecm, index) => (
          <div key={ecm + index} className="filter-item ecommerce">
            <img src={ecm} alt="" />
          </div>
        ))}
        {portfolioGallery.javascript.map((js, index) => (
          <div key={js + index} className="filter-item javascript">
            <img src={js} alt="" />
          </div>
        ))}
        {portfolioGallery.react.map((rea, index) => (
          <div key={rea + index} className="filter-item react">
            <img src={rea} alt="" />
          </div>
        ))}
        {portfolioGallery.angular.map((ang, index) => (
          <div key={ang + index} className="filter-item angular">
            <img src={ang} alt="" />
          </div>
        ))}
        {portfolioGallery.wordpress.map((wor, index) => (
          <div key={wor + index} className="filter-item wordpress-cms">
            <img src={wor} alt="" />
          </div>
        ))}
      </div>
    {/************************************************************* Pagination */}
    {filter === "all" && (
        <div className="portfolio__navigator">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={projects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="page__number">{`Page:  ${currentPage} of 4`}</div>
        </div>
      )}
    </div>
  );
}

export default PortfolioBody;
