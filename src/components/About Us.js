import React, { Component } from "react";
import AboutImg from "../assets/About.png";
import { useTranslation, } from "react-i18next"

export default (props) => {

  const { t } = useTranslation()
    return (
      <div className="main-about" id="About"  >
        <div className="main-div card pmd-card overlay-card">
          <img
            src={AboutImg}
            alt="About"
            className="pmd-card-media about-img"
          />
          <div className="card-img-overlay about-txt-div">
            <h2 className="card-title about-text">{t("aboutUs")}</h2>
            <p
              className="card-text text-dark text-justify about-text-p"
              style={{ fontSize: "20px" }}
            >
              {props.paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }

