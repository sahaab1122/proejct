import React, { Component } from "react";
import FeatureData from './FeatureData'
import {useTranslation} from "react-i18next"

export default ()=>{

  const { t, i18n }  = useTranslation()

    return (
      <div style={{ marginTop: "110px" }}>
        <div class="m-auto text-center">
          <h2 style={{ fontSize: "41px" , color: "black",textAlign:"center"}}>{t("Featured")}</h2>
        </div>
        <div className="container">
          <div className="feature-main">
            {FeatureData.map((Fdata) => {
              return (
                <div >
                <div className="asd" style={{display:'flex',alignItems:'flex-end',padding:"9px"}}>
                <div style={{ width: "315px", height: "355px" }}>
                <div><img
                  className="feature-img"
                  src={Fdata.img}
                  alt={Fdata.name}
                /></div>
                  </div>
                  <div>
                  <div style={{ width:"50%" ,marginRight:"20px" }}>
                <p
                  class="text-center"
                  style={{ marginBottom: "0px", fontSize: "22px" }}
                >
                  {t(Fdata.name)}
                </p>
                <p
                  class="text-center"
                  style={{ fontSize: "19px", paddingTop: "2px" }}
                >
                  {t(Fdata.category)}
                </p>
                <div className="feature-text">
                  <p >
                    <span style={{ fontSize: "20px",color:"white" }}>{t("Price")}</span>
                    <span style={{ fontSize: "29px",color:"white", paddingLeft: "42px" }}>
                      ${Fdata.price}
                    </span>
                  </p>
                  </div>
                  </div>
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

