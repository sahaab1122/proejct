
import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div
        className="text-center justify-center mb-5"
        style={{ marginTop: "80px" }}
      >
        <footer className="footer">
          <div className="pt-2">
            <span style={{ fontWeight: "bolder", fontSize: "20px", color: "black" }}>
              &copy;All Right Reserved 2021
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
