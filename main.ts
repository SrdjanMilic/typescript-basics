// 1. Variables and data types
const title: string = "TypeScript Basics";
const myAge: number = 43;
const canVote: boolean = true;
let anything: any = "dog";
anything = 2;

document.getElementById("title").innerHTML = `${title}`;
document.getElementById("variables").innerHTML = `<ul><li>const title is a ${typeof (title)}</li><li>const myAge is a ${typeof (myAge)}</li><li>const canVote is a ${typeof (canVote)}</li><li>let anything is a ${typeof (anything)}</li>`;

// 1.1 Converting string variables to number and vise versa
let strToNum: number = parseInt("5");
let numToStr: number = 5;

document.getElementById("convert").innerHTML = `<ul><li>strToNum is a ${typeof (strToNum)}</li><li>numToStr is a ${typeof (numToStr.toString())}</li></ul>`;

// 1.2 Multi type variables
let multiType: number | boolean;  // either variable calls are ok
multiType = 20;
multiType = true;

document.getElementById("multi-types").innerHTML = `<ul><li>${multiType}</li></ul>`;

// 2. Arrays
let employees1: string[] = ["Bob", "Sally", "Sam"]; // One way of array declaration
let employees2: Array<string> = ["John", "Harry", "Ava"]; // Another way of array declaration

document.getElementById("arrays1").innerHTML = `<ul><li>${employees1[0]}</li><li>${employees1[1]}</li><li>${employees1[2]}</li></ul>`;
document.getElementById("arrays2").innerHTML = `<ul><li>${employees2[0]}</li><li>${employees2[1]}</li><li>${employees2[2]}</li></ul>`;

// 2.1 Tuple arrays (arrays with multiple types)
let employees3: [string, number] = ["Megan", 8]; // Tuple - multiple value types array declaration

document.getElementById("tuple-arrays").innerHTML = `<ul><li>${employees3[0]}</li><li>${employees3[1]}</li></ul>`;

// 2.2 Enum
enum Color { Red = 5, Green, Blue }
let c: Color = Color.Green;

document.getElementById("enum").innerHTML = `<ul><li>${c}</li></ul>`;

// 3. Math
let addition = 5 + 4;
let subtraction = 5 - 4;
let multiplication = 5 * 4;
let division = 5 / 4;
let modulo = 5 % 4;

document.getElementById("math").innerHTML = `<ul><li>${addition}</li><li>${subtraction}</li><li>${multiplication}</li><li>${division}</li><li>${modulo}</li></ul>`;

// 4. Looping
let randArray = [1, "john", false];

for (let i in randArray) { // "in" will print array indexes
  document.getElementById("loop1").innerHTML += `<li>${i}</li>`;
}

for (let i of randArray) { // "in" will print array values
  document.getElementById("loop2").innerHTML += `<li>${i}</li>`;
}

// 5. Functions
let getSum = function (num1: number, num2: number): number {
  return num1 + num2;
}

let theSum1: number = getSum(5, 2);

let getDiff = function (num1: number, num2 = 2, num3?: number): number { // num3 parameter is optional
  if (typeof num3 !== "undefined") {
    return num1 - num2 - num3;
  }
  return num1 - num2;
}

document.getElementById("functions").innerHTML = `<li>5 + 2 = ${theSum1}</li><li>5 - 2 = ${getDiff(5)}</li><li>5 - 2 - 3 = ${getDiff(5, 2, 3)}</li>`;

// 5.1 Arrow function
let addOne = (n: number): number => n + 1;

document.getElementById("arrow-functions").innerHTML = `<li>8 + 1 = ${addOne(8)}</li>`;

// 5.2 Generic functions with data type markers
function GetTypeOf<T>(value: T): string {
  return typeof (value);
}

let aString = "A string";
let aNumber = 10;

document.getElementById("generic-functions").innerHTML = `<li>${GetTypeOf(aString)}</li><li>${GetTypeOf(aNumber)}</li>`;

// 5.3 Spread operator
// Typed spread operator works only when all parameters are marked as optional
function theSum(x?: number, y?: number, z?: number): number {
  return x + y + z;
}

