import * as React from 'react';
import './style.css';

export default function Greeting(props) {
  return (
    <div>
      <h3>Hello {props.name}! Good {props.time}</h3>
    </div>
  );
}
