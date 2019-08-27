import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Порталы:</h2>
        <ul>
          <li>Лента</li>
          <li>Рамблер новости</li>
          <li>Яндекс новости</li>{" "}
        </ul>
        <h2>Категории:</h2>
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