let args = [4, 5, 6];

document.getElementById("spread-operator").innerHTML = `<li>Sum: ${theSum(...args)}</li>`;

// 6. Interfaces
interface SuperHero {
  realName: String;
  superName: String;
}

let superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}

let superHeroes: SuperHero[] = [];

superHeroes.push({
  realName: "Bruce Wayne",
  superName: "Batman"
});

document.getElementById("interfaces").innerHTML = `<li>${superman.realName} is ${superman.superName}</li><li>${superHeroes[0].realName} is ${superHeroes[0].superName}</li>`;

// 7. Classes
class Animal {
  public favFood: string;
  static numOfAnimals: number = 0;
  constructor(private name: string, private owner: string) {
    Animal.numOfAnimals++;
  }

  ownerInfo() {
    document.getElementById("owner-info").innerText = `${this.name} is owned by ${this.owner}`;
  }

  static howManyAnimals(): number {
    return Animal.numOfAnimals;
  }

  private _weight: number;

  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }
}

let spot = new Animal("Spot", "Doug");

spot.ownerInfo();
spot.weight = 100;

document.getElementById("animals-weight").innerText = `Spot's weight is ${spot.weight}`;
document.getElementById("animals-number").innerText = `Number of Animals: ${Animal.howManyAnimals()}`;

// 7.1 Class inheritance (subclasses)
class Dog extends Animal {
  constructor(name: string, owner: string) {
    super(name, owner);
    Dog.numOfAnimals++
  }
}

let grover = new Dog("Grover", "Jimmy");

document.getElementById("class-inheritance").innerHTML = `<li>Is a Dog an Animal: ${grover instanceof Animal}</li><li>Does Grover have a name: ${"name" in grover}</li><li>Does Grover have an owner: ${"owner" in grover}</li><li>Number of Animals is now: ${Animal.howManyAnimals()}</li>`;

// 7.2 Class interface example
interface Vehicle {
  drive(): any;
}

class Car implements Vehicle {
  constructor(private wheels: number) { }
  drive(): void {
    let carWheels = <HTMLElement>document.querySelector(".car");
    carWheels.innerText = `The car drives with ${this.wheels} wheels`;

    let carWheels2 = <HTMLElement>document.querySelector(".car2");
    carWheels2.innerText = `The car drives with ${this.wheels} wheels`;
  }
}

class Bicycle implements Vehicle {
  constructor(private wheels: number) { }
  drive(): void {
    let bicycleWheels = <HTMLElement>document.querySelector(".bicycle");
    bicycleWheels.innerText = `The car drives with ${this.wheels} wheels`;

    let bicycleWheels2 = <HTMLElement>document.querySelector(".bicycle2");
    bicycleWheels2.innerText = `The car drives with ${this.wheels} wheels`;
  }
}

let car = new Car(4);
let bike = new Bicycle(2);

car.drive();
bike.drive();

// 7.2.1 Example with data type markers
function GetWheels<w extends Vehicle>(veh: w): number {
  return veh.drive();
}

GetWheels(car)
GetWheels(bike)

// 7.3 Generic classes
class GenericTypeValue<T> {
  add: (val1: T, val2: T) => T;
}

let newNumber = new GenericTypeValue<number>();

newNumber.add = function (x, y) {
  return x + y;
}

let newString = new GenericTypeValue<string>();

newString.add = function (x, y) {
  return String(Number(x) + Number(y));
}

document.getElementById("generic-classes").innerHTML = `<li>5 + 4 = ${newNumber.add(5, 4)}</li><li>5 + 6 = ${newString.add("5", "6")}</li>`;

// 8. Destructuring (multiple values in one line)
let multiValues = { x: 1, y: 2, z: 3 };
let { x, y, z } = multiValues;

document.getElementById("destructuring").innerHTML = `<li>${x + y + z}</li>`;

// 8.1 Switch values
[x, y, z] = [z, y, x];

document.getElementById("switch").innerHTML = `<li>${x}${y}${z}</li>`;

