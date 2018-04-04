import React from 'react';

const PropsReceiver = props => {
  return (
    <div>
      <p>
        Modtaget som props: {props.amount}
      </p>
      {
        props.amount % 10 === 0 && 
        <p>Tallet går op i 10!</p>
      }
    </div>
    
  );
};

export default PropsReceiver;