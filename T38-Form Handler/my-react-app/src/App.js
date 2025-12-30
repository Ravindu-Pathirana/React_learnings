import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //const [username, setUsername] = useState("ABC");

  // const usernameHandler = (e) => {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // };

  //const [password, setPassword] = useState("asd");

  // const passwordHandler = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  //const [email, setEmail] = useState("ABC@gmail.com");

  // const emailHandler = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  //const [age, setAge] = useState(20);

  // const ageHandler = (e) => {
  //   console.log(e.target.value);
  //   setAge(e.target.value);
  // };

  //const [gender, setGender] = useState("male");

  // const genderHandler = (e) => {
  //   console.log(e.target.value);
  //   setGender(e.target.value);
  // };
  //const [country, setCountry] = useState("India");

  // const countryHandler = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };

  //const [hobbies, setHobbies] = useState([]);

  // const hobbiesHandler = (e) => {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;

  //   if (isChecked) {
  //     console.log(value);
  //     if (!hobbies.includes(value)) {
  //       setHobbies([...hobbies, value]);
  //     }
  //   } else {
  //     setHobbies(hobbies.filter((hobby) => hobby !== value));
  //   }
  // };

  const [fieldData, setFieldData] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    country: "",
    hobbies: [],
  });

  const fieldHandler = (e) => {
    console.log(e.target.value);

    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFieldData({ ...fieldData, hobbies: [...fieldData.hobbies, value] });
      } else {
        setFieldData({
          ...fieldData,
          hobbies: fieldData.hobbies.filter((hobby) => hobby !== value),
        });
      }
    } else {
      setFieldData({ ...fieldData, [name]: value });
    }
  };

  console.log(fieldData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <label>User Name: </label>
            <input
              type="text"
              value={fieldData.username}
              onChange={fieldHandler}
              name="username"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={fieldData.password}
              onChange={fieldHandler}
              name="password"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={fieldData.email}
              onChange={fieldHandler}
              name="email"
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="Number"
              value={fieldData.age}
              onChange={fieldHandler}
              name="age"
            />
          </div>
          <div>
            <label>Gender: </label>
            <label>
              <input
                type="radio"
                lable="Male"
                checked={fieldData.gender === "male"}
                value="male"
                name="gender"
                onChange={fieldHandler}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                lable="Female"
                checked={fieldData.gender === "female"}
                value="female"
                name="gender"
                onChange={fieldHandler}
              />
              Female
            </label>
          </div>
          <div>
            <label>Country: </label>
            <select
              name="country"
              value={fieldData.country}
              onChange={fieldHandler}
            >
              <option value="null">--Select--</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Sri-Lanka">Sri-Lanka</option>
            </select>
          </div>
          <div>
            <label>Hobbies: </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="hobby1"
                value="Reading"
                onChange={fieldHandler}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby2"
                value="Traveling"
                onChange={fieldHandler}
              />
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby3"
                value="Gaming"
                onChange={fieldHandler}
              />
              Gaming
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby4"
                value="Cooking"
                onChange={fieldHandler}
              />
              Cooking
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby5"
                value="Sports"
                onChange={fieldHandler}
              />
              Sports
            </label>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
