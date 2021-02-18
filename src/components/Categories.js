import React, { Component } from "react";
// import { CatData } from "./CategoryData";
import { useTranslation, } from "react-i18next"
import Got1 from '../assets/Got1.png'
import Got2 from '../assets/Got2.png'
import Got3 from '../assets/Got3.png'

export default () => {

  const { t } = useTranslation()
  const [catData, setCatDate] = React.useState([
    {
      id: 1,
      name: "CategoryName",
      img: require('../assets/Got1.png'),
    },
    {
      id: 2,
      name: "CategoryName",
      img: require('../assets/Got2.png'),
    },
    {
      id: 3,
      name: "CategoryName",
      img: require('../assets/Got3.png'),
    },
  ])

  // const { t, i18n } = useTranslation()

  return (
    <div className="cat-main">
      <div className="text-center"style={{marginTop:"-100px"}}>
        <h2 style={{ fontSize: "41px", color: "black" }}>{t("Categories")}</h2>
      </div>
      <div className="container" style={{ paddingTop: "52px" }}>
        <div className="cat-div-main">
          {catData.map((item) => {
            return (
              <div
                key={item.id}
                className="cat-div col-sm-9  col-md-6 col-lg-4 mt-sm-5 mt-5 mt-md-0 mt-lg-0 ml-sm-4 ml-4 ml-md-0 ml-lg-0"
              >
                <img
                  src={Got1,Got2}
                  className="card-img-top"
                  alt={item.name}
                  style={{ borderRadius: "22.5px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{ paddingTop: "10px" }}
                  >
                    {t(item.name)}

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

