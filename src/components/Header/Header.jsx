import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo} />
        <div className={styles.text} />
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Contacts</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
