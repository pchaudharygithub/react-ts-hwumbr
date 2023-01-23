import * as React from 'react';
import './style.css';

export default function Hello(props) {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
}