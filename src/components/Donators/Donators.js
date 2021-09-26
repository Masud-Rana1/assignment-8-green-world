import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donator from '../Donator/Donator';
import './Donators.css'
const Donators = () => {
    /* to load & to keep data using useEffect and useState */
    const [donators, setDonators] = useState([]);
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./donators.JSON')
        .then(res => res.json())
        .then(data => setDonators(data))
    },[])
    const addDonateToCart = (donator) =>{
        console.log(donator)
        const newCart = [...cart, donator];
        setCart(newCart);
    }
    return (
        <>
        {/* donators section */}
        <div className="donators-container">
            <div className="donator">
            {
                donators.map((donator) => <Donator
                key={donator.key} 
                donator={donator}
                addDonateToCart = {addDonateToCart}
                ></Donator>)
            }
            </div>
            
        {/* cart section */}
        <div>
            <Cart cart={cart}>

            </Cart>
        </div>
        </div>
        </>
    );
};

export default Donators;