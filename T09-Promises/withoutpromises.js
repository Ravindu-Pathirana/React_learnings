function takeshower(){
    setTimeout(()=>{
        console.log("You must take shower now.");
    },2000);
}

function dohomework(){
    setTimeout(()=>{
        console.log("You must do your homework now.");
    },3000);
}

function playgames(){
    setTimeout(()=>{
        console.log("You can play games now.");
    },1000);
}

console.log("Daily Routine:");
takeshower();
dohomework();
playgames();
