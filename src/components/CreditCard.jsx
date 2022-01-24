import React from 'react';

const CreditCard = (props) => {
  return <div className='creditcard' style={{backgroundColor: props.bgColor, color: props.color}}>
      <p className='type'>{props.type}</p>
      <p className='number'>&#10084;&#10084;&#10084;&#10084; &#10084;&#10084;&#10084;&#10084; &#10084;&#10084;&#10084;&#10084; {props.number[12]}{props.number[13]}{props.number[14]}{props.number[15]}</p>
      <div className='middleline'>
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
      <p className='bank'>{props.bank}</p>
      </div>
      <p className='owner'>{props.owner}</p>
  </div>;
};

export default CreditCard;
