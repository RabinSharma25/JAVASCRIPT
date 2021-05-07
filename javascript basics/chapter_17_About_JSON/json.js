// JSON stands for Javascript Object Notation 
// jason are used to stringfy objects in javascript

/*
JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a very common data format, with a diverse range of applications, one example being web applications that communicate with a server.
*/

obj = {name:"Robin",length :3};
jso = JSON.stringify(obj); // converting the object obj to string
console.log(typeof jso); // to show that the type of jso is string
console.log(jso);
parsed = JSON.parse('{"name":"Robin","length":3}'); // converting json to objects 
console.log(parsed);

// Template literals  or the usage of backticks

/*
Template literals are string literals allowing embedded expressions. You can use multi line strings and string operations in them.
*/
let num = 4;
str = `The value of num is ${num}`;
console.log(str);