//javascript class
//template:
class Instructor{
    //property
    name;
    designation = 'web course Instructor'
    team = "web team"
    location;

    //method
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }

    creatQuiz(module) {
        console.log(`please creat quiz for module ${module}`)
    }



    //template 
    constructor (name,location) {
        this.name = name;
        this.location = location;
    }
}

const aamir = new Instructor('aamir','mumbai');
console.log(aamir);
aamir.startSupportSession(12);
aamir.creatQuiz(30);

const solaiman = new Instructor('solaiman', 'Dhaka');
console.log(solaiman);