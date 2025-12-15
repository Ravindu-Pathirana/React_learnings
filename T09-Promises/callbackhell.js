function func1(callback){
    // setTimeout is an asynchronous function.
    setTimeout(() => {
        console.log("Function 1 is executed");
        callback();
    }, 1000);
}

function func2(callback){
    // setTimeout is an asynchronous function.
    setTimeout(() => {
        console.log("Function 2 is executed");
        callback();
    }, 1000);
}
function func3(callback){
    // setTimeout is an asynchronous function.
    setTimeout(() => {
        console.log("Function 3 is executed");
        callback();
    }, 1000);
}
function func4(callback){
    // setTimeout is an asynchronous function.
    setTimeout(() => {
        console.log("Function 4 is executed");
        callback();
    }, 1000);
}

function func5(callback){
    // setTimeout is an asynchronous function.
    setTimeout(() => {
        console.log("Function 5 is executed");
        callback();
    }, 1000);
}

func1(()=>{
    func2(()=>{
        func3(()=>{
            func4(()=>{
                func5(()=>{
                    console.log("All functions are executed");
                });
            });
        });
    });
});