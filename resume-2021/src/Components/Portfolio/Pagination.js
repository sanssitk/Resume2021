import React from "react";
import { Nav } from "react-bootstrap";
import "./Pagination.css";


function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];    

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page_item">
            <a onClick={() => paginate(number)} href="!#" className={number === currentPage? "page_link page_active" : "page_link"}>
              {number}
            </a>
          </li>
          ))}
      </ul>
    </Nav>
  );
}

export default Pagination;
