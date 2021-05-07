// events are those conditions which can happen in a web page(in our case ) for example clicking a button, hovering the mouse to a particular point and many other possibilities..

// using can javascript we can listen these envents 

// defining and creating the clicke function

function clicked(){
    console.log("The button was clicked");
}
 
// this function gets called when page gets loaded
window.onload = function(){
    console.log("The document was loaded");
}

firstcontainer.addEventListener('click',function(){
console.log("Clicked in the container")});

firstcontainer.addEventListener('mouseover',function(){
console.log("mouse in the container")});

firstcontainer.addEventListener('mouseout',function(){
console.log("mouse out the container")});

firstcontainer.addEventListener('mouseup',function(){
console.log("mouse up when clicked on the container")});
firstcontainer.addEventListener('mousedown',function(){
console.log("mouse down when clickedon the container")});

                