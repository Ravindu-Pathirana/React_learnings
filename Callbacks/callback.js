function openfile(callback){
    setTimeout(() => {
        console.log("File opened");
        callback();
    }, 3000);
}

function addsomething(){
    console.log("somthing added to the file...");
}

function removesomething(){
    console.log("somthing removed from the file...");
}

openfile(addsomething);
openfile(removesomething);