import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js'
import React,{useState} from 'react';
function App() {

  let [number,SetNum]=useState(45);
  return (
    <div className="App">
     Hello World

     <Parent num={number} ></Parent>
     <button onClick={()=>{SetNum(++number)}}>Number Increaser</button>
    </div>
  );
}

export default App;
