import React from "react";
import Navbar from "./Navbar";
import cateimg from "../assets/cateimg.png";
import Ripples from 'react-ripples'
import Categories from './Categories'

//import Featured from './Featured';
class checkout extends React.Component {


    render() {
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

        <p style={{ textAlign:"left", fontSize: "29px",fontFamily:"poppins", marginBottom:"-1rem"}}>Price</p>
        <span style={{textAlign:"left", fontSize: "64px", fontWeight:"600", fontFamily:"poppins", }}>$1123</span>
        <span style={{ textAlign:"left",fontSize: "29px",fontFamily:"poppins" }}>Categories</span>
    <button className="ripple" style={{fontFamily:"poppins", marginBottom:"10px"}}>Add to cart</button>
    <button className="ripple" style={{fontFamily:"poppins" , textAlign: "center", }}>Buy it Now</button>
    
    </div>

  </div>    <Categories />
  
</div>
</div>
                </div>
                
            </div>




        )
    }
}
export default checkout