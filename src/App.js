import React from "react";
import ReactDOM from "react-dom";
import Barchart from './Barchart';
import './App.css';

function App() {
  return (
    <div>
      <svg width="800" height="600">
        <Barchart x={50} y={70} width={400} height={300} />
      </svg>
    </div>
  );
}

export default App;
