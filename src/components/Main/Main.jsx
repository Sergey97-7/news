import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.scss";
import Sidebar from "../Sidebar";
import OptionsPanel from "../OptionsPanel";
import Content from "../Content";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <OptionsPanel />
        <Content />
      </div>
    );
  }
}
export default Main;
