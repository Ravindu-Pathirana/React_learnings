// const student = (student_details) => {
//   return React.createElement("div", {}, [
//     React.createElement("h3", {}, student_details.name),
//     React.createElement("h3", {}, student_details.age + " years old"),
//     React.createElement("h3", {}, student_details.university),
//   ]);
// };

const Student =()=>{
    return(
        <div>
            <h3>Ravindu</h3>
            <h3>22 years old</h3>
            <h3>University of Moratuwa</h3>
        </div>

    );
};

export default Student;