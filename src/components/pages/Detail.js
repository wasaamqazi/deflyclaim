import React from "react";
import pages from "../../data/pages";

function Detail(props) {
    const { page, setPage } = props;
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  return (
    <div>
      hello
      <button
        onClick={() => {
          setPage(pages.usersList);
        }}
        className="btn btn-secondary px-2 py-2"
      >
        <i className="px-2 fa fa-angle-left"></i>
      </button>
    </div>
  );
}

export default Detail;
