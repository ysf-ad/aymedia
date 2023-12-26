import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/#page-top">
             <img src='img/aymedialogo-slim.png' width='200em' style={{filter:"invert(1)", margin:"-0.5em"}}/>
             {/* AY MEDIA */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li className="testimonials-dropdown">
              <a href="/#testimonials" className="page-scroll">
                Testimonials-
                <i class="fa fa-caret-down"></i>
              </a>
              <div class="dropdown-content">
      <Link to="/doner-gyros">Doner & Gyros</Link>
      <Link to="/cheery-chews">Cheery Chews</Link>
    </div>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
