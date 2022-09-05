//javascript classes are templates for javaScript Objects.
//templates mane holo kathamo.class holo akti kathamo.
//so class holo akti kathamo but ati real Object na.
//constructor mane holo j banay she.so ata thaktei hobe.
//ai contructor function take call kore atir bitor ja thakbe ta
//banabe.constructor er bitore akti default degian dia dite hobe.
//pore ai kathamotake use kore new new object creat hobe.

class ClassName{
    constructor(){}
}


//amra car banate chay.
//this mane holo amra jeti creat korte chaytece seti.
//akhane this mane holo car

class Car{
    constructor (name,year) {
        this.name = name;
        this.year = year;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}
//opor porjonto ja hoyce seti kinto original na ait holo akti kathamo.and atike use kore amra onek kicu creat korbo.

const car1 = new Car("Toyota", 2017);
const car2 = new Car("Fezar", 2017);
const car3 = new Car("Sojoki", 2017);
//akhane format or kathamotake use kore kicu creat korte hole
//new keyword take use korte hobe;
//and jokhon e new likbo tokhon sathe sathe constructor function take call kore dibe and exicute korbe.
console.log(car1);
console.log(car2);
console.log(car3);
car1.play();
car2.play();