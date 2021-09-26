import React from 'react';
//use react bootstrap for icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import './Donator.css';
const Donator = (props) => {
   const {name,  ceo, img, key, donation,age} = props.donator;
   const element = <FontAwesomeIcon icon={faHandHoldingUsd} />
   const shopping = <FontAwesomeIcon icon={faShoppingCart} />
    return (
      <div className="donator-container">     
  <div className="card">        
  <img className="" src={img} alt="" />
    <h5 className="title">Name: {name}</h5>
    <p className="card-text">Ceo: {ceo}</p>
    <h5>key:{key}</h5>
    <h3>{element} Donation: {donation}</h3>
    <h3>Age: {age}</h3>
    <button onClick={()=>props.addDonateToCart(props.donator)} className="button">{shopping} Donate</button>
    </div>
   </div>       
    );
};

export default Donator;