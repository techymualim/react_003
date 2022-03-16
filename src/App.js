import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js'
import React,{useState} from 'react';
import ValueContext from './ValueContext';
function App() {
  let value=useState(84);
  //let [number,SetNum]=useState(45);
  return (
    <ValueContext.Provider value={value}>
       <div className="App">
     Hello World

     <Parent  ></Parent>
    </div>
    </ValueContext.Provider>
   
  );
}

export default App;
