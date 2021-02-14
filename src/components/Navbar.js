import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import logo1 from "../assets/logo1.png";
import Sidebar from '../components/sidebar'
import cateimg from "../assets/cateimg.png";
class Navbar extends React.Component {
  state = {click:false}
  render() {
    console.log(this.state);
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="col-sm-6 img-div">
          <img src={logo1} className="logo1" alt="logo" style={{ marginLeft: "40px", marginTop: "10px" }} />
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
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                style={{ backgroundColor: "#7e0001" }}
                href="/"
              >
                Shop Now
              </a>
            </li>
            <li  className="nav-item">
              <a onClick={() => this.setState({click:true})}    className="nav-link text-black" >
                <i class="fas fa-shopping-basket text-white " >  </i>
              </a>
            </li>
          </ul>
        </div>

        <th className={this.state.click === true ? "col-35 collapse new" : "col-35 collapse"}  style={{ backgroundColor: "white", position: "fixed", top: '0px', right: "0", height: "100%", width: "auto" }}>
          <br></br>
          <button onClick={() => this.setState({click:false})} type="button" class="close" aria-label="Close" style={{ marginRight: "45px" }}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="card " style={{ borderRadius: "12px", width: "175px", height: "65px", marginLeft: "20px", alignContent: "center", backgroundColor: "#e9e9e9" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "20px" }} >
                <div class="column" style={{ backgroundcolor: "#f2f2f2" }}>
                  <i class="fas fa-shopping-basket" style={{ color: "#960200", textalign: "left" }}></i>

                </div>
                <div class="column" style={{ fontSize: '21px', fontFamily: "poppins", color: "#960200" }}>

                  <p style={{ marginTop: "-3px", marginRight: "50px" }}>Cart</p>



                </div></div></div></div>

          <br></br>
          <div class="card " style={{ borderRadius: "12px", width: "312px", height: "103px", marginLeft: "20px", backgroundColor: "#e9e9e9" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "20px" }} >
                <div class="column" style={{ backgroundcolor: "#f2f2f2" }}>
                  <img src={cateimg} style={{ width: "72px", height: "71px", }} />

                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                  <p >Product Name</p>
                  <p style={{ marginTop: "-10px" }}>Category</p>
                  <button style={{ marginTop: "-20px", marginLeft: "20px", width: "63px", height: "22px", borderRadius: "4px", background: "#960200", color: "white" }}>Remove</button>


                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                  <p>Price</p>
                  <p>$1123</p>


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
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                  <p >Product Name</p>
                  <p style={{ marginTop: "-10px" }}>Category</p>
                  <button style={{ marginTop: "-20px", marginLeft: "20px", width: "63px", height: "22px", borderRadius: "4px", background: "#960200", color: "white" }}>Remove</button>


                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                  <p>Price</p>
                  <p>$1123</p>


                </div></div>
            </div>
          </div>

          <br></br>

          <div class="card " style={{ borderRadius: "12px", width: "312px", height: "103px", marginLeft: "20px", backgroundColor: "#e9e9e9" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "20px" }} >
                <div class="column" style={{ backgroundcolor: "transparent" }}>
                  <img src={cateimg} style={{ width: "72px", height: "71px", }} />

                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '9px', fontFamily: "poppins" }}>
                  <p >Product Name</p>
                  <p style={{ marginTop: "-10px" }}>Category</p>
                  <button style={{ marginTop: "-20px", marginLeft: "20px", width: "63px", height: "22px", borderRadius: "4px", background: "#960200", color: "white" }}>Remove</button>


                </div>
                <div class="column" style={{ backgroundcolor: "transparent", fontSize: '9px', fontFamily: "poppins" }}>
                  <p>Price</p>
                  <p>$1123</p>


                </div></div>
            </div>
          </div>

          <br></br>

          <div class="card " style={{ borderRadius: "12px", width: "371px", height: "65px", marginTop: "50px", backgroundColor: "#e9e9e9" }}>
            <div class="card-body text-center">
              <div class="row" style={{ marginLeft: "20px" }} >
                <div class="column" style={{
                  fontfamily: "Poppins", fontweight: "500", fontsize: "19px", textalign: "left", color: "#960200"
                }}>
                  <p style={{ textalign: "left" }}>Total</p>

                </div>
                <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '29px', fontFamily: "poppins" }}>



                </div>
                <div class="column" style={{ backgroundcolor: "transparent", fontSize: '29px', fontFamily: "poppins" }}>

                  <p >$1123</p>


                </div></div>
            </div>
          </div>





        </th>

      </nav>
    );
  }
}
export default Navbar

