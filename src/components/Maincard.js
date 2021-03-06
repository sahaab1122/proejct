import { Component } from "react";
import React from "react"
import MainCard from "../assets/MainCard1.png"
import path from "../assets/Path 14.png";
import rectangel from "../assets/Rectangle 1.png";
import rectange5 from "../assets/Rectangle 5.png";
import Categories from './Categories'
import Featured from './Featured'
import About from './About Us';
import Navbar from "./Navbar";
import Avalibal from "./Avalibal";
import shop2bg from '../assets/MainCard1.png'
import Contact from "./ContactUs";
import Footer from "./Footer";
import { useTranslation, } from "react-i18next"
export default (props) => {

    const { t } = useTranslation()
        return (
            <div className="card pmd-card  text-white  overlay-card m-0 p-0"  >
                <div
                    className="main-card parent "style={{ height: "101vh", marginBottom:"0px", paddingBottom:"0px"}}>
                                                <Navbar />
                        
                        <div className="shop2bg" style={{position:'absolute'}}>


                        </div>
                    {/* <div
                        src={this.props.Shop2 ? shop2bg : MainCard}
                        alt="not found"
                        className={this.props.Shop2 ?"pmd-card-media image1 shop2bg" : "pmd-card-media image1"}
                        height="100%"
                        width="100%"
                    />


                    <img
                        src={path}
                        alt="not found"
                        width="100%"X
                        style={{ display: "inline" }}
                        className="image2"
                    />
                    <img
                        src={rectangel}
                        alt="not found"
                        width="100%"
                        style={{ display: "inline" }}
                        className="image2"
                    />
                    <img
                        src={rectange5}
                        alt="not found"
                        width="100%"
                        style={{ display: "inline" }}
                        className="image4"
                    /> */}
                </div>
                {
                    props.Home && 
                   <div>
                        <div style={{ position: 'relative' }} >
                    <Categories />
                    <Featured />
                </div>
                <About paragraph={t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")} />
                <Avalibal />
                <Contact />
                <Footer />
                       </div>
                
    }
            </div>
                
        );
    }


