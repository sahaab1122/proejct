import React, { Component } from "react";
import AboutImg from "../assets/About.png";
export default class AboutUs extends Component {  
  render() {
    return (
      <div classNameName="main-about">
        <div className="main-div card pmd-card overlay-card">
          <img
            src={AboutImg}
            alt="About"
            className="pmd-card-media about-img"
          />
          <div className="card-img-overlay about-txt-div">
            <h2 className="card-title about-text">About Us</h2>
            <p
              className="card-text text-dark text-justify about-text-p"
              style={{ fontSize: "20px" }}
            >
              {this.props.paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
