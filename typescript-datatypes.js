// var userName="Shivangi";

// var surname:string="Shukla"
// var name1="op"
// // var age:Number=30;
// console.log(userName);
// console.log(age);   


// Datatypes

// Primitive
// object
// special
// Advanced
// function

// Primitive Data types

var age:number=50;
var username:string="shivangi"
var isFemale:boolean=true;
var isLargeNumber: bigint = 900719925474099n;
var unqueID: symbol = Symbol("ID");
var nothing : null = null;
var notassigned : undefined = undefined;

// Object data types
var obj : {name:string, age:number} = {name:"Shivangi", age:90};
var nums : number[] = [1,6,7,8];
var tuples : [string,number,boolean] =  ["a", 78, false ];
var date : Date =  new Date();
var pattern : RegExp = /[a,b]+/;

// Special data types

var randomVal : any = 10;
randomVal = "I'm string";

var maybeValue: unknown = "Could be anything";
if (typeof maybeValue === "string") {
  console.log(maybeValue.toUpperCase());
}
// never (used for functions that never return)
function throwError(msg: string): never {
    throw new Error(msg);
}
//  void (used for functions with no return)
function noreturnType(val : number) : void {
    console.log("this is the no returnType function value", val)
}

// Advanced type
// Union
var ID : string | number = 89;
ID = "89"

// Intersection

type Name = {name:string}
type Age = { age: number };
type User = Name & Age;
var user: User = { name: "Shivangi", age: 25 };
// Literal Type
var direction: "left" | "right" = "left";
// function move(direction: "left" | "right") {
//   console.log(`Moving ${direction}`);
// }

// move("left");  // ✅
// move("right"); // ✅
// move("up");    // ❌ Error


// Enums
// enum taskStatus{
//   Pending,
//   InProgress,
//   Done
// }
// var data : taskStatus = taskStatus.Pending;

// Type Alias
type Point = { x: number; y: number };
var myPoint: Point = { x: 10, y: 20 };

// interface
interface Developer {
    name:string,age:number
}
var dev: Developer = { name: "Shivangi", age: 50};

// Generics
function identity<T>(value: T): T {
  return value;
}
let result = identity<string>("Generic Function");

// 5. Function Types
// Function with typed parameters and return
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Shivangi"));

// Optional parameter
function greetAgain(name?: string): string {
  return `Hi, ${name || "Guest"}`;
}

// Default parameter
function greetWithDefault(name: string = "User"): string {
  return `Hey, ${name}`;
}

// Rest parameters
function total(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(total(1, 2, 3, 4));

// Function type variable
let add: (a: number, b: number) => number;
add = (x, y) => x + y;
console.log(add(5, 3));












