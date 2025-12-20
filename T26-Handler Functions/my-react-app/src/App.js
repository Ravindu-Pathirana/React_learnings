import "./App.css";
import StudentCard from "./components/StudentCard";

function App() {
  const handleChange = (event) => {
    console.log(`Hello, ${event.target.value}!`);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" placeholder="Enter your name" id="input" onChange={handleChange} backgroundColor="rgba(69, 12, 93, 1)"/>
      <StudentCard name="Ravindu" age={22} university="University of Moratuwa"/>
      <StudentCard name="Kamal" age={21} university="University of Kelaniya" />
      <StudentCard name="Pasindu" age={20} university="University of Colombo" />
      <StudentCard name="Yarn" age={24} university="University of J'Pura" />
      <StudentCard name="Anne" age={20} university="University of Peradeniya" />
    </div>
  );
}

export default App;
