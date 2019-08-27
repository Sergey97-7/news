import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="info">
          <h2>About</h2>
          <p>
            My name is Sergey. I'm 22 years old and i'm a frontend developer.
            And this is my news website!
          </p>
          <h2>Contacts</h2>
          <p>Telephone: +7 (777) 777-77-77</p>
          <p>E-mail: Sergey97-7</p>
          <h2>Links:</h2>
          <a href="https://github.com/Sergey97-7">Github</a>
          <a href="https://github.com/Sergey97-7">Facebook</a>
          <a href="https://github.com/Sergey97-7">Twitter</a>
          <a href="https://github.com/Sergey97-7">Vkontakte</a>
          <a href="https://github.com/Sergey97-7">Instagram</a>
          <div className="test">
            <div className="test2">
              <div id="f">
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
