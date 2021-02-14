import React, { Component } from "react";
import { CatData } from "./CategoryData";
export default class Categories extends Component {
  render() {
    return (
      <div className="cat-main">
        <div className="text-center">
          <h2 style={{ fontSize: "41px", color: "black" }}>Categories</h2>
        </div>
        <div className="container" style={{ paddingTop: "52px" }}>
          <div className="cat-div-main">
            {CatData.map((catData) => {
              return (
                <div
                  key={catData.id}
                  className="cat-div col-sm-9  col-md-6 col-lg-4 mt-sm-5 mt-5 mt-md-0 mt-lg-0 ml-sm-4 ml-4 ml-md-0 ml-lg-0"
                >
                  <img
                    src={catData.img}
                    className="card-img-top"
                    alt={catData.name}
                    style={{ borderRadius: "22.5px" }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-center"
                      style={{ paddingTop: "10px" }}
                    >
                      {catData.name}
                      
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
