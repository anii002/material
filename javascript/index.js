// Q.what is variables in javascript ?
//     ans - variables are a container to store a data values

// <<<<<<<<------operators in javascript ------->>>>>>>>>

// <<<<<<<<------1.arithmatic Operators ------->>>>>>>>>

// const a = 40;
// const b = 20;
// console.log(a + b)
// console.log(a - b)
// console.log(a *b)
// console.log(a / b)

//<<<<<<<<------ 2.assignment operators ------>>>>>>>>>>>

// const a = 10;
// b = a;
// b += 2; //b = b + 2;
// b -= 2; //b = b - 2
// b *= 2; //b = b * 2
// console.log(b);

// <<<<<<<<------3. comparison operators------>>>>>>>>>>

// var a = 10;
// var b = 50;

// console.log(a == b); //false
// console.log(a >= b); //false
// console.log(a <= b); //true
// console.log(a > b); //false
// console.log(a < b); //true


// <<<<<<<<------4.Logical operators-------->>>>>>>>>>

// a.<<<<<<<<------logical and && operator ------->>>>>>>
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

//b.<<<<<<<<------logical or || operator ------->>>>>>>

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

//b.logical not !=
// console.log(!true) //false
// console.log(!false) //true

//       <<<<<<<<------ FUNCTION IN JAVASCRIPT------->>>>>>>>>>>>

// example
// function avg(a,b) {
//     c = (a + b / 2)
//     return c;
// }
// //DRY => do not repeat the function
// const c1 = avg(5, 4);
// const c2 = avg(10,15)

// console.log(c1, c2);

//       <<<<<<<<------ CONDITIONALS IN JAVASCRIPT---->>>>>>>>

// if condition-->

// var age = 18;
// if (age >= 10) {
//     console.log("you are underage")
// }

// if else condition -->

// if (age > 5) {
//     console.log("you are not adult")
// } else {
//     console.log("you are adult")
// }

// <<<<<<<<------ Loop in javascript ------->>>>>>>>

//             <---FOR LOOP-->
// example.1
// var arr = ["aniket", "dom", "chamar", "abhi",]
// // console.log(arr)

// // example 1.a
// for (var i = 0; i < arr.length; i++) {   //jisko chahe wha se chla skte h
//     console.log(arr[i] + " " + "kumar")
// }

// example 1.b
//for (var i = 2; i < arr.length; i++) {   //yha 2nd index se loop chla rhe h
//     console.log(arr[i])
// }

//example.2
//  var arr = [1, 2, 3, 4, 5, 6, 7]
//  arr.forEach (function(element) { //sab par loop chalega
//     console.log(element)
// });
//             <<<<<<<<------DO/WHILE LOOP------->>>>>>>>
// var arr = [1, 2, 3, 4];
// let a = 0;
// while (a < arr.length) { //first check condition after run all
//     console.log(arr[a]);
//     a++;
// }

// do {           //phle run kr jayega phir condition check krega
//     console.log(arr[a]);
//     a++;
// } while (a < arr.length);

// const b = [1, 2, 3, 4, 5, 6, 7, 8, true, "10"];

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(b[i]), 1000);
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 100)
// }


/// <------------- Array Type -------->
const array = ["aniket", "babu", 1, 2, 3, "shyam"]

// array.pop()            //[ 'aniket', 'babu', 1, 2, 3]
// array.push("ani")    //[ 'aniket', 'babu', 1, 2, 3, 'shyam', 'ani']
// array.shift()          //['babu', 1, 2, 3, 'shyam']
// array.unshift("namah")    //[ 'namah', 'aniket', 'babu', 1, 2, 3, 'shyam' ]
// array.splice(0, 1, "amit", "ramu") // [ 'amit', 'ramu', 'babu', 1, 2, 3, 'shyam' ]
// array.splice(0, 3, "amit", "ramu") // [ 'amit', 'ramu', 1, 2, 3, 'shyam' ]
// console.log(array.slice(1, 2))    //[ 'babu' ]

// console.log(array)

// console.log(array.toString());   //aniket,babu,1,2,3,shyam =>The JavaScript method toString() converts an array to a string of (comma separated) array values.
// console.log(array.sort());      // [ 1, 2, 3, 'aniket', 'babu', 'shyam' ]  => The sort() method sorts an array alphabetically:
// console.log(array.reverse());  //[ 'shyam', 3, 2, 1, 'babu', 'aniket' ] =>The reverse() method reverses the elements in an array:
// console.log(array.at(1));       // babu
// console.log(array.join("*"));     // aniket*babu*1*2*3*shyam
// console.log(array.join("#"));    // aniket#babu#1#2#3#shyam

    
// <------------- String Type -------->
// const Mystring = "aniket is a bad boy bad bad very bad"
// console.log(Mystring.length) //19
// console.log(Mystring.indexOf("bad")) //12
// console.log(Mystring.lastIndexOf("bad")) //33
// console.log(Mystring.replace("bad", "good")) //aniket is a good boy bad bad very bad


// <------------- Javascript DATE-------->

