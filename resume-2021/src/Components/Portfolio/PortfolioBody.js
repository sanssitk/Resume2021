import React, { useEffect, useState } from "react";
import PortfolioButtons from "./PortfolioButtons";
// import { useStateValue } from "../../StateManagement/StateProvider";
import { portfolioButtons } from "./PortfolioDatas";
import { portfolioGallery } from "./PortfolioDatas";
import Gallery from "./Gallery";
import "./Portfolio.css";
//ISOTOPE
import Isotope from "isotope-layout";

function PortfolioBody() {  
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
        transitionDuration: "0.8s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
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

  // get current imgs
  // if (isotope && filterKey === "*") {
  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = isotope.items.slice(indexOfFirstPost, indexOfLastPost);
  //   //Change page
  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // }

  return (
    <div className="profileBody">
      <div className="buttons">
        <ul>
          {portfolioButtons.map((button, index) => (
            <li key={index} value={button} onClick={handleClickButton}>
              <PortfolioButtons
                buttonName={button}
                activeButton={toggleActiveButton}
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="gallery__container"
        style={{ maxHeight: "350px", transition: "height 0.6s ease" }}
      >
        {Object.entries(portfolioGallery).map((title, index) => (
          <Gallery
            key={title[0] + index}
            classname={`filter-item ${title[0]}`}
            imgs={title[1]}
          />
        ))}
      </div>

      {/************************************************************* Pagination */}
      {activebutton === "all" && (
        <div className="portfolio__navigator">
          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className="page__number">Page: 1 of 4</div>
        </div>
      )}
    </div>
  );
}

export default PortfolioBody;
