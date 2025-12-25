import React , {useState} from 'react';
import PropTypes from 'prop-types';

const Student =({name,age,university})=>{

    const [newAge, setNewAge] = useState(age);


    const handleWheel = (event) => {
        if(event.deltaY > 0){
            console.log(`You have scrolled to Down`);
            setNewAge(newAge - 1);
        }else{
            console.log(`You have scrolled to Up`);
            setNewAge(newAge + 1);
        }
    };

    return(
        <div>
            <h3>{name}</h3>
            <h3 onWheel={handleWheel}>{`${newAge} years old`}</h3>
            <h3>{university}</h3>
        </div>

    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    university: PropTypes.string.isRequired,
};

export default Student;
