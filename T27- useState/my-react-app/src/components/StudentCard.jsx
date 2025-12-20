import Student from "./Student";
import PropTypes from 'prop-types';

const StudentCard = ({name,age,university}) => {
    return (
        <div className="st-card">
            <img className="student-image" 
            src="https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png" 
            alt="student-image" />
            <Student name={name} age={age} university={university}/>
        </div>
    );
};

StudentCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    university: PropTypes.string.isRequired,
};

export const test = 10;
export default StudentCard;