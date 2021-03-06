import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from "react-router-dom"
import logo1 from "../assets/logo1.png";

import cateimg from "../assets/cateimg.png";
import i18n from '../i18n';
import { connect } from 'react-redux';


class Navbar extends React.Component {

  state = {
    click: false
  }

  changeLanguage = (ln) => {

    i18n.changeLanguage(ln);
    console.log('Language changed to ${ln}');

  };

  
  render() {


    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="col-sm-6 img-div">
          <img src={logo1} className="logo1" alt="logo" style={{ marginLeft: "150px", marginTop: "30px" }} />
          <div class="text-center"><button onClick={() => this.changeLanguage("en")}>en</button>
            <button onClick={() => this.changeLanguage("ar")}>ar</button></div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"

        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navbar-main"
          id="navbarSupportedContent" style={{ color: "white" }}
        >

          <ul className="navbar-nav" >

            <li className="nav-item active" style={{ marginInline: "30px" }}>
              <Link className="nav-link text-white" to="/home">
                {i18n.t("home")}
              </Link>
            </li>
            <li className="nav-item" style={{ marginInline: "30px" }} >
              <Link className="nav-link text-white" href="#About" to="/shop2" >
                {i18n.t("aboutUs")}
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/">
                {i18n. t("Wishlist")}
              </a>
            </li> */}
            <li className="nav-item" style={{ marginInline: "20px" }}>
              <Link className="nav-link text-white" style={{ backgroundColor: "#7e0001" }} to="/Inputfieldbody">
                {i18n.t("Shop Now")}
              </Link>
            </li>
            <li className="nav-item " onClick={() => this.setState({ click: true })}>
              {/* <a onClick={() => setClick(true)}    className="nav-link text-black"  > */}
              <text>{this.props.products.length}</text>
              <i class="fas fa-shopping-basket text-white nav-link hoverNav "  >  </i>

              {/* </a> */}
            </li>
          </ul>
        </div>

        <th className={this.state.click === true ? "col-35 ss new" : "col-35 ss new-1"} style={{ backgroundColor: "white", position: "fixed", top: '0px', right: "0", height: "100%", width: "auto" }}>
          <br></br>
          <button onClick={() => this.setState({ click: false })} type="button" class="close" aria-label="Close" style={{ marginRight: "45px" }}>
            <span aria-hidden="false" >x</span>
          </button>

          <Link to="/checkout"><button class="card " style={{ borderRadius: "12px", width: "175px", height: "65px", marginLeft: "20px", alignContent: "center", backgroundColor: "#e9e9e9", outline: "0px" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "30px" }} >
                <div class="column" style={{ backgroundcolor: "#f2f2f2", marginRight: "3px" }}>
                  <i class="fas fa-shopping-basket" style={{ color: "#960200", textalign: "left" }} ></i>

                </div>

                <div class="column" style={{ fontSize: '21px', fontFamily: "poppins", color: "#960200", marginRight: "10px" }}>

                  <p style={{ marginTop: "-3px", marginRight: "40px" }}>{i18n.t("Cart")}</p></div></div></div>
          </button ></Link>
          <br></br>
          <div >
            <div class="card " style={{ borderRadius: "12px", width: "312px", height: "103px", marginLeft: "20px", backgroundColor: "#e9e9e9" }}>
              <div class="card-body text-center">
                <div class="row" style={{ marginLeft: "20px" }} >
                  <div class="column" style={{ backgroundcolor: "#f2f2f2" }}>
                    <img src={cateimg} style={{ width: "72px", height: "71px" }} />

                  </div>
                  <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '10px', color: "black" }}>
                    <p style={{ fontsize: "40px" }}>{i18n.t("Product Name")}</p>




                  </div>
                  <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '8px', fontFamily: "poppins", color: "black" }}>
                    <span class="hoverX" style={{ fontsize: "1.5rem" }} aria-hidden="true">×</span>
                    <p>{i18n.t("Price")}</p>
                    <p style={{ marginTop: "-10px" }}>{i18n.t("$1123")}</p>


                  </div></div>
              </div>
            </div>


            <br></br>
            <div class="card " style={{ borderRadius: "12px", width: "312px", height: "103px", marginLeft: "20px", backgroundColor: "#e9e9e9" }}>
              <div class="card-body text-center">
                <div class="row" style={{ marginLeft: "20px" }} >
                  <div class="column" style={{ backgroundcolor: "#f2f2f2" }}>
                    <img src={cateimg} style={{ width: "72px", height: "71px", }} />

                  </div>
                  <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins", color: "black" }}>
                    <p >{i18n.t("Product Name")}</p>


                  </div>
                  <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins", color: "black" }}>
                    <span class="hoverX" aria-hidden="true " >×</span>
                    <p>{i18n.t("Price")}</p>
                    <p style={{ marginTop: "-10px" }}>{i18n.t("$1123")}</p>


                  </div></div>
              </div>
            </div>

            <br></br>

            <div class="card " style={{ borderRadius: "12px", width: "312px", height: "103px", marginLeft: "20px", backgroundColor: "#e9e9e9", color: "black" }}>
              <div class="card-body text-center">
                <div class="row" style={{ marginLeft: "20px" }} >
                  <div class="column" style={{ backgroundcolor: "transparent" }}>
                    <img src={cateimg} style={{ width: "72px", height: "71px", }} />

                  </div>
                  <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                    <p >{i18n.t("Product Name")}</p>


                  </div>
                  <div class="column" style={{ backgroundcolor: "transparent", fontSize: '9px', fontFamily: "poppins" }}>
                    <span class="hoverX" aria-hidden="true">×</span>
                    <p>{i18n.t("Price")}</p>
                    <p style={{
                      marginTop: "-10px", fontfamily: "Poppins", fontweight: "600", fontsize: "29px", textalign: "left", color: "#3a3a3a"
                    }}>{i18n.t("$1123")}</p>


                  </div></div>
              </div>
            </div>
          </div>
          <br></br>

          <div class="card " style={{ borderRadius: "12px", width: "371px", height: "65px", marginTop: "50px", backgroundColor: "#e9e9e9" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "20px" }} >
                <div class="column" style={{
                  fontfamily: "Poppins", fontweight: "500", fontsize: "19px", textalign: "left", color: "#960200"
                }}>
                  <p style={{ textalign: "left" }}>{i18n.t("Total")}</p>

                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '29px', fontFamily: "poppins" }}>



                </div>
                <div class="column" style={{ backgroundcolor: "transparent", fontSize: '29px', fontFamily: "poppins", color: "black" }}>

                  <p >{i18n.t("$1123")}</p>


                </div></div>
            </div>
          </div>





        </th>

      </nav>
    );
  }

}

const mapState=state=>{
  return {
    products:state.cartReducers.products
  }
}

export default connect(mapState, null) (Navbar);

