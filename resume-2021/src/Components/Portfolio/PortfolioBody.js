import React, { useEffect, useRef, useState } from "react";
import PortfolioButtons from "./PortfolioButtons";
import { useStateValue } from "../../StateManagement/StateProvider";
import { portfolioButtons } from "./PortfolioDatas";
import { portfolioGallery } from "./PortfolioDatas";
import Gallery from "./Gallery";
import "./Portfolio.css";
//ISOTOPE
import Isotope from "isotope-layout";
import ReactPaginate from "react-paginate";

function PortfolioBody() {
  const galleryContainer = useRef(null);
  const [{ portfolioIsOpen }] = useStateValue();
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");
  const [activebutton, setActivebutton] = useState("all");

  // Pagination States
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  // Looping datacollection for lenght of data
  const pagecount = Object.entries(portfolioGallery).map((key) => key[1]);
  const title = pagecount.map((title) => title.length);
  const totalblogs = title.reduce((a, b) => a + b, 0);
  const pageCount = Math.ceil(totalblogs / usersPerPage);

  // Pagination filtering
  const slicingAllPages = () => {
    const elements = Array.from(galleryContainer.current.children);
    // const elementArray = [...elements];
    let slicing = elements
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((item) => item.classList[1]);
    return slicing.map((slice) => `.${slice}`);
  };
  // initialize an Isotope object with configs
  useEffect(() => {
    // setHeight(isOpen ? "0px" : `${bodyContent.current.scrollHeight}px`);
    if (portfolioIsOpen) {
      setIsotope(
        new Isotope(".gallery__container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
          stagger: 40,
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
    }
  }, [portfolioIsOpen]);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({
            filter: slicingAllPages(),
          })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, isotope, pageNumber]);

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

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        ref={galleryContainer}
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
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBttns"
            previousClassName="previousBttn"
            nextLinkClassName="nextBttn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
          />

          <div className="page__number">Page: {pageNumber+1} of 4</div>
        </div>
      )}
    </div>
  );
}

export default PortfolioBody;
