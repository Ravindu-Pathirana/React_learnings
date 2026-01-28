import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./localStorage";
import useClock from "./Clock";


function App() {
  
  const [name, setName] = useLocalStorage('name_id','Ravindu');

  const inputHandle = (event) => {
    setName(event.target.value);
  };

  const time = useClock();
  console.log(time.toLocaleTimeString());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name - {name}</p>
        <input type='text' onChange={inputHandle}></input>
        <p>Current Time - {time.toLocaleTimeString()}</p>
      </header>
    </div>
  );
}

export default App;
