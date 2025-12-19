import React from "react";
import ReactDOM from "react-dom/client";
import StudentCard from "./components/StudentCard";

const App =()=>{
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard name="Ravindu" age={22} university="University of Moratuwa"/>
      <StudentCard name="Kamal" age={21} university="University of Kelaniya"/>
      <StudentCard name="Pasindu" age={20} university="University of Colombo"/>
      <StudentCard name="Anne" age={20} university="University of Peradeniya"/>

    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

