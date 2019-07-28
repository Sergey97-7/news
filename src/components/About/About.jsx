import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./About.module.scss";

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.info}>
          <div className={styles.test}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
