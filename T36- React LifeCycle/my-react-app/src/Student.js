import { Component } from "react"; 
import Logo from "./Logo";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year:0,
            colour: 'blue',
            speed: 5,
            visible : true,
            buttonvalue: 'Remove-Logo'
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const newYear = new Date().getFullYear() - nextProps.age;
        if (newYear === prevState.year) {
            return null;
        }else{
            return { year: newYear };
        }
    }

    componentDidMount() {
        console.log("Component Mounted");
        setTimeout(() => {
            this.setState({ colour: 'Red' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update");
        //return true;
        if (nextProps.name.length > 3) {
            return true
        }else{
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get Snapshot Before Update");
        return prevProps.name;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update");
        console.log("Previous Name: " + snapshot);

        // if (this.props.name !== this.state.speed) {
        //     console.log("Name prop changed, updating speed.");
        //     this.setState({ speed: this.props.name });
        // }else{
        //     console.log("Name prop did not change, no speed update.");
        // }
    }

    RemoveHanler = (event) => {
        this.setState({visible: false});
        this.setState({buttonvalue:'Add-Logo'})
        if (this.state.buttonvalue === 'Add-Logo') {
            this.setState({visible: true});
            this.setState({buttonvalue:'Remove-Logo'})
        }
        
    }

    render() {
        const { name, age} = this.props; // using object destructuring
        return (
            <div style={{backgroundColor: this.state.colour, padding: '20px', borderRadius: '10px', margin: '10px'}}>
                {this.state.visible && <Logo speed={this.state.speed}/>}
                <h2>Name :- {name}</h2>
                <h2>Age :- {age}</h2>
                <h2>Year :- {this.state.year}</h2>
                <input type='button' value={this.state.buttonvalue} onClick={this.RemoveHanler}/>
            </div>
        );
    }
}
export default Student;