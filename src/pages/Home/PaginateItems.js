import React from "react";
import ReactPaginate from "react-paginate";
import "./PaginateItems.scss";

const PaginateItems = ({ postsPerPage, totalPosts, paginate }) => {
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(event.selected + 1);
    paginate(event.selected + 1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={postsPerPage}
        pageCount={pageNumbers.length}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </>
  );
};

export default PaginateItems;
