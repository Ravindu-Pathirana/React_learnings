import React, { Component } from "react";

class Search extends Component {
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

export default Search;
