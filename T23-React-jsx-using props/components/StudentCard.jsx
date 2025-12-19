import Student from "./Student";

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

export default StudentCard;