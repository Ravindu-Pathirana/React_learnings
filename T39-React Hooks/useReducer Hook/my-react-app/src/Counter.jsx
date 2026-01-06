import { useReducer,useState } from "react";

const reducer = (state,action) =>{
    //console.log("Reducer called");
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
};

const Counter = () =>{
    const [count,setCount] = useState(0);
    
    const[state,dispatch] = useReducer(reducer,{count:0});

    return(
        <div>
            <h1>Count: {count}</h1>
            <h1>Count : {state.count}</h1>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br/>
            <button onClick={() => setCount(0)}>Reset</button> */}
            <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
            <br/>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
        </div>
    );

}
export default Counter;