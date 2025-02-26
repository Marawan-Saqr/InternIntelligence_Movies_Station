import { useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { movieContext } from '../../Contexts/MovieContext';
import { useLocation } from 'react-router-dom';

const PaginationComp = () => {

  // Component States
  const { getPage, getPageShows } = useContext(movieContext);
  const location = useLocation();


  // Set Movies & TV To Page 1 When In And Out
  useEffect(() => {
    getPage(1);
    getPageShows(1);
  }, []);


  // Handle Page Number Click
  const handlePageClick = (data) => {
    location.pathname === "/movies-page" || location.pathname === "/movies-page/movies" ? getPage(data.selected + 1) : getPageShows(data.selected + 1) ;
  }
  const pageCount = 500;


  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={5}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};


export default PaginationComp;