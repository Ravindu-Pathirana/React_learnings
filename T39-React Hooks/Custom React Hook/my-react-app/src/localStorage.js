import { useState } from "react";

function useLocalStorage(key, Value) {

    const[current_value,setCurrentValue] = useState(() => {

        try{
            const localVal=localStorage.getItem(key);
            return localVal ? JSON.parse(localVal) : Value;
        }catch(error){
            console.log(error);
        }

    });

    const setValue = (newValue) => {
        try{
            setCurrentValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        }catch(error){
            console.log(error);
        }
    };

    return [current_value, setValue];
}
export default useLocalStorage;