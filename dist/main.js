const title = "TypeScript Basics";
const myAge = 43;
const canVote = true;
let anything = "dog";
anything = 2;
document.getElementById("title").innerHTML = `${title}`;
document.getElementById("variables").innerHTML = `<ul><li>const title is a ${typeof (title)}</li><li>const myAge is a ${typeof (myAge)}</li><li>const canVote is a ${typeof (canVote)}</li><li>let anything is a ${typeof (anything)}</li>`;
let strToNum = parseInt("5");
let numToStr = 5;
document.getElementById("convert").innerHTML = `<ul><li>strToNum is a ${typeof (strToNum)}</li><li>numToStr is a ${typeof (numToStr.toString())}</li></ul>`;
let multiType;
multiType = 20;
multiType = true;
document.getElementById("multi-types").innerHTML = `<ul><li>${multiType}</li></ul>`;
let employees1 = ["Bob", "Sally", "Sam"];
let employees2 = ["John", "Harry", "Ava"];
document.getElementById("arrays1").innerHTML = `<ul><li>${employees1[0]}</li><li>${employees1[1]}</li><li>${employees1[2]}</li></ul>`;
document.getElementById("arrays2").innerHTML = `<ul><li>${employees2[0]}</li><li>${employees2[1]}</li><li>${employees2[2]}</li></ul>`;
let employees3 = ["Megan", 8];
document.getElementById("tuple-arrays").innerHTML = `<ul><li>${employees3[0]}</li><li>${employees3[1]}</li></ul>`;
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
document.getElementById("enum").innerHTML = `<ul><li>${c}</li></ul>`;
let addition = 5 + 4;
let subtraction = 5 - 4;
let multiplication = 5 * 4;
let division = 5 / 4;
let modulo = 5 % 4;
document.getElementById("math").innerHTML = `<ul><li>${addition}</li><li>${subtraction}</li><li>${multiplication}</li><li>${division}</li><li>${modulo}</li></ul>`;
let randArray = [1, "john", false];
for (let i in randArray) {
    document.getElementById("loop1").innerHTML += `<li>${i}</li>`;
}
for (let i of randArray) {
    document.getElementById("loop2").innerHTML += `<li>${i}</li>`;
}
let getSum = function (num1, num2) {
    return num1 + num2;
};
let theSum1 = getSum(5, 2);
let getDiff = function (num1, num2 = 2, num3) {
    if (typeof num3 !== "undefined") {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.getElementById("functions").innerHTML = `<li>5 + 2 = ${theSum1}</li><li>5 - 2 = ${getDiff(5)}</li><li>5 - 2 - 3 = ${getDiff(5, 2, 3)}</li>`;
let addOne = (n) => n + 1;
document.getElementById("arrow-functions").innerHTML = `<li>8 + 1 = ${addOne(8)}</li>`;
function GetTypeOf(value) {
    return typeof (value);
}
let aString = "A string";
let aNumber = 10;
document.getElementById("generic-functions").innerHTML = `<li>${GetTypeOf(aString)}</li><li>${GetTypeOf(aNumber)}</li>`;
function theSum(x, y, z) {
    return x + y + z;
}
let args = [4, 5, 6];
document.getElementById("spread-operator").innerHTML = `<li>Sum: ${theSum(...args)}</li>`;
let superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
let superHeroes = [];
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});
document.getElementById("interfaces").innerHTML = `<li>${superman.realName} is ${superman.superName}</li><li>${superHeroes[0].realName} is ${superHeroes[0].superName}</li>`;
class Animal {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    ownerInfo() {
        document.getElementById("owner-info").innerText = `${this.name} is owned by ${this.owner}`;
    }
    static howManyAnimals() {
        return Animal.numOfAnimals;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
}
Animal.numOfAnimals = 0;
let spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.getElementById("animals-weight").innerText = `Spot's weight is ${spot.weight}`;
document.getElementById("animals-number").innerText = `Number of Animals: ${Animal.howManyAnimals()}`;
class Dog extends Animal {
    constructor(name, owner) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}
let grover = new Dog("Grover", "Jimmy");
document.getElementById("class-inheritance").innerHTML = `<li>Is a Dog an Animal: ${grover instanceof Animal}</li><li>Does Grover have a name: ${"name" in grover}</li><li>Does Grover have an owner: ${"owner" in grover}</li><li>Number of Animals is now: ${Animal.howManyAnimals()}</li>`;
class Car {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        let carWheels = document.querySelector(".car");
        carWheels.innerText = `The car drives with ${this.wheels} wheels`;
        let carWheels2 = document.querySelector(".car2");
        carWheels2.innerText = `The car drives with ${this.wheels} wheels`;
    }
}
class Bicycle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        let bicycleWheels = document.querySelector(".bicycle");
        bicycleWheels.innerText = `The car drives with ${this.wheels} wheels`;
        let bicycleWheels2 = document.querySelector(".bicycle2");
        bicycleWheels2.innerText = `The car drives with ${this.wheels} wheels`;
    }
}
let car = new Car(4);
let bike = new Bicycle(2);
car.drive();
bike.drive();
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
class GenericTypeValue {
}
let newNumber = new GenericTypeValue();
newNumber.add = function (x, y) {
    return x + y;
};
let newString = new GenericTypeValue();
newString.add = function (x, y) {
    return String(Number(x) + Number(y));
};
document.getElementById("generic-classes").innerHTML = `<li>5 + 4 = ${newNumber.add(5, 4)}</li><li>5 + 6 = ${newString.add("5", "6")}</li>`;
let multiValues = { x: 1, y: 2, z: 3 };
let { x, y, z } = multiValues;
document.getElementById("destructuring").innerHTML = `<li>${x + y + z}</li>`;
[x, y, z] = [z, y, x];
document.getElementById("switch").innerHTML = `<li>${x}${y}${z}</li>`;
