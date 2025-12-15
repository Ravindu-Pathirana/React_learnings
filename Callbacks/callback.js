function openfile(){
    setTimeout(() => {
        console.log("File opened");
    }, 3000);
}

function addsomething(){
    console.log("somthing added to the file...");
}

function removesomething(){
    console.log("somthing removed from the file...");
}

openfile();