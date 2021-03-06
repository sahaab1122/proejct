import React from 'react'
import { connect } from 'react-redux'
import { addCart } from '../Store/Action/Cartaction'

class Addtocart extends React.Component {


    addToCartFunction = () => {
        this.props.addToCart(this.props.item)
    }

    render() {

        return (
            <button onClick={() => this.addToCartFunction()} className="ripple" style={{ fontFamily: "poppins", textAlign: "center", marginRight: "10px", outline: "0px" }}>{this.props.title}</button>
        )
    }
}

const mapStatetoProps = state => {
    return {
        products: state
    }
}


const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addCart(item)),

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Addtocart);
