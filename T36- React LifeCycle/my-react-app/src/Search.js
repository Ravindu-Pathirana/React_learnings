import { Component } from "react";
import './App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ text: event.target.value });
        this.props.onChange(event);
    }

    handleSearch = () => {
        alert(`Searching for: ${this.state.text}`);
    }

    render() {
        return (
            <div className="Search-container">
                <input className="Search-input"
                    type="text" 
                    value={this.state.text} 
                    onChange={this.handleInputChange} 
                    placeholder="Enter search query" 
                />
                <button className="Search-button" onClick={this.handleSearch} style={{ padding: '10px' }}>Search</button>
            </div>
        );
    }
}

export default Search;
