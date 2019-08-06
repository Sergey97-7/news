import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Content.module.scss";
import NewsContainer from "../Content";

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
          <NewsContainer/>
      </div>
    );
  }
}
export default Content;
