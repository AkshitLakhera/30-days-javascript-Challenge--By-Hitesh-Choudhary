// I am making genric functions which  can work for all values
//Activity 1 for loop
//1
function printNo(n){
for( let i =1 ; i<=n;i++){
    console.log(i);
}
}
printNo(10);
//2
function printtable(n){
    for(let i =1 ;i<=n;i++){
        console.log(`${n}  x  ${i} = ${n*i}`)
    }
}
printtable(6)

//Activity 2 while loop
//1
function sumofN(n){
    let sum =0;
    let i =1;
    while(i<=n){
        sum+=i;
        i++;

    }
    console.log(`Sum is ${sum}`)
}
sumofN(3);
//2
function PrintNotoone(n){
    let i =n;
    while(i>0){
        console.log(i);
        i--;
    }
}
PrintNotoone(10);

//Activity 3 Do while loop
//1
function Printno(n){
    let i =n;
    do {
        console.log(i);
        i--
    } while(i>0)
}
Printno(5);
//2 factorial
function PrintFact(n){
    let i= n ;
    let fact= 1;
    do {
        fact*=i;
        i--
    }
    while(i>0)
    console.log(fact);
}
PrintFact(8);

//  Nested loop
//star pattern
function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

printPattern(5);
 //Loop control statement
 function printexpectn(n){
    for( let i = 1 ; i <=n;i++){
        if (i === 5) {
            continue; //jump at 5
        }
        console.log(`${i}`);
    }
 }
 printexpectn(10);
 //2
 function printstopatseven(n){
    for( let i = 1 ; i <=n;i++){
        if (i === 7) {
            break;  //break at 7
        }
        console.log(`${i}`);
    }
 }
 printstopatseven(10);