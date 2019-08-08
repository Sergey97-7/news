import React, { Component } from "react";
import { connect } from "react-redux";
import "./OptionsPanel.scss";
class OptionsPanel extends Component {
  render() {
    return (
      <div className="options-panel">
          <h3>Текущий выбор: "newsname"(надо ли это?)</h3>
          <ul>
              <li>Топ 15 новостей</li>
              <li>Последние 15</li>
              <li>Вариант 1</li>
              <li>Вариант 2</li>
              <li>Вариант 3</li>
          </ul>
      </div>
    );
  }
}
export default OptionsPanel;