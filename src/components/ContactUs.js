import React, { Component } from "react";
import social from "../assets/Group 4.png";
import {useTranslation} from "react-i18next"


export default (props)=>{

  const { t, i18n }  = useTranslation()
    return (
      <div
        className="container-fluid "
        style={{ display: "flex", flexWrap: "wrap", marginTop: "100px",backgroundImage:props.img1 ? "url()" : "url()"}}
      ><div>
        
        <div className="  logo-div" style={{marginLeft:"50px"}}>
          <a><img src={social} alt="logo" width="185px" height="81.64px" /></a>
        </div></div>
        <div></div>
        <div className=" col-sm-6 col-lg-3 col-md-6" style={{alignSelf:"center",width:"100%"}}>
         <div> <h4
            style={{ fontSize: "29px", fontWeight: "bolder", color: "#960200" }}
          >
            {t("Social Media")}
          </h4></div>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-facebook-f pr-3"></i>{t("Facebook")}
          </a>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-twitter pr-3"></i>{t("Twitter")}
          </a>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-instagram pr-3"></i>{t("Instagram")}
          </a>
        </div>
        <div
          className=" col-12 col-sm-6 col-lg-3 col-md-6 info-div"
          style={{ fontFamily: "Arial" }}
        >
          <h4
            style={{ fontSize: "29px", color: "#960200", fontWeight: "bolder" }}
          >
            {t("information")}
          </h4>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            {t("aboutUs")}
          </a>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            {t("Contact")}
          </a>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            {t("Term & Conditions")}
          </a>
        </div>
        <div
          className="col-12 col-sm-6 col-lg-3 col-md-10 "
          style={{ width: "50%" }}
        >
          <h5 style={{ fontSize: "21px", color: "#960200" }}>
            {t("Subcribe to our newsletter")}
          </h5>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              type="search"
              placeholder= {t("E-mail Address")}
              aria-label="Search"
            />
            <button className="btn bg-dark text-white" type="submit">
              {t("ok")}
            </button>
          </form>
        </div>
      </div>
    );
    }
