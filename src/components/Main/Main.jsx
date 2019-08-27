import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.scss";
import Sidebar from "../Sidebar";
import OptionsPanel from "../OptionsPanel";
import Content from "../Content";
import { parse } from "path";

class Main extends Component {
  componentDidMount() {
    fetch("https://lenta.ru/rss/top7")
      .then(res => res.text())
      .then(data => this.parse(data))
      .catch(e => console.log("Error: ", e));
  }
  parse(data) {
    const domParser = new DOMParser();
    const html = domParser.parseFromString(data, "text/xml");
    const items = html.querySelectorAll("item");
    items.forEach(item => console.log("item: ", item.textContent));
  }
  render() {
    return (
      <div className="main">
        <Sidebar />
        <div className="main-content">
          <OptionsPanel />
          <Content />
        </div>
      </div>
    );
  }
}
export default Main;
