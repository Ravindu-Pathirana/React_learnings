import logo from './logo.svg';
import './App.css';
import TextField from './TextField';
import LabledTextField from './LabledTextField';
import Button from './Button';
import clickButton from './clickButton';
import hoverButton from './hoverButton';
import advancedButton from './advancedButton';  


const NewlabledTextField = LabledTextField(TextField,"First Name");
const NewClickedButton = clickButton(Button);
const NewHoveredButton = hoverButton(Button);
const NewAdvancedButton = advancedButton(Button,true,false);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField />
        <NewlabledTextField />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewClickedButton text="Clicked Button"/>
        <NewHoveredButton text="Hovere Me"/>
        <NewAdvancedButton text="Advanced Button"/>
      </header>
    </div>
  );
}

export default App;
