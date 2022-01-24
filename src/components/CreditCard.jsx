import React from 'react';

const CreditCard = (props) => {
  return <div className='creditcard' style={{backgroundColor: props.bgColor, color: props.color}}>
      <p className='type'>{props.type}</p>
      <p className='number'>•••• •••• •••• {props.number.substr(-4)}</p>
      <div className='middleline'>
      <p>Expires {('0'+props.expirationMonth).substr(-2)}/{props.expirationYear.toString().substr(2)}</p>
      <p className='bank'>{props.bank}</p>
      </div>
      <p className='owner'>{props.owner}</p>
  </div>;
};

export default CreditCard;
