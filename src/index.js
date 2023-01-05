import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const welcomeMessage = "Hello there! I'm Isaac Machakata and I'm currently learning some React basics.";
const h1Tag = "<h1>{welcomeMessge}</h1>";
ReactDOM.render(
    h1Tag,
    document.getElementById('root')
);