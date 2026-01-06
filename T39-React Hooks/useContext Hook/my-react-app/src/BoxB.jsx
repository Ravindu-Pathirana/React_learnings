import BoxC from "./BoxC";
import { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxB = ({ name }) => {
  const { theme, toggleTheme } = useContext(NameContext);

  const themestyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  };

  return (
    <div className="box" style={themestyle}>
      <h1>Box B</h1>
      <BoxC name={name} />
    </div>
  );
};

export default BoxB;
