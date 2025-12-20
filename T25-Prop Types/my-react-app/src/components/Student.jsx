//import react from 'react';
import PropTypes from 'prop-types';

const Student =({name,age,university})=>{
    return(
        <div>
            <h3>{name}</h3>
            <h3>{`${age} years old`}</h3>
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