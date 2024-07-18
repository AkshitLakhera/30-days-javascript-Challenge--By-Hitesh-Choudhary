// Activity1
//1
function Checkevenodd(n){
    if( n% 2== 0){
        console.log("It is a even number");
    } else{
        console.log("It is a odd number");
    }
}
Checkevenodd(69);
//2
function CalcSqaure(n) {
    let square =  n*n;
    console.log(square);
    return square;
}
CalcSqaure(9);

//Activity 2 (Function expression)
//1
const maximunoftwo = function(a,b){
  if(a >b){
    console.log("a is  greater then b");
  } else{
    console.log("b is greater then a")
  }
}
maximunoftwo(95,8);
//2 
const concatenatestring = function (a,b){
    const concat = a+b;
    console.log(concat);
}
concatenatestring("aman","piyu");


//Activity 3
const calculateSum = (a, b) => {
  const sum = a + b;
  console.log(sum);
  return sum;
};

calculateSum(3, 4); 
//2 check specific character
const str = "Hello, world!";
const char = "o";
const containsChar = str.includes(char);
console.log(containsChar); // Output: true
// regex way
const str2 = "Hello, world!";
const char2 = "o";
const regex2 = new RegExp(char);
const containsChar2 = regex2.test(str);
console.log(containsChar2); // Output: true
//Activity 4
 //1 function with default parameters.
 function product(a,b=6){
  multiply= a*b;
  console.log(multiply);
  return multiply;
 }
product(6,9)
//2 take person name and age and write greeting message.
function greeting(name,age=18){
console.log(`hello ${name}, your age is ${age}`)

}
greeting("Ishank")
//Activity 5 Higher order function
 function RunNtimes(n,func){
  for(let i = 0; i<n;i++){
    console.log("running function n times")
    func();
  }
 }
 const sayHello = () =>{
  console.log("Hello I am akshit")
 }
 RunNtimes(9,sayHello)
 //2 write a higher order function that take three values ,applies the  first function  to the value ,and then  applies the second function to the result.
 function higherorderfunc(func1,func2,n){
  const firstresult=func1(n);
  const secondresult = func2(firstresult);
  console.log(secondresult);
  return secondresult;
 }
 
const addOne = (num) => num + 1;
const square = (num) => num * num;
higherorderfunc(addOne,square,4);