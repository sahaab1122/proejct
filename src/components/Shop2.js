import React from 'react'
import MainCard from './Maincard'
import Navbar from './Navbar'
import Featured from './Featured'
import ContactUs from './ContactUs'
import Footer from './Footer'
import About from './About Us'
//import MDBContainer from './mdbreact';
//import  MDBRow from './mdbreact';
//import  MDBCol from './mdbreact';
class Shop2 extends React.Component {
    render() {
        return (
            <div style={{ height: 'auto' }}>
                <div className="img-1">
                    <Navbar />
                </div>
      
             
                <div>
                    <About paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    <ContactUs />
                    <Footer />
                </div>



            </div>
        )
    }
}
export default Shop2