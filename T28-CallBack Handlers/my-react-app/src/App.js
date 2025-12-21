import React from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [text, setSearchtext] = React.useState("");

  const searchChange = (event) => {
    setSearchtext(event.target.value);
    //console.log(event.target.value)
  };

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange}/>
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text"></p>
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
