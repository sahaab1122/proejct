import React, { Component } from "react";
import social from "../assets/Group 4.png";
export default class ContactUs extends Component {
  render() {
    return (
      <div
        className="container-fluid "
        style={{ display: "flex", flexWrap: "wrap", marginTop: "100px",backgroundImage:this.props.img1 ? "url()" : "url()"}}
      >
        <div className="col-6 col-sm-6 col-lg-3 col-md-6 logo-div">
          <img src={social} alt="logo" width="185px" height="81.64px" />
        </div>
        <div></div>
        <div className="col-6 col-sm-6 col-lg-3 col-md-6">
          <h4
            style={{ fontSize: "29px", fontWeight: "bolder", color: "#960200" }}
          >
            Social Media
          </h4>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-facebook-f pr-3"></i>Facebook
          </a>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-twitter pr-3"></i>Twitter
          </a>
          <a className="nav-link" href="/" style={{ fontSize: "21px",color:'black' }}>
            <i className="fab fa-instagram pr-3"></i>Instagram
          </a>
        </div>
        <div
          className=" col-12 col-sm-6 col-lg-3 col-md-6 info-div"
          style={{ fontFamily: "Arial" }}
        >
          <h4
            style={{ fontSize: "29px", color: "#960200", fontWeight: "bolder" }}
          >
            information
          </h4>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            About us
          </a>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            Contact
          </a>
          <a href="/" className="nav-link" style={{ fontSize: "21px",color:'black' }}>
            Term & Conditions
          </a>
        </div>
        <div
          className="col-12 col-sm-6 col-lg-3 col-md-10 "
          style={{ width: "50%" }}
        >
          <h5 style={{ fontSize: "21px", color: "#960200" }}>
            Subcribe to our newsletter
          </h5>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="E-mail Address"
              aria-label="Search"
            />
            <button className="btn bg-dark text-white" type="submit">
              Ok
            </button>
          </form>
        </div>
      </div>
    );
  }
}
