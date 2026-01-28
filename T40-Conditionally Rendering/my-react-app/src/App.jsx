import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import IfBox from "./IfBox";
import TernaryBox from "./TernaryBox";
import LogicalBox from "./LogicalBox";
import FuntionBox from "./FunctionBox";
import SwitchBox from "./SwitchBox";
import ClassBox from "./ClassBox";

function App() {
  
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Conditional Rendering</h2>
        <button onClick={() => setIsLogged(isLogged?false:true)}>{isLogged ? "Logout" : "Login"}</button>
        <IfBox isLogged={isLogged} />
        <TernaryBox isLogged={isLogged} />
        <LogicalBox isLogged={isLogged} />
        <FuntionBox isLogged={isLogged} />
        <SwitchBox  isLogged={isLogged} />
        <ClassBox isLogged={isLogged} />
      </header>
    </div>
  );
}

export default App;
