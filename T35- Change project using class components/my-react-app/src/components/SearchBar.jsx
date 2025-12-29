import React from "react";
import { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
    this.props.onSearch(event);
  };

  render() {
    return (
      <div className="search-bar-container">
        <input
          className="search-input"
          placeholder="Enter Name here..."
          focus ="true"
          type="text"
          onChange={this.props.onSearch}
          value={this.props.searchText}
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

// const SearchBar = ({ onSearch, searchText }) => {
//   const searchHandle = (event) => {
//     //console.log(`Searching for ${event.target.value}`);
//     if (onSearch) onSearch(event);
//   };

//   return (
//     <div className="form-container">
//       <form className="form-wrapper">
//         <input
//           type="text"
//           id="search"
//           className="search-input"
//           value={searchText}
//           placeholder="Search for..."
//           onChange={searchHandle}
//         />
//       </form>
//     </div>
//   );
// };

export default SearchBar;
