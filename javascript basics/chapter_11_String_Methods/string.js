let mystr = "Robin Sharma is a coder, yes a good coder ";
console.log(mystr.length); // provides the length of the string 
console.log(mystr.indexOf("coder")); // provide the indes of the letter or word
console.log(mystr.lastIndexOf("coder")); // if there are same letter or words in a string, this provides the index of the last found word 
console.log(mystr.slice(0,23)); // slices the string form (0 to 23-1) 
newstr = mystr.replace("Robin","Cruzo");
console.log(newstr);