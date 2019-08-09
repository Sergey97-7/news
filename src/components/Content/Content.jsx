import React, { Component } from "react";
import { connect } from "react-redux";
import "./Content.scss";
import NewsContainer from "../NewsContainer";

class Content extends Component {
  render() {
    return (
      <div className="content">
          <NewsContainer/>
      </div>
    );
  }
}
export default Content;
