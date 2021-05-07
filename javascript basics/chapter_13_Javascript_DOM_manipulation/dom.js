// Full form of DOM is Document Object Model

// DOM manipulation 
// DOM manipulation helps us dynamically change the interface and functionalities of a webpage using javascript

// run this command in the browser console
// document.getElementById('h1').style.color = "red"; 
// document.getElementById("h2").style.backgroundColor = "green";



let elem2 = document.getElementsByClassName('heading');
console.log(elem2);
elem2[0].style.background = "red"; // the first block with class "heading" 

// addding a class to a block 
elem2[1].classList.add("bg-primary");
// removing a class from a block
//elem2[1].classList.remove("bg-primary");

// getting the inner html and inner text
let elem = document.getElementsByClassName("container");

// note: indexing is important here, in case of getElementBy "ClassName" and "tag name", and in other fields where unique identity is not defined 

console.log(elem[0].innerHTML);
console.log(elem[0].innerText);

let unique = document.getElementById("h1");
console.log(unique.innerHTML);

let tn = document.getElementsByTagName("div");
console.log(tn);

// creating a child
CreatedElement = document.createElement("h1"); // h1 means first heading
CreatedElement.innerText = "This is a Created para";

// adding this child to the div 
tn[0].appendChild(CreatedElement);
CreatedElement.style.backgroundColor = "blue"; // adding some css 

// replaing a child
newchild = document.createElement("p"); // creating a new child to replace
newchild.innerText = "This is a new created child";
tn[0].replaceChild(newchild,CreatedElement);
//  removeChild removes an child 


// Also note 
// run in console
document.tile // provides the title of the page 
document.URL // provide the url of the page
document.scripts // provides the script of the page
document.location // provides the location on various elements
document.links // provides the links of in the page 

document.forms // provides all the forms in the page 
document.images // provides all the images in the page 
document.domain // provides the domain of the page 


// selecting using query 
sel = document.querySelector(".heading"); // selects the first heading class
console.log(sel);
sele = document.querySelectorAll(".heading"); // selects all the heading clsses
console.log(sele); // will return a node list 