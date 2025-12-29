import { Component } from "react";

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return(
            <input 
                type="text" 
                value={this.state.text} 
                onChange={(e) => this.setState({ text: e.target.value })} 
                placeholder="Enter text" 
            />
        )
    }

}
export default TextField;