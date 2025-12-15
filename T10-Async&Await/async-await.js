function takeshower(){
    return new Promise((resolve, reject)=>{
        const isshowerdone = true;
        if(isshowerdone){
            setTimeout(()=>{
                console.log("You must take shower now.");
                resolve('You have taken shower.');
            },2000);
        }else{
            reject('Shower is not done yet.');
        }
    });
}

function dohomework(){
    return new Promise((resolve, reject)=>{
        const ishomeworkdone = true;
        if(ishomeworkdone){
            setTimeout(()=>{
                console.log("You must do your homework now.");
                resolve('You have done your homework.');
            },3000);
        }else{
            reject('Homework is not done yet.');
        }
    });
}

function playgames(){
    return new Promise((resolve, reject)=>{
        const isgamesdone = true;
        if(isgamesdone){
            setTimeout(()=>{
                console.log("You can play games now.");
                resolve('You have played games.');
            },1000);
        }else{
            reject('Games are not done yet.');
        }
    });
}

console.log("Daily Routine:");
async function dotasks(){
    try{
        console.log(await takeshower());
        console.log(await dohomework());
        console.log(await playgames());
        console.log("All tasks are done for today!");
    }catch(error){
        console.log(error);

    }
}
dotasks();