import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <img
              src="https://pp.userapi.com/c841237/v841237210/309ab/ZOUl4MN0VvU.jpg"
              alt="site_logo"
              title="site_logo"
            />
          </div>
          <div className={styles.text}>Welcome to the news website!</div>
        </div>
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
