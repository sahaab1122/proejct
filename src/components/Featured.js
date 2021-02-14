import React, { Component } from "react";
import FeatureData from './FeatureData'
export default class Featured extends Component {
  render() {
    return (
      <div style={{ marginTop: "110px" }}>
        <div class="m-auto text-center">
          <h2 style={{ fontSize: "41px" , color: "black"}}>Featured</h2>
        </div>
        <div className="container">
          <div className="feature-main">
            {FeatureData.map((Fdata) => {
              return (
                <div
                  style={{ display: "flex", marginTop: "72px", height:"56.8vh" }}
                  className="col-sm-12 col-md-12 col-lg-6 mb-3"
                >
                  <div style={{ width: "315px", height: "355px" }}>
                    <img
                      className="feature-img"
                      src={Fdata.img}
                      alt={Fdata.name}
                    />
                  </div>
                  <div style={{ width: "30%", alignSelf: "flex-end" }}>
                    <p
                      class="text-center"
                      style={{ marginBottom: "0px", fontSize: "22px" }}
                    >
                      {Fdata.name}
                    </p>
                
                    <p
                      class="text-center"
                      style={{ fontSize: "19px", paddingTop: "2px" }}
                    >
                      {Fdata.category}
                    </p>
                    <div className="feature-text">
                      <p>
                        <span style={{ fontSize: "20px" , color: "black" }}>Price</span>
                        <span style={{ fontSize: "29px", paddingLeft: "42px" }}>
                          ${Fdata.price}
                        </span>
                      </p>
                    </div>
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
