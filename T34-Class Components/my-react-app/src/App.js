import React from "react";
import "./App.css";
import Search from "./Search";
import Student from "./Student";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", name: "" };
  }

  onSearch = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const studentList = [
      { name: "Ravindu", age: 22, university: "University of Moratuwa" },
      { name: "Kamal", age: 21, university: "University of Kelaniya" },
      { name: "Pasindu", age: 20, university: "University of Colombo" },
      { name: "Yarn", age: 24, university: "University of J'Pura" },
      { name: "jane", age: 25, university: "University of Ruhuna" },
      { name: "Anne", age: 20, university: "University of Peradeniya" },
    ];

    const { text } = this.state;

    return (
      <div>
        <h1>My React App</h1>
        <Search onSearch={this.onSearch} searchText={text} />
        <div>
          <p id="sample-text">{text}</p>
          <p id="sample-text"></p>
        </div>
        {studentList.map((student, index) => {
          if (student.name.toLowerCase().includes(text.toLowerCase())) {
            return (
              <Student
                key={index}
                image={
                  "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png"
                }
                name={student.name}
                age={student.age}
                university={student.university}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default App;
