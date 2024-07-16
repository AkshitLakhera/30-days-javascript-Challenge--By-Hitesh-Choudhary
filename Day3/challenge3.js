//I am directly writing script
//Activity 1

//1
function checknumber(a){
    if(a >0){
        console.log("number is postive");
    } else if(a <0) {
        console.log("number is  negative")
        
    }
    else {
        console.log("number is equal to zero")
    }
}
checknumber(0);

//2
function checkeligiblity(a){
    if(a>=18){
        console.log("You can vote")
    }else{
        console.log("You can't go to vote")
    }
}
checkeligiblity(18);
//Activity 2
//3
function largestofthree(a,b,c){
    if ( a> b && a >c){
        console.log("a is largest of all")
    }
    else if (b >a && b >c){
        console.log("b is largest of all ")
    }
    else {
        console.log("c is largest of all ")
    }
}
largestofthree(399,689,99)
// Activity 3
//4
function Checkday(a){
    switch (a){
        case "1":
            console.log("Today is Monday")
            break;
        case "2":
            console.log("Today is Tuesday")
            break;
        
        case "3":
            console.log("Today is Wednesday")
            break;
        case "4":
            console.log("thursday")  
            break;
        case "5" :
            console.log("friday")
            break;
        case "6"  :  
            console.log("Saturday")
            break;
        case "7" :
        console.log("Sunday")

    }
}
Checkday("7");
//5
function AlotGrade(A) {
    switch (true) {
        case (A > 90):
            console.log("A grade");
            break;
        case (A > 80):
            console.log("VERY GOOD");
            break;
        case (A > 60):
            console.log("Good");
            break;
        default:
            console.log("Needs Improvement");
    }
}

AlotGrade(95); 
//Activity 4
function checkEvenodd(A){
    A%2==0?console.log("a is even"):console.log("a is odd");
}
checkEvenodd(69)
//Activity 5
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes it is leap  year")
        return true;
    } else {
        console.log("it is not leap year")
        return false;
    }
}
isLeapYear(2031)