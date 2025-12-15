class square{
    constructor(width){
        this.width=width;
        this.height=width;
    }
    getarea(){
        console.log(`Area is ${this.width*this.height}`);
        return this.width*this.height;
    }
    get area(){
        return this.width*this.height;
    }

    set area(value){
        this.width=Math.sqrt(value);
        this.height=Math.sqrt(value);
    }
}

const newsquare=new square(5);
newsquare.getarea;
console.log(newsquare.area);
newsquare.area=30;
console.log(`height is ${newsquare.height}`);
console.log(`width is ${newsquare.width}`);