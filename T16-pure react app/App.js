const student = ()=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h1",{},"Ravindu"),
        React.createElement("h2",{},"22 years old"),
        React.createElement("h3",{},"University of Moratuwa"),]
    );

}

const App = ()=>{
            return React.createElement(
                "div",
                {},
                [React.createElement("h1",{},"My React App"),
                React.createElement(student),
                ]                
            );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));