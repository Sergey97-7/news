import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h3>Порталы:</h3>
        <ul>
          <li>Лента</li>
          <li>Рамблер новости</li>
          <li>Наука</li>{" "}
        </ul>
        <h3>Категории</h3>
        <ul>
          <li>Спорт</li>
          <li>Политика</li>
          <li>Наука</li>{" "}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
