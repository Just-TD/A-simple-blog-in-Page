// function greet(){ 
//     var year = document.getElementById("yearInput").value;
//     var age = 2022 - year;
//     alert(age)
// }

// function find(){ 
//     var year = document.getElementById(td).value;
//     var age = 2022 - year;

// }

// function ff(){ 
//     var num = ty.value;
//     if(num % 3 ==0 && num % 5==0){ 
//         alert("Fizz Buzz");
//     }
//     else if(num % 3 == 0){ 
//         alert("Fizz");
//     }
//     else if(num % 5 == 0){ 
//         alert("Buzz");
//     }
//     else{ 
//         alert(num);
//     }
// }
// function multiply(){ 
//     var c = 1;
//     for(c = 1; c<=12; c++){ 
//         console.log(c);
//         for(var v = 1; v<=12; v++){ 
//             var result = (c * v);
//             var final = (c + "*" + v + "=" + result);
//             console.log(c + "*" + v + "=" + result)
//         }
//     }
//     document.getElementById("py").innerHTML = final ;
// }




// var c = 1;
// for(c = 1; c<=5; c++){ 
//     console.log(c);
//     for(var v = 1; v<=5; v++){ 
//         console.log(c + "." + v);
//     }

// }

// Assignments 
// Multiplication table 
// fizz buzz assignment;
// Libary Assignment;
//find 10 more array method;

// watch video on class may 7;
// Fin tech app
// check 10 more array methods;
// create a simple libary system book1 book2; 
// git september 10 september 17;
// 1.sign up generate account number (10 digits)
// 2.sign in dashboard account balance account number

// features --> deposit, withdraw, transfer transaction history

// build a timer---> Just simply type on google timer; 
// Rescource JavaScript set timeout and interval;


 

// conditional statements
//and (&&) --- both sides true
//or(||) --- only one side is needed
//>=  ---- greater than

//if(condition){ 
    // block
//}
//else if(condition){ 
    // block
//}


 //var name = document.getElementById("id").value;    ------> This line of code is used to store values in a variable
 //const my_object = {firstName:"Temidola", age:"19", eyeColour:"Black"};  ----> This is the pattern of an object
//  const cars = ["Temidola","Folarin","Fiyinfolouwa"]; ---> Pattern of an array
// var name = "Td";
// var greeting = `my name is ${name}`; ------> This is an example of Template string

// function ff(){ 
//     var num = document.getElementById("ty").value;

//     if (num % 3 == 0 && num%5 ==0){ 
//         alert("Fizz Buzz")
//     }
//     else if(num % 5 == 0){ 
//         alert("Bizz")
//     }
//     else if( num %3==0){ 
//         alert("Fizz")
//     }
//     else{ 
//         alert(num)
//     }
// }


// switch statements ---> Most of the times it is used to confirm values
// var age = 14
// switch(age){ 
//     case 18: console.log("Hello"); break
//     case 14: console.log("world"); break
//     default: console.log("no number")
// }


// Tenary operators
// var age = 20
// var staus = age<14 ? 'Adult' : age >14 ? 'teenager' :'kid';
// var status = age<18 ? 'adult' : 'kid';
// console.log(status);







//for Loop

// function ff(){ 
//     var num = ty.value;

//     for(num = 1; num<=20; num++){ 
//         if(num % 3 && num % 5){ 
//             console.log("Fizz Buzz");
//         }
//         else if(num % 3){ 
//             console.log("Fizz");
//         }
//         else if(num % 5){ 
//             console.log("Buzz");
//         }
//         else{ 
//             console.log(num);
//         }
//     }
// } 

// while loop 

// var n = 1;
// while(n<=100){ 
//     console.log(n);
//     n++
// }

// do while loop 
// var n = 1;
// do{ 
//     console.log(n)
// } while(n<=100);

// multi-dimmensional loop

// var c = 1;
// for(c = 1; c<=5; c++){ 
//     console.log(c);
//     for(var v = 1; v<=5; v++){ 
//         console.log(c + "." + v);
//     }

// }


// Data Types Arrays and Objects 
// arrays

