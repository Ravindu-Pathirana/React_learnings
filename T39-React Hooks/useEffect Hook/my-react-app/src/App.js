import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [lastcount,setLastCount] = useState(0);
  
  useEffect(() => {

    // setTimeout(() => {
    console.log("Component has been mounted using useEffect Hook");
    //   setCount(count+1);
    //  }, 1000);
    
    return () =>{
      console.log("Component will unmount now");
    }

  },[count,lastcount]); 

  const counter = () => {
    setCount(count+1);
    if((count+1) % 5 === 0){
      setLastCount(lastcount+1);
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UseEffect Hook Example
        </p>
        <p>Component mounted {count} time(s)</p>
        <button onClick={counter}>Click me</button>
        <p>Last Component mounted {lastcount} time(s)</p>
        
      </header>
    </div>
  );
}

export default App;
