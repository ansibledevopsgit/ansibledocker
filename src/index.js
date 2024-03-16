import React from 'react';
import ReactDOM from 'react-dom/client';
import DotNet from "./dotnet/DotNet";
import Node from "./node/Node";
import Log from "./postgres/Log";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <DotNet/> */}
     <Node />
     <Log /> 
  </React.StrictMode>
);

 
reportWebVitals();
