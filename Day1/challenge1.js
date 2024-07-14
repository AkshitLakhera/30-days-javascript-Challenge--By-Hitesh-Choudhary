//Activity 1
var number = 1;
let drink = "Cold coffee"
console.log(number ,drink)
//Activity 2
const isopen = true;
console.log(isopen);
//Activity 3
const num = 12;
const shake = "oreo shake"
const  isclosed = false
const colorarr = ["red","blue","green" ,"yellow"];
const Nameobj = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof Nameobj)
//Activity 4
let age = 10;
console.log(age);
age = 12; 
console.log(age);
//Activity 5
const agecheck = 15;
agecheck=18;
console.log(agecheck)

//Feature request
// 1 

console.log(`Value: ${num}, Type: ${typeof num}`);
console.log(`Value: ${shake}, Type: ${typeof shake}`);

// feature 2
// Using let
let variableLet = "Initial value with let";
console.log(`Initial value of variableLet: ${variableLet}`);

// Reassigning let variable
variableLet = "Reassigned value with let";
console.log(`Reassigned value of variableLet: ${variableLet}`);

// Using const
const variableConst = "Initial value with const";
console.log(`Initial value of variableConst: ${variableConst}`);

// Attempting to reassign const variable (this will throw an error)
try {
    variableConst = "Reassigned value with const";
} catch (error) {
    console.log(`Error when trying to reassign variableConst: ${error.message}`);
}

