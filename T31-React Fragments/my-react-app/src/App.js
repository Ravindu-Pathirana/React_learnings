//import ArrayMap from "./components/ArrayMap";
//import ArrayFilter from "./components/ArrayFilter";
import "./App.css";
import OrderedList from "./components/OrderedList";
import UnorderedList from "./components/UnorderedList";

function App() {
  const names = ["Ravindu", "Kamal", "Nimal", "Saman", "Amal", "Sunil"];

  return (
    <div className="App">
      <h1>Name Lists</h1>
      <h2>Ordered List</h2>
      <OrderedList items={names} />
      <h2>Unordered List</h2>
      <UnorderedList items={names} />
    </div>
  );
}

export default App;
