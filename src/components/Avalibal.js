import React, { Component } from 'react'
import AvalibalImg from '../assets/Layer 1.png';
export default class Avalibal extends Component {
    render() {
        return (
            <div className="container available-main" style={{display:'flex', marginTop:'152px',flexWrap:'wrap'}}>
                <div className="text-div">
                    <h2>Also Available at</h2>
                </div>
                <div className="available-img" style={{marginLeft:'200px'}}>
                    <div className="available-img1">
                <img src={AvalibalImg} classNameName="available-image" alt="available at"/>
                    </div>
                </div>
            </div>
        )
    }
}
