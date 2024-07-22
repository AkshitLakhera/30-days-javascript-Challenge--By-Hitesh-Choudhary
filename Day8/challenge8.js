//Activity 1
//1
function printName(name){
    console.log(`Hello ${name}`);

}
printName("Akshit")
//2
console.log(`hello akshit,ig I have seen you somewhere
aur batao kya chal raha h zindgi mai `)

//Activity 2
//3 Array destructuring to get the first and last element of  the array
const arrNum =  ["2","6","7","3","9","5","3"];
 [a,b,...rest] = arrNum;
console.log(a);
console.log(b);
//2
const book = {"title":"atomic habits", "author":"james clear","price":199};
const { title, author, ...rest2 } = book;
console.log(title);
console.log(author);
//Activity 3 Spread and rest operators
const arr2 = [...arrNum,5,7,8,2,4,5,7];
console.log(arr2)
//2
function Sum(...num){
    const total=num.reduce((accumulator,currentValue) => accumulator+currentValue,0);
    console.log(total)
    return total; 
}
Sum(4,6,7,3,4,5);
//Activity 5 Default parameters
function productOFNuM(a,b=8){
    const product = a*b;
    console.log(product);
    return product
;}
productOFNuM(6);
//Activity 6 Enhanced object literals
const title2 = "Atomic Habits";
const author2 = "James Clear";
const price2 = 199;
const book2  = {
    title2,
    author2,
    price2,
    getSummary() {
        return `${this.title2} and author is ${this.author2} `

    }
        ,
    // Computed property name
    ['bookPrice']: price2,

    // Another method
    applyDiscount(discount) {
        this.price2 = this.price2 - discount;
        return this.price2;
    }
    }
// Logging the object
console.log(book2);

// Logging the method results
console.log(book2.getSummary()); // "Atomic Habits by James Clear"
console.log(book2.applyDiscount(50)); // 149
console.log(book2.price2);
