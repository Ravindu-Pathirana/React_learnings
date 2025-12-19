import "./App.css";
import StudentCard from "/Volumes/My Disk 2/React/React_learnings/T24-Create React App using JavaScript/my-react-app/src/components/StudentCard";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard name="Ravindu" age={22} university="University of Moratuwa" />
      <StudentCard name="Kamal" age={21} university="University of Kelaniya" />
      <StudentCard name="Pasindu" age={20} university="University of Colombo" />
      <StudentCard name="Yarn" age={24} university="University of J'Pura" />
      <StudentCard name="Anne" age={20} university="University of Peradeniya" />
    </div>
  );
}

export default App;
