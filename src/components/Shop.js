import React from 'react'
import Navbar from './Navbar'
import Maincard from './Maincard'
import MaskGroup1 from "../assets/MaskGroup1.png"
import Footer from './Footer'
import ContactUs from './ContactUs'
import Avalibal from './Avalibal'
import AboutUs from './About Us'
import FeatureData from './FeatureData'
import Featured from './Featured'
class Shop extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                
                <Featured />

<AboutUs />


          <Avalibal />
                <ContactUs />
                <Footer />
                


            </div>
        )
    }
}
export default Shop