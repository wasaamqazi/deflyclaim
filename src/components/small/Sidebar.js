import React from "react";
import logo from "../../assets/dummylogo.png";
import dashboard_icon from "../../assets/dashboard.svg";
import pages from "../../data/pages";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

function Sidebar(props) {
  const { page, setPage } = props;
  const dispatch = useDispatch();
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  return (
    <div className="text-center bg-white">
      <div className="p-1 row">
        <img src={logo} alt="logo" height="40px" className="my-4 mx-auto" />

        {isAuthenticated && user.role == "admin" ? (
          <UserLinks />
        ) : (
          <AdminLinks />
        )}

        <div className="col-12 mt-xl-5">
          <button
            onClick={() => dispatch(logout())}
            className="btn br-20 bg-success text-white text-left py-2 px-1 my-2 btn-block"
          >
            <i className="fa fa-power-off pl-3 pr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

function UserLinks() {
  return (
    <React.Fragment>
      <div className="col-12">
        <button
          // onClick={() => {
          //   setPage(pages.usersList);
          // }}
          className="btn br-20 bg-success text-white text-left py-2 px-1 my-2 btn-block"
        >
          <i className="fa fa-users pl-3 pr-2"></i>
          Users List
        </button>
      </div>
    </React.Fragment>
  );
}

function AdminLinks() {
  return (
    <React.Fragment>
      <div className="col-12">
        <button
          // onClick={() => {
          //   setPage(pages.applicationForm);
          // }}
          className="btn br-20 bg-success text-white text-left py-2 px-1 btn-block"
        >
          <img src={dashboard_icon} height="" className="pl-3 pr-2" alt="" />
          Application Form
        </button>
      </div>
    </React.Fragment>
  );
}
