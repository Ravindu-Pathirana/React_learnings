import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);


  function counter(){
    console.log('Button clicked');
    setCount(count + 1);
    console.log(count);
  }

  function decrementCounter(){
    console.log('Button clicked');
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={counter}>Click me +</button>
        <div>
          
        </div>
        <button onClick={decrementCounter}>Click me -</button>
      </header>
    </div>
  );
}

export default App;
