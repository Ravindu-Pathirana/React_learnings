function add2(x){
    return x + 2;
}

function multiply3(x){
    return x * 3;
}

function subtract1(x){
    return x - 1;
}   

function compose(...functions){
    return function(x){
        return functions.reduceRight((value, func)=>{
            return func(value);
        }, x);
    }
}

const composedFunction = compose(subtract1, multiply3, add2);

const result = composedFunction(5); // ((5 + 2) * 3) - 1 = 20
console.log(result); // Output: 20