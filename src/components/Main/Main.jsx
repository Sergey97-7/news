import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Main.module.scss";
import Sidebar from "../Sidebar";
import OptionsPanel from "../OptionsPanel";
class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Sidebar />
        <OptionsPanel />
      </div>
    );
  }
}
export default Main;
