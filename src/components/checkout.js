import React from "react";
import Navbar from "./Navbar";
import cateimg from "../assets/cateimg.png";
import Ripples from 'react-ripples'
import Categories from './Categories'
import { useTranslation, } from "react-i18next"
//import Featured from './Featured';
import Footer from "./Footer";
import Contact from "./ContactUs";
import { Link } from "react-router-dom";
import Addtocart from "./Addtocart";
import i18n from "../i18n";
import {addCart} from '../Store/Action/Cartaction'


class Checkout extends React.Component {

    state = {
        item: { id: 1, name: 'bakra' }
    }
 

    render() {
        return (

            <div style={{ height: 'auto' }}>
                <div className="img-3">
                    <Navbar />
                </div>

                <div>
                    <div class='some-page-wrapper'>
                        <div class='some-page-wrapper'>
                            <div class='row'>
                                <div class='column'>

                                    <img src={cateimg} class="img-rounded" alt="Cinque Terre" style={{ marginLeft: "auto", padding: "9px", borderRadius: "11px", marginBottom: "60px", maxwidth: "25%" }} />

                                </div>
                                <div class='column1' style={{ marginTop: "90px" }}>

                                    <p style={{ textAlign: "left", fontSize: "29px", fontFamily: "poppins", marginBottom: "-1rem" }}>{i18n.t("Price")} <a style={{ marginLeft: "250px ", fontSize: "29px", marginTop: "60px", color: "black  " }}><i class="far fa-heart fa-sx hoverNav"  ></i></a></p>
                                    <span style={{ textAlign: "left", fontSize: "64px", fontWeight: "600", fontFamily: "poppins", }}>{i18n.t("$1123")}</span>
                                    <span style={{ textAlign: "left", fontSize: "29px", fontFamily: "poppins" }}>{i18n.t("Categories")}</span>
                                    <div style={{ display: "flex", flexDirection: "row" }}>



                                        <Addtocart title={i18n.t("addTocart")} item={this.state.item} />
                                        <button className="ripple" style={{ fontFamily: "poppins", textAlign: "center", color: "white", outline: "0px", backgroundColor: "white!important" }}><Link to="/inputfieldbody">{i18n.t("buyItNow")}</Link></button>
                                    </div>
                                </div>

                            </div>  <br></br>  <Categories />

                        </div><Contact /><Footer />
                    </div>
                </div>

            </div>




        )
    }
}

const mapStatetoProps = (state) => {
    return {
        
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addCart(item)),
      
    }
}

export default Checkout;