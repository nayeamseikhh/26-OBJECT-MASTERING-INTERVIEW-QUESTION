class parson {
    constructor (firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}



const heroParson = new parson ('Hero', 'Balam', 5000);
const firndlyParson =  new parson ('Hero', 'Golam', 45000);

heroParson.chargeBill.call(500, 10, 50),

console.log(heroParson);
console.log(firndlyParson);

