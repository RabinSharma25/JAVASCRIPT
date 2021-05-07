var arr = [34,5,5,66,443,645];

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// one more way to iterate a array
console.log("Second way");

arr.forEach(function(element){
    console.log(element)
})


// while loop 
console.log("learning while loops");
let j=0; // some what similar to var j=0, but it has block level scope(scope only under curly braces, somewhat like local variables) 
while(j<arr.length){
    console.log(arr[j])
    j++;
}

// Do while loop
console.log("Testing dowhile loops\n");
let ic  =0

do{
    console.log(arr[ic])
    ic++;
}while(ic<arr.length)