// let myDate = new Date();
// console.log(myDate) //2023-10-26T12:06:09.546Z
// console.log(myDate.getTime()) //1698322024713
// console.log(myDate.getFullYear()) //2023
// console.log(myDate.getMonth()) //9 this is 10th month or return 9th because index 9 =10


// <<<<<<<<------ DOM =>Document object model-------->>>>>>>>>

//  what is DOM?
// Document Object Model (DOM): In web development,
// the Document Object Model is a programming interface for web documents.
// It represents the structure of a document as a tree of objects,
// where each object corresponds to a part of the document(e.g., elements, attributes).
// It provides a way for programs to manipulate the structure, style,
//  and content of web documents dynamically.

// <<<<<<<<<<<----------------Example-------------------------->>>>>>>>>>>>>
// < !DOCTYPE html>
//     <html>
//         <head>
//             <title>DOM Example</title>
//         </head>
//         <body>

//             <h1 id="main-heading">Hello, World!</h1>
//             <p class="content">This is a sample paragraph.</p>
//             <button onclick="changeText()">Click me</button>

//             <script>
//                 function changeText() {
//                   // Accessing the DOM to change the content of the paragraph
//                 var paragraph = document.querySelector('.content');
//                 paragraph.textContent = 'Text changed!';

//                 // Accessing the DOM to change the content of the heading
//                 var heading = document.getElementById('main-heading');
//                 heading.innerHTML = 'New Heading';
//                }
//             </script>

//         </body>
//     </html>


// dom manipulation =>i handle html code through dom manipulation

// example
// let ele = document.getElementById("click")

// console.log(ele)    //<button id = "click"> click me</button>

// Function in javascript
// function clicked() {
//     console.log("hello world")
// }

// <<<<<<<<------Events in javascript ----->>>>>>>>>>

// firstcontainer.addEventListener('click', function () {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log('clicked container')
// })

// firstcontainer.addEventListener('mouseover', function () {
//     console.log('mouse hover on container ')
// })

// firstcontainer.addEventListener('mouseout', function () {
//     console.log('mouseout clicked container')
// })
// let prevhtml = document.querySelectorAll(".container")[1].innerHTML
// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll(".container")[1].innerHTML = prevhtml
//     console.log('mouseup clicked container')
// })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log('mousedown clicked container')
// })


// <<<<<<<<------ ARROW Function------>>>>>>

// function add(a,b) {
//     return a + b;
// }

// add = (a, b) => {  // arrow function
//     return a + b;
// }
// let adding = add(2, 4)
// console.log(adding)

// <<<<<<<<------ SET TIME in function ------>>>>

// example.1------->>>>>>>>>>
// logkaro = () => {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//      console.log('log hona chahiye')
// }
// clr= setTimeout(logkaro,2000)
// clr =setInterval(logkaro,1000)
// use clearInterval(clr)/clearTimeout(clr) to cancel setinterval/settimeout

// example.2------->>>>>>>>>>
// clr = setTimeout(() => {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log('log hona chahiye')
// }, 6000)

// clr = setInterval(() => {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log('log hona chahiye')
// }, 1000)
// use clearInterval(clr)/clearTimeout(clr) to cancel setinterval/settimeout


//<<<<<<<<------ LOCALSTORAGE in javascript ------>>>>

// localStorage.setItem('name', 'aniket')
// localstorage
// Storage { name: 'aniket', length: 1 }
// localStorage.getItem('name') //''aniket'
//localstorage.removeItem('name') // remove the name from localstorage
//localstorage.clear() // remove  all from localstorage


// <<<<<<<< ------ JSON =>JavaScript Object Notation ---->>>>>>>>>>
// example.1
// obj = {
//     name: "aniket", age: "21", adress: "kushinagar",
//     a: {
//      name:"mani"
//     }
// }

// aso = JSON.stringify(obj);
// console.log(typeof aso) //string
// console.log(aso); //{ "name": "aniket", "age": "21", "adress": "kushinagar" }

// example.2

//  obj = {
// name: "aniket", age: "21", adress: "kushinagar",
//     a: {
//     name: "mani"
// }
// }
// aso = JSON.stringify(obj);
// console.log(typeof aso) //string
// console.log(aso); //{"name":"aniket","age":"21","adress":"kushinagar","a":{"name":"mani"}}

// parsed = JSON.parse(`{"name":"aniket","age":"21","adress":"kushinagar","a":{"name":"mani"}}`)
// console.log(parsed) //{name: 'aniket', age: '21', adress: 'kushinagar', a: {…}}
// <------- JSON.stringify => is converted object to string ------>>>>>>>>>>>
// <-------  JSON.parse =>  is converted string to object ------>>>>>>>>>>>

// Q.difference btw map or foreach?
// map returns a new array with updated
// example.a
// var arr = ["aniket", "ramu", "shyam", "egr"];
// let a = arr.map(function (item) { return item === "aniket" });
// let av = arr.map((item) => item +" "+ "Kumar");


// console.log(av)
// arr.forEach(abc => {
//     console.log(abc)
// });