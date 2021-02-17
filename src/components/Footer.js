
import React, { Component } from "react";
import {useTranslation} from "react-i18next";

export default ()=>{

  const { t, i18n }  = useTranslation()

    return (
      <div
        className="text-center justify-center mb-5"
        style={{ marginTop: "80px" }}
      >
        <footer className="footer">
          <div className="pt-2">
            <span style={{ fontWeight: "bolder", fontSize: "20px", color: "black" }}>
              {t("©All Right Reserved 2021")}
            </span>
          </div>
        </footer>
      </div>
    );
  }
