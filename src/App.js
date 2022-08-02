
/*
  functions in js - anonymous, arrow and usual (learnjavascript ru)
  what is array in js, map, forEach, filter - read in mdn website
  read react documentation (1-8)- read what is props, what is jsx ...

  - remove next, back buttons from index.html (code should be in react project!)
  - add onchage
*/

import './App.css';
import memes from './domain/memes';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState(memes);
  const [counter, setCounter] = useState(0)
  const increment = () => { 
    setCounter(counter + 1)
    console.log(counter)
  }
  const decrement = () => { 
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div className="outer_wrapper">
    <div className="wrapper">
       <div id="cloud-intro">
       <div className="App-head er">
      <h1>Memhana</h1>
      <div className = "image">
        <img src = {items[counter].image} width = "560px" height= "560px"></img>
      </div>
    <div className="button">
    <input type="submit" value="Back" onClick={decrement}/>
    </div>
    <div className="button">
    <input type="submit" value="Next" onClick={increment}/>
    </div>
  </div>
       </div>
      
      
    </div>
  </div>

  
    </div>
  );
}

  
export default App;
