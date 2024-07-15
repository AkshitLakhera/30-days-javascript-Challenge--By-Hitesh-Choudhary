//Activity 1
 //Q1
function Sum(a,b){
    const result = a+b;
     console.log(result);
     return result;
 }
 Sum(2,4)

 //Q2
function Subtract(a,b){
    const result = a-b;
    console.log(result);
    return  result
}
Subtract(8,5)
 
// Q3
function Multiply(a,b){
    const result = a*b;
    console.log(result);
    return  result
}
Multiply(8,5)
// Q4
function Divide(a,b){
    const result = a/b;
    console.log(result);
    return  result
}
Divide(8,5)
//Q5
function Remainder(a,b){
    const result = a%b;
    console.log(result);
    return  result
}
Remainder(8,6)

// Activity 2
function UsingOperator(a,b){
    a+=b //a=a+b
    console.log(a)
}
UsingOperator(5,8)

function UsingNOperator(a,b){
    a-=b //a=a+b
    console.log(a)
}
UsingNOperator(9,8)
// Activity 3
//Q1
function Comp(a,b) {
    if(a>b){
        console.log("a is greater then b");
    }else{
        console.log("b is greater then a");

    }
}
Comp(5,7)
//Q2
function CompE(a,b) {
    if(a>=b){
        console.log("a is greater then and eqaul to b");
    }else{
        console.log("b is greater then or equal to a");

    }
}
CompE(15,7)
//Q3
function CompR(a,b) {
    //== it compares after removing type
    if(a==b){
        console.log("a is equal to b");
    }
}
CompR("7",7)
function CompRe(a,b) {
    if(a===b){
        console.log("a is equal to b");
    }
}
CompRe("7",7)
// Activity 4
//Q1
function ageCheck(a){
    if( a<=10 && a>=8){
        console.log("Age is between 10 and 8")
    }
    else{
        console.log("age is not between  10 and 8")
    }
}
ageCheck(90)
//Q2
function chooseone(a,b) {
    if(a>=b || a==0){
        console.log("True");
    }else{
        console.log("False")
    }
}
chooseone(8,9)
//Activity 5
function ternaryoperator(a,b){
    a>= 0 ? console.log("positive"):console.log("negative");
}
ternaryoperator(9)

// Feature Request
//Q1
function Calculation(a,b){
    const addition= a+b;
    console.log(`Additon is ${addition}`);
    const Subtract= a-b;
    console.log(`Subtraction  is ${Subtract}`);
    const Multiply= a*b;
    console.log(`Multiplication is ${Multiply}`);
    const D= a/b;
    console.log(`Division  is ${D}`);
    const R= a/b;
    console.log(`Reaminder is ${R}`);
}
Calculation(8,4);
//Q2 dome above
//Q3
function ternaryoperator(a,b){
    a>= 0 ? console.log("positive"):console.log("negative");
}
ternaryoperator(9)