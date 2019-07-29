import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./OptionsPanel.module.scss";
class OptionsPanel extends Component {
  render() {
    return (
      <div className={styles.optionsPanel}>
          <h3>Текущий выбор: "newsname"</h3>
          <ul>
              <li>Топ 15 новостей</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
    );
  }
}
export default OptionsPanel;