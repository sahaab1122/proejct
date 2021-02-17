import React from "react";
import Navbar from "./Navbar";
import cateimg from "../assets/cateimg.png";
import Ripples from 'react-ripples'
import Categories from './Categories'
import { useTranslation, } from "react-i18next"
//import Featured from './Featured';
export default () => {

    const { t } = useTranslation()
        return (

            <div style={{ height: 'auto' }}>
            <div className="img-1">
                <Navbar />
            </div>
            
                <div>
                <div class='some-page-wrapper'>
                <div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
    <img src={cateimg} style={{ width: "50%",marginLeft: "250px", }} />
        
      
    </div>
    <div class='column1'>

        <p style={{ textAlign:"left", fontSize: "29px",fontFamily:"poppins", marginBottom:"-1rem"}}>{t("Price")}</p>
        <span style={{textAlign:"left", fontSize: "64px", fontWeight:"600", fontFamily:"poppins", }}>{t("$1123")}</span>
        <span style={{ textAlign:"left",fontSize: "29px",fontFamily:"poppins" }}>{t("Categories")}</span>
    <button className="ripple" style={{fontFamily:"poppins", marginBottom:"10px"}}>{t("addToCart")}</button>
    <button className="ripple" style={{fontFamily:"poppins" , textAlign: "center", }}>{t("buyItNow")}</button>
    
    </div>

  </div>    <Categories />
  
</div>
</div>
                </div>
                
            </div>




        )
    }
