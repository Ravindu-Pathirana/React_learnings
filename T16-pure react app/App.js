const student = ()=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h3",{},"Ravindu"),
        React.createElement("h3",{},"22 years old"),
        React.createElement("h3",{},"University of Moratuwa"),]
    );
};

const studentcard =()=>{
    return React.createElement(
        "div",
        {className:"st-card"},
        React.createElement("img",{className:"student-image", src:"https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png", alt:"student-image"}),
        React.createElement(student)
    );
}

const App = ()=>{
            return React.createElement(
                "div",
                {},
                [React.createElement("h1",{},"My React App"),
                React.createElement(studentcard),
                React.createElement(studentcard),
                React.createElement(studentcard),
                React.createElement(studentcard),   
                ]                
            );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));