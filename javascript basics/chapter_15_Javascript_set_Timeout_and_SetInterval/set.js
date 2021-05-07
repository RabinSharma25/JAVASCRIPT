
// Normal way to define a function
function sum(a,b){
    return a+b;
}

// Defining a function using arrow 
sum = (a,b)=>{
    return a+b;
}


// settimeout : It is used to schedule particular tasks in javascript

logged = ()=>{
    console.log("I am your log");
}

setTimeout(logged,2000) // run run the logged function after 2 seconds 

// setInterval : it is used to scheldule particular tasks in javascript repetedly
setInterval(logged,2000) // 

// clr = setTimeout(logged,2000);
// clr = setInterval(logged,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout