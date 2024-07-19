//Activiy 1
//1
const arrNum = [1,2,3,4,5,8,5];
console.log(arrNum);
//2
//access first and last element
firstelement = arrNum[0];
lastelement = arrNum[4];
console.log(firstelement,lastelement);
//Activity 2
//3
//Push Method
arrNum.push(8,9,29);
console.log(arrNum)

//Pop Method : remove last element from the array
arrNum.pop();
console.log(arrNum)
//shift method :Remove the first element from the array
arrNum.shift();
console.log(arrNum)
//unshift method : Add new first element at the array 
arrNum.unshift(5)
console.log(arrNum)

 //Activity 3 (Intermediate)
 //map
//map creates a copy of new array.Map iterates over the original array and takes a callback function.
const doubledarray = arrNum.map((n) => {
 double = n*2;
 return double;
});
console.log(doubledarray);
//filter : Create a new array with only even numbers and log the output
// Create a new array with only even numbers
const evenNUMBERARRAY = arrNum.filter(n => n % 2 === 0);
console.log(`The even number array is ${evenNUMBERARRAY}`);


//Reduce
const Sumofallelement = arrNum.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue;
},0)
console.log(`The sum of the numbers in the array is ${Sumofallelement}`);
//Activity 4
for ( let i =0 ; i<arrNum.length;i++){
    console.log(arrNum[i]);
}

//for each loop
arrNum.forEach(i => {
    console.log(i);
});
//Creation and manipulation of 2d array
// Step 1: Create a 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix);

// Step 2: Access elements in the 2D array
console.log("\nAccessing Elements:");
console.log(`Element at [0][0]: ${matrix[0][0]}`); // 1
console.log(`Element at [1][2]: ${matrix[1][2]}`); // 6
console.log(`Element at [2][1]: ${matrix[2][1]}`); // 8

// Step 3: Update elements in the 2D array
matrix[0][0] = 10;
matrix[1][2] = 20;
matrix[2][1] = 30;

console.log("\nUpdated Matrix:");
console.log(matrix);

// Step 4: Iterate through the 2D array and print elements
console.log("\nIterating through the Matrix:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
    }
}

// Step 5: Adding a new row
let newRow = [10, 11, 12];
matrix.push(newRow);

console.log("\nMatrix after adding a new row:");
console.log(matrix);

// Step 6: Adding a new column
for (let i = 0; i < matrix.length; i++) {
    matrix[i].push(i + 20);
}

console.log("\nMatrix after adding a new column:");
console.log(matrix);
