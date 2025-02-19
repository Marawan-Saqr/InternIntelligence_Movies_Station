import { useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { movieContext } from '../../Contexts/MovieContext';

const PaginationComp = () => {

  // Component States
  const { getPage } = useContext(movieContext);

  // Set Movies To Page 1 When In And Out
  useEffect(() => {
    getPage(1);
  }, []);

  // Handle Page Number Click
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
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