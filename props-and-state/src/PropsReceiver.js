import React from 'react';

const PropsReceiver = props => {
  return (
    <p>
      Modtaget som props: {props.amount}
    </p>
  );
};

export default PropsReceiver;