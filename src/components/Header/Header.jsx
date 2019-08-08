import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <div className="logo">
            <img
              src="https://pp.userapi.com/c841237/v841237210/309ab/ZOUl4MN0VvU.jpg"
              alt="site_logo"
              title="site_logo"
            />
          </div>
          <div className="text">Welcome to the news website!</div>
        </div>
        <nav className="nav">
          <ul>
            <li><Link className="nav_link" to="/">Home</Link></li>
            <li><Link className="nav_link" to="/about">About</Link></li>
            <li><Link className="nav_link" to="/about">About2</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