// var my_array = [ 
//     "Apple",
//     "Bannana",
//     "Pineapple",
//     "Watermelon",
//     "Orange",
// ]

// console.log(my_array[2]);
// console.log(my_array.pop())

// console.log(my_array.indexOf("Apple"))
// console.log(my_array.join())
// delete my_array[0];
// console.log(my_array[0]);
// array1.concat(array2);   This joins two arrays together
// my_array.sort()   this sorts the array in alphabetical orders



// var students = [ 
//     {name:"Ada", gender:"Male"},
//     {name:"Feranmi", gender:"Male"},
//     {name:"Eniola", gender:"Female"},
//     {name:"Dolapo", gender:"Male"},
//     {name:"cracky", gender:"Male"},
//     {name:"Ada", gender:"Male"},
// ]

// console.log(students[1]);  --- It access the element at the first index
// students.push({name:"Jacob", gender:"Male"}); --- //It adds to the array behind
// students.pop() // it removes the last item from the Array.
// students.shift()  //it removes from the front
// students.unshift()  // it adds from the front.
//delete student[0];   --- it completely deletes the item at the specified indexedDB.
//console.log(student[0]);
// students.join()   --- It makes the array into a string
// console.log(students);

// objects 
// var use_obj = {name:"Alat",age:"12",condition:"Healthy"};
// console.log(use_obj.condition);
//function sendMessage(){ 
    //let message = document.getElementById("just").value;
    //document.getElementById("chatArea").innerHTML = message;
//}
// var n;
//  for(n=1; n<= 40; n++){ 
//     console.log(n);
// }

// any other command after return wont run;
// exhibit A 
// function save(){ 
//     var sum = a + b;
//     return sum;
//     alert(sum);  this action after return wont run
// }
//prompt() this enables you to request for like an input value something like alert();

// var choice =  window.prompt("Chose your favorite Programming language \n 1.JavaScript \n 2.PHP \n 3.Python \n 4.HTML ");
// console.log(typeof choice);

// switch(choice){ 
//     case "1":
//         document.getElementById("see").innerHTML = "Your fav pick is JavaScript";
//         break;
//     case "2":
//         document.getElementById("see").innerHTML = "Your fav pick is PHP";
//         break;
//     case "3":
//         document.getElementById("see").innerHTML = "Your fav pic is Python";
//         break;
//     case "4":
//         document.getElementById("see").innerHTML = "Your fav pic is HTML"
//         break;
//     default:
//         document.getElementById("see").innerHTML = "Pick a number within the option".fontcolor("red").fontsize("34px");
// }

// var let and cosnt ---> The diffeerence 
// var is function scoped meaning that anything you declare with var under a function will still 
// take that value;
// let is block scoped meaning that the variable will only be defined within a block e.g If, while,for block
// const is also blocked scoped but the difference is that if you have declared a variable with Cosnt anywhere you can't reassign it again. Const is way better than let and var.





// for(let i = 0; i < 12; i++){ 
//      text = text + "The number is" + i + "and it is correct" + "<br>";
// }

//document.getElementById("def").innerHTML = text;

// let text = "";
// let i = 0;
// while( i < 6){ 
//     text = text + "The number is " + i + "<br>"
//     i++;
// }

// document.getElementById("def").innerHTML = text;

// do{ 
//     text = text + "The number is " + i + "<br>";
//     i++;
// }while( i < 6);
// document.getElementById("def").innerHTML = text;
// Assigmnents



//1. Multiplication table function.html  done
// 2. Palindrome test done
// 3. Todo_List   show him your problem at Libary.js and Array.js
// 4. Fin_tech app 
// 5. Stop watch timer (2 Types);
// 6. Maybe last class Assignment.

// questions;
// 1. Difference in using var let and Const.
// 2. Variable declaration of my_Obj = check 
//let see = filterInput.split("").reverse().join("");
// what is the advantage of filter over findIndex in array methods.
// what kind of variable declaration is this --> let details;
// What happens when you don't perform the local operations on Git can you still pull and push without it.
// Why do we have to convert the date time to UTC string
// Wfe 117 for deploying
// What is the difference between Authentication with SSH and HTPPS;
















