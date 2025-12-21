import ArrayMap from "./components/ArrayMap";
import ArrayFilter from "./components/ArrayFilter";
import "./App.css";

function App() {
  const names = ["Ravindu", "Kamal", "Nimal", "Saman", "Amal"];

  return (
    <div>
      <h1>Name List Example</h1>

      <ArrayMap names={names} />
      <ArrayFilter names={names} />
    </div>
  );
}

export default App;
