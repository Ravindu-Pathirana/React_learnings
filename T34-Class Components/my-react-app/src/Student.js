import React, { Component } from "react";

class Student extends Component {
  render() {
    const { name, age, university, image } = this.props;

    return (
      <div>
        {image && (
          <img
            src={image}
            alt={`${name}'s avatar`}
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
        )}
        <h3>{name}</h3>
        <h3>{age} years old</h3>
        <h3>{university}</h3>
      </div>
    );
  }
}

export default Student;
