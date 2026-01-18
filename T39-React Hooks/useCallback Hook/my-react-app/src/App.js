import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import NameList from "./NameList.jsx";

const names = [
  {id:0, name:"Alice"},
  {id:1, name:"Bob"},
  {id:2, name:"Charlie"},
  {id:3, name:"Diana"}
];

function App() {
  

  const [count, setCount] = useState(0);

  // const getNames = () => {
  //   return names[count];
  // }
  
  const getNames = useCallback(() => {return names[count]}, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>Count - {count}</h3>
        </p>
        <button onClick={() => setCount((count + 1) % names.length)}>
          Next Name
        </button>
        <button onClick={() => setCount((count - 1 + names.length) % names.length)}>
          Previous Name
        </button>
        <NameList getNames={getNames} />
      </header>
    </div>
  );
}

export default App;
