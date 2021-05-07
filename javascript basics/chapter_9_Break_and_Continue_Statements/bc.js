// break and continue statements 

console.log("Break and continue statements\n");

/*
Break Statement :: If a break statement is encountered inside a loop, then it exits form the loop.

Continue Statement :: If a continue statement is encountered inside a loop, then it skips the current iteration and starts a new iteration.

*/

var arr=[1,2,3,4,5,6,7];
for (var i = 0; i < arr.length; i++)
// break statement
{
    if (i == 3) {
        break;
    }

    // continue statement
    // { if(i==3){
    //     continue
    // }

    console.log(arr[i]);
}