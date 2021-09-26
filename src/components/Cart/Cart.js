import React from 'react';
import './Cart.css';

//calculation cart
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let donation = 0;
    let name = "";
    let donatedPerson = [];
    for(const den of cart){
        total = total +den.donation
        name = den.name
         donation = den.donation;
         donatedPerson.push(' ' +den.name);   
    }

    return (
        <div className="cart">
            <h3>summary</h3>
            <p>Already Gived :{donatedPerson}</p>
            <h1>Last Giver Name:{name}</h1>
            <h2>Last-Donation:${donation}</h2>
            <h5>number of total giver: {props.cart.length}</h5>
            <hr />
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;