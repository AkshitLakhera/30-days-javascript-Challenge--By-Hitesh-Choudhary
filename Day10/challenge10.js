//Event listener
//1
const para= document.getElementById("para");
const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    para.textContent="hey ,I am piyush"
})
//2
const img = document.getElementById("img");
img.addEventListener("dblclick",function(){
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
})
//Mouse over event
para.addEventListener("mouseover", function() {
    para.style.backgroundColor = 'lightblue'; // Change to desired color
});

para.addEventListener("mouseout", function() {
    para.style.backgroundColor = ''; // Reset to original color
});
//keyboard event
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

// Listen for keydown event
inputField.addEventListener('keydown', function(event) {
    output.textContent = `Key down: ${event.key}`;
});

// Listen for keyup event
inputField.addEventListener('keyup', function(event) {
    output.textContent = `Key up: ${event.key}`;
});


//Form events
const form = document.getElementById('myForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting
    message.textContent = 'Form submission prevented!';
     // Get form data
     const formData = new FormData(form);
     const name = formData.get('name');
     const email = formData.get('email');

     // Print form data to console
     console.log('Name:', name);
     console.log('Email:', email);

});
//change event listner with dropdown
const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");
selectElement.addEventListener("change",(event)=>{
    result.textContent=`you like ${event.target.value}`
})
//Event delegation
const itemList = document.getElementById('itemList');
const addItemButton = document.getElementById('addItem');   
itemList.addEventListener("click",  function(event){
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Item clicked:', event.target.textContent);
    }
})
//this is how we dynamically add things
addItemButton.addEventListener("click",function(event){
    const newli = document.createElement("li");
    newli.textContent= `item is ${itemList.children.length + 1}`
    itemList.appendChild(newli)
})