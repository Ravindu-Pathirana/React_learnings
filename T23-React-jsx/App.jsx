import React from "react";
import ReactDOM from "react-dom/client";
import StudentCard from "./components/StudentCard";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "My React App"),
//     React.createElement(studentcard, {
//       name: "Ravindu",
//       age: 22,
//       university: "University of Moratuwa",
//       image:
//         "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//     }),
//     React.createElement(studentcard, {
//       name: "Sarah",
//       age: 21,
//       university: "University of Colombo",
//       image:
//         "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//     }),
//     React.createElement(studentcard, {
//       name: "Michael",
//       age: 23,
//       university: "University of Peradeniya",
//       image:
//         "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//     }),
//     React.createElement(studentcard, {
//       name: "Amaya",
//       age: 20,
//       university: "University of Kelaniya",
//       image:
//         "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//     }),
//   ]);
// };

const App =()=>{
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard/>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

