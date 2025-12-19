import react from "react";

const Student =({name,age,university})=>{
    return(
        <div>
            <h3>{name}</h3>
            <h3>{`${age} years old`}</h3>
            <h3>{university}</h3>
        </div>

    );
};

export default Student;