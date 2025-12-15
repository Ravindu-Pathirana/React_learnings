class Animal{
    constructor(){
        console.log('An Animal is created...');
    }
    makesound(){
        console.log('Animal generally makes a sound.');
    }
}

class Dog extends Animal{
    constructor(){
        super();
        console.log('A Dog is created...');
    }
    makesound(){
        console.log('Dog normally barks.');
    }
}

class Cat extends Animal{
    constructor(){
        super();
        console.log('A Cat is created...');
    }
    makesound(){
        console.log('Cats ... meoww meoww..');
    }
}

const animal=new Animal();
animal.makesound();

const tommy= new Dog();
tommy.makesound();

const kitty=new Cat();
kitty.makesound();