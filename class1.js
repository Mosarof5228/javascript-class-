//javascript class holo akti kathamo ba noksha.
//ai kathamo ba noksha tike use kore notun notun object creat kora jai.object bolte prani,bosto ba j kono kicui hote pare.
//template ba kathamo er bitore akti constructor use korte hobe and constructor er bitore jei noksha ti thakbe
//sei noksha onosare object creat hobe.

//constructor er bitore thake property ;
//amra class template or noksha er bitore method use korte pari jeti holo function er moto.



//template:ati holo noksha jeti real na:
class Car{
    constructor (name,version) {
        this.name = name;
        this.version = version;
    }

    machine() {
        console.log(`${this.name }is a very good car`)
    }
}
//nicher object golu holo real object ja oporer constructor template tike use kore creat hoyece.
//so class template use kore object creat korte hole ofcourse new keyword likte hobe and then class er nam:
//new and class er nam likhar sathe sathei constructor function ti autometic call
const car1 = new Car('toyota', 2020);
const car2 = new Car("Sojoki", 2022);
console.log(car1);
console.log(car2);
//car1 er jonne jodi method or machine function tike call kori tahole.and console.log(dynamic babe this.name bole dilam akhane this.name mane holo car1 and car1 mane holo toyota.)
car1.machine();
car2.machine();