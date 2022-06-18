import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          ATools<span className="navbar_logo_span">.</span>
        </div>
        <div className="navbar_btn-con">
          <button className=" navbar_btn navbar_btn-1">Start Free Trial</button>
          <button className="navbar_btn navbar_btn-2" onClick={props.Clicked}>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
