import React,{useState} from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const [text, setText] = useState(20);
  let x=100;
  const handleChange = (event) => {
    console.log(`Hello, ${event.target.value}!`);
    //const sampleText= document.getElementById("sample-text");
    //sampleText.innerHTML= event.target.value;
    x = event.target.value;
    console.log(x);
    setText(x);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" placeholder="Enter your name" id="input" onChange={handleChange} style={{backgroundColor: "rgba(210, 234, 229, 1)"}} />
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text">{x}</p>
      </div>  
      <StudentCard name="Ravindu" age={22} university="University of Moratuwa"/>
      <StudentCard name="Kamal" age={21} university="University of Kelaniya" />
      <StudentCard name="Pasindu" age={20} university="University of Colombo" />
      <StudentCard name="Yarn" age={24} university="University of J'Pura" />
      <StudentCard name="Anne" age={20} university="University of Peradeniya" />
    </div>
  );
}

export default App;
