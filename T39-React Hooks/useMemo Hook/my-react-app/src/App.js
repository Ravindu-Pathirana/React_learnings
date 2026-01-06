import logo from "./logo.svg";
import "./App.css";
import { useState, useMemo } from "react";

const numberList = new Array(10000000).fill(0).map((num, idx) => {
  return {
    id: idx,
    isSelected: idx === 9999999,
  };
});

console.log(numberList);

function App() {
  // var numberList = new Array(10000000);
  // numberList.fill(0);
  // console.log(numberList);

  const [count, setCount] = useState(0);

  // const selectedItem = numberList.find((num) => {
  //   return num.isSelected;
  // });

  const selectedItem = useMemo(() => {
    return numberList.find((num) => {
      return num.isSelected;
    });
  }, []);

  // const newNumberList = numberList.map((num, idx) => {
  //   return{
  //     id: idx,
  //     isSelected: idx ===999999,
  //   }
  // });

  // console.log(newNumberList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Count - {count}</h2>
        <br />
        <h2>Selected Item ID - {selectedItem.id}</h2>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </header>
    </div>
  );
}

export default App;
