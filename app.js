console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name = "Nameless", pets = 0, residence = "None", hobbies = []) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby (hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby (oldHobby) {
        this.hobbies = this.hobbies.filter ((hobby) => hobby != oldHobby
        );
    }

    greet () {
        console.log(`Hello fellow person!`);
    }

    greetByName (name) {
        console.log(`Hello, ${name}!`)
    }
}
let jupiter = new Person ('Jupiter', 1, "3140", ['coding', 'cooking']);


jupiter.removeHobby ('cooking');
jupiter.addHobby ('running');
jupiter.greet ();
// jupiter.greetByName (Desphy);
console.log (jupiter);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor ( name, pets, residence, hobbies) {
        super (name, pets, residence, hobbies)
        this.occupation = "Full Stack Web Developer"
    }
    greet (name1) {
        console.log (`Hello ${name1} fellow coder`);
        
    }
}

let seth = new Coder ("Seth", 2, "home 2", ["guitar", "video games"]);
seth.greet (jupiter.name);
jupiter.greetByName (seth.name);
 

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{

    result = 0;

    add(a, b) {
        if (b === undefined) {
            this.result += a;
        } else {
            this.result = a + b;
        }
        return this.result;
    }

    subtract(a, b) {
        if (b === undefined) {
            this.result -= a;
        } else {
        this.result = a - b;
        }
        return this.result ;
    }

    multiply(a, b) {
        if (b === undefined) {
            this.result *= a;
        } else {
        this.result = a * b;
        }
        return this.result ;
    }
    divide(a, b) {
        if (b === undefined) {
            this.result /= a;
        } else {
        this.result = a / b;
        }
        return this.result ;
    }

    clear() {
        this.result = 0;
    }

    displayResult() {
        console.log (this.result);
    }
}

let calculator = new Calculator();

calculator.multiply(4, 2);
calculator.displayResult();
calculator.subtract(3);
calculator.displayResult ();
calculator.clear();
calculator.displayResult;
// class Calculator {
//     constructor (`add`, `subtract`, `multiply`, `divide`){

//     }

// }