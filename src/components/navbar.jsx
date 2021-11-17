import React from "react";
import { number } from "prop-types";

const NavBar = ({ totalCounters }) => {
    return (
      <nav className="navbar navbar-light">
        <div className="navbar-brand">
          <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
          <span
            className="badge badge-pill bg-info m-2"
            style={{ width: 50, fontSize: "24px" }}
          >
            {totalCounters}
          </span>
          Items
        </div>
      </nav>
    );
  };

  NavBar.propTypes = {
    totalCounters: number

}
  
export default NavBar;