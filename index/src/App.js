import React, {useState} from 'react';
import Tweet from "./tweet"


function App()
{

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

const increment = ()=>{
  setCount(count + 1);
}

 return (
<div className="App">
 
  <button onClick={increment}>Increment</button>
  <h1>{count}</h1>
 
  </div>
 );



}

export default App;