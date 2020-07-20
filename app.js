// Function Constructor

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.stats = function(){
    return `${this.brand} ${this.model}!`;
}

Car.prototype.drive = function(){
    return `I'm ${this.stats()} driving vrooom!`;
}

let car1 = new Car("Nissan", "Sentra");
let car2 = new Car("Toyota", "Camry");
let myCar = new Car("Honda", "Insight");

console.log(car1.drive());
console.log(car2.drive());
console.log(myCar.drive());


// Prototypes
