import { useEffect, useState } from "react";

const NameList = ({getNames}) => {

    const[names, setNames] = useState([]);

    useEffect(() => {
        setNames([...names, getNames()]);
    },[getNames]);
    
    return (
        <div>
            <h2>Name List Component</h2>
            {names.map(name => {
                return <li key={name.id}>{name.name}</li>
            })}
        </div>
    );
};

export default NameList;