import { useReducer, useState } from "react";

function reducer(nameList, action) {
    switch(action.type){
        case 'ADD_NAME':
            return {names: [...nameList.names, action.payload]};
        default:
            return nameList;
    }
}

const NameList = () => {

    const[name,setName] = useState("");

    const[nameList,dispatch] = useReducer(reducer,{names:[]});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_NAME',payload:name});
        setName("");
    };

    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your name" />
        </form>
        <p>{nameList.names.join(", ")}</p>
        </div>
    );

};

export default NameList;