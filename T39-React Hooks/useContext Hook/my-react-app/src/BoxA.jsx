import { createContext,useState } from "react";
import BoxB from "./BoxB";

export const NameContext = createContext();

const BoxA = () => {
    const[name,setName]= useState("Ravindu");
    const[theme,setTheme]= useState("light");

    const newName = "Jayasankha"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="box">
            <h1>Box A</h1>
            <NameContext.Provider value={{newName, theme, toggleTheme}}>
                <BoxB name={name}/>
            </NameContext.Provider>
            
        </div>
    );
}

export default BoxA;