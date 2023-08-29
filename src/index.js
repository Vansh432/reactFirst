import React from "react";

//it is used for react 17 or below versions--> 
// import ReactDOM  from "react-dom";

// ReactDOM.render(<>
// <h1>hello guy's </h1>
// </>,document.getElementById("root"));

//it latest version from  react 18-->
import {createRoot} from 'react-dom/client';
import './nav.css';
import './main.css';
import './home.css';
import App from './App';


let container=document.getElementById('root');
let root=createRoot(container);
root.render(<App/>);