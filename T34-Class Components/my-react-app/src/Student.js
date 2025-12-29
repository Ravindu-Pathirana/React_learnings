import React, { Component } from "react";

class Student extends Component {
  render() {
    const { name, age, university, image } = this.props;

    return (
      <div>
        <div>
            {image && (
          <img
            className="student-image"    
            src={image}
            alt={`${name}'s avatar`}
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
        )}
        </div>
        <div className="st-card">  
            <h3>{name}</h3>
            <h3>{age} years old</h3>
            <h3>{university}</h3>
        </div>
      </div>
    );
  }
}

export default Student;
