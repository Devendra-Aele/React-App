import React from "react";

import PropTypes from "prop-types";

export default function Navbar(props) {
   
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.newmode} bg-${props.newmode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <div className={`form-check form-switch text-${props.newmode=="dark"?"light":"dark"} col-2 py-2`}>
              <label className="form-check-label" for="flexSwitchCheckChecked">
                {props.textmode}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.Onmode}
              />
            </div> */}
            {/* <div>  */}
            <div className="bg-dark rounded-circle mx-2" onClick={()=>{props.Onmode('dark')}} style={{height:"25px",width:"25px", border:"2px solid black"} }> </div>
            <div className="bg-light rounded-circle mx-2" onClick={()=>{props.Onmode('light')}} style={{height:"25px",width:"25px", border:"2px solid black"} }> </div>
            <div className="bg-success rounded-circle mx-2" onClick={()=>{props.Onmode('success')}} style={{height:"25px",width:"25px", border:"2px solid black"} }> </div>
            <div className="bg-warning rounded-circle mx-2" onClick={()=>{props.Onmode('warning')}} style={{height:"25px",width:"25px", border:"2px solid black"} }> </div>
            <div className="bg-primary rounded-circle mx-2" onClick={()=>{props.Onmode('primary')}} style={{height:"25px",width:"25px", border:"2px solid black"} }> </div>
            {/* </div> */}
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "NAVBAR",
  home: "Home",
  about: "u ncan right About ",
};
