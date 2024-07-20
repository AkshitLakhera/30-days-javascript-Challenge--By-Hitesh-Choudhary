//Activity 1
//1
const book = {"title": "the pride and prejudice","author":"jane austin","year":1998};
console.log(book);
//2 Access title and author properties of the book
console.log(book.title);

 //Activity 2
 //3 method to return the details
 const book2 = {"title": "the pride and prejudice","author":"jane austin","year":1998, getdetails(){ return `${this.title}  by ${this.author}`}};
 console.log(book2.getdetails());
 //4 method to   update the  year and upate it 
 const book3 = {"title": "the pride and prejudice","author":"jane austin","year":1998, updateyear(yearchange){this.year = yearchange
return `${this.year}` }};
console.log(book3.updateyear(1999));
console.log(book3)

//Activity 3
//create a nested book object
//5
const centrallibrary = {
    name:"City library",
    books :[
        {
                title: "Atomic habits",
                author:"James clear",
                year:2016,
                getDetails() {
                    return `${this.title} by ${this.author}`;
                }
        },{
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getDetails() {
                return `${this.title} by ${this.author}`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            getDetails() {
                return `${this.title} by ${this.author}`;
            }
        }
    ]
}
console.log(centrallibrary);
//6 access the name of library and title of all books
console.log(centrallibrary.name);
//Acess each titile
//We are using for each to access inside the books array
centrallibrary.books.forEach((b) => {
    console.log(b.title)
})

//Activity 4  
//this keyword
//task already done above

// Activity 5 object iteration


for (let i in centrallibrary.books) {
    console.log(centrallibrary.books[i]);
    }


 //returns array
// Access and log the keys of the centrallibrary object
console.log(Object.keys(centrallibrary));

// Access and log the values of the centrallibrary object
console.log(Object.values(centrallibrary));
