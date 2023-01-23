import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Post from './Post';
import Greeting from './Greeting';
import Hello from './Hello';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const post = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: ['First!', 'Great post', 'Hire this author now!'],
};

root.render(
  <StrictMode>
    <Post post={post}      
    />
  </StrictMode>
);
