import * as React from 'react';
import './style.css';

export default function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>By {props.post.author}</p>
      <p>{props.post.body}</p>
      <h1>Comments:</h1>
      {props.post.comments[0]}
    </div>
  );
}
