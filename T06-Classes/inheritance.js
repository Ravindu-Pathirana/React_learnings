class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
        console.log("A new person is created...");
    }    
}

class programmer extends person{
    constructor(name, age, language){
        super(name, age);
        //this.name=name;
        //this.age=age;
        this.language=language;
        console.log("A new programmer is created...");
    }
    code(){
        console.log(`${this.name} is coding in ${this.language}`);
    }
}

const john =new person('Jhon',25);

const alice=new programmer('Alice',30,'JavaScript');
alice.code();