import React from 'react';

const Animal = props => (
  <li>{props.name} ({props.latin}) siger {props.sound}</li>
);

export default Animal;