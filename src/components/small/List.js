import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import userdata from "../../data/userdata";
import pages from "../../data/pages";

export default function List(props) {
  const { page, setPage } = props;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div class="row bg-lighter-sky 100%">
      <div className="col-md-10 mx-auto bg-white p-md-3 p-2 br-8 shade minh">
        <h2>Loan History</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className="row font-weight-bold h5 text-dark bb-solid py-2 mx-xl-2 mx-lg-1">
          <div className="col">Name</div>
          <div className="col">Loan name</div>
          <div className="col">Type</div>
          <div className="col">Duration</div>
          <div className="col text-center">Amount</div>
          <div className="col text-center">Status</div>
        </div>
        {userdata.map((item) => (
          <div
            onClick={() => {
              setPage(pages.detail);
            }}
            className="btn px-0 text-left row d-flex shade-hover bb-light py-2 mx-xl-2 mx-lg-1"
          >
            <div className="col text-dark">{item.name}</div>
            <div className="col text-dark">{item.loan}</div>
            <div className="col text-dark">{item.type}</div>
            <div className="col text-dark">{item.duration}</div>
            <div className="col text-center text-dark">{item.amount}</div>
            <div className="col text-center">
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                className="p-0 m-auto"
              >
                <div className="bg-light-green mx-auto w-fit zoom-in br-20 py-1 px-md-4 px-2 btn text-success text-center">
                  {item.status}
                </div>
              </Button>
              <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleClose}>Active</MenuItem>
                <MenuItem onClick={handleClose}>Hold</MenuItem>
                <MenuItem onClick={handleClose}>Close</MenuItem>
              </Menu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
