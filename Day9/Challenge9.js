const header = document.getElementById("Header");
const container = document.getElementsByClassName("container");
header.textContent="Hey ,I am his bro piyush"
//The getElementsByClassName method returns a HTMLCollection, which is a collection of elements rather than a single element. 
// Loop through the collection and apply the background color
for (let i = 0; i < container.length; i++) {
    container[i].style.backgroundColor = "red";
}
// Create a new <div> element
const newDiv = document.createElement('div');
newDiv.textContent="Hello I am new div";
document.body.append(newDiv);
const newli=document.createElement("li");
newli.textContent="I am new li  "
const ul = document.querySelector('ul');
ul.append(newli);
newli.remove();
ul.removeChild(ul.lastElementChild);
function changeAttributes() {
    const img = document.getElementById('myImage');
    img.setAttribute('src', 'new-image.jpg');
    const link = document.getElementById('myLink');
    link.setAttribute('href', 'https://new-example.com');
    link.setAttribute('target', '_self');

}
document.getElementById("myButton");
button.style.backgroundColor = 'blue';