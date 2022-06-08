import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo_png from "../../assets/Group12.png";
function HeaderMb(props) {
  return (
    <div className="row mx-auto d-lg-none d-block">
      <Navbar
        className="bg-trans-mb col-12 mx-auto
      "
        bg=""
        expand="lg"
      >
        <div className="br-8 row mx-auto w-100 justify-content-between">
          <Navbar.Brand>
            <Link
              className="d-flex align-items-center zoom-in hover-shade br-20 py-2 px-3 light-mb"
              to="/"
            >
              <img src={logo_png} height="50px" width="" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="br-8 shade p-2 py-4"
            id="basic-navbar-nav"
          >
            <Nav className="me-auto text-center">
              <Nav.Link
                href="#superdogs"
                className="light-mb font-weight-bold py-1 lh-custom"
              >
                Super Dogs
              </Nav.Link>
              <Nav.Link
                href=""
                className="light-mb font-weight-bold py-1 lh-custom"
              >
                Food Kits
              </Nav.Link>
              <Nav.Link
                href=""
                className="light-mb font-weight-bold py-1 lh-custom"
              >
                Energy Booster's
              </Nav.Link>
              <Link to="" className="light-mb font-weight-bold py-1 lh-custom">
                Accessories
              </Link>
              {/* <button
                class="p-0 border-0 light-mb text-left bg-trans font-weight-bold py-1"
                // onClick={() => dispatch(logout())}
              >
                Logout
              </button> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderMb;
