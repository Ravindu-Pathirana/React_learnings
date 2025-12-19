import Student from "./Student";
// const studentcard = (student_details) => {
//   return React.createElement(
//     "div",
//     { className: "st-card" },
//     React.createElement("img", {
//       className: "student-image",
//       src: student_details.image,
//       alt: "student-image",
//     }),
//     React.createElement(student, {
//       name: student_details.name,
//       age: student_details.age,
//       university: student_details.university,
//     })
//   );
// };

const StudentCard = () => {
    return (
        <div className="st-card">
            <img className="student-image" 
            src="https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png" 
            alt="student-image" />
            <Student/>
        </div>
    );
};

export default StudentCard;