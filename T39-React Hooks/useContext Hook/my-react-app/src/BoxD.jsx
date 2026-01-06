import { useContext } from "react";
import { NameContext } from "./BoxA";   

const BoxD = ({name}) => {

  const {newName, theme, toggleTheme} = useContext(NameContext);

  const themestyle ={
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  }

  return (
    <div className="box" style={themestyle}>
        <h1>Box D</h1>
        <p>Name: {name}</p>
        <p>Newname:{newName}</p>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default BoxD;