let marketList = [];

function saveItem(){    
    let item = document.getElementById("itemInput"); 
    let item2 = document.getElementById("itemInput2");
    let date = new Date();
    let my_Array = {Task:item.value, completed:false , time: date.toUTCString(), price: item2.value};
    marketList.push(my_Array);
    itemInput.value = '';
    itemInput2.value = '';
    getExistingTodos();
    updatelocalStorage();
    displayItems();
    
}


function getExistingTodos(){ 
    let see = localStorage.getItem("Todos");
    marketList = JSON.parse(see);

}
getExistingTodos();

function updatelocalStorage(){ 
    localStorage.setItem("Todos", JSON.stringify(marketList));
    
}
updatelocalStorage();

function displayItems(){ 
    let content = "";
    
    for(let i = 0; i< marketList.length; i++){ 
        content += `<div class= "shadow p-2 bg-dark text-white mb-1"> <small> Name: ${marketList[i].Task}   </small>   <br>  <small> Time: ${marketList[i].time}     </small>   <br> <small> Price of the product: ${marketList[i].price}  </small>  `
        if(marketList[i].completed){ 
            content += `<button class = "float-end btn btn-success btn-sm" >  Done </button> </div> `
        }else{ 
            content += `<button class = "float-end btn btn-danger btn-sm" onclick = markAsDone(${i}) >  Mark as done </button> </div> `
            
            
        }
        
      
    }

    document.getElementById("listBox").innerHTML = content;
}


function markAsDone(index){ 
    marketList[index].completed = true;
    updatelocalStorage();
    displayItems();
    
}


//My try

// var new_Obj = [];

// function saveItem(){ 
//     let item = itemInput.value;
//     let price = itemInput2.value;
//     let date = new Date();
//     itemInput.value = "";
//     itemInput2.value = "";
//     let my_Obj = {Task:item,Price:price,time:date.toUTCString()};
//     new_Obj.push(my_Obj);
//     updatelocalStorage();
//     getElement();
//     showTodo();
    

// }

// function getElement(){ 
//     let see = localStorage.getItem("list");
//     new_Obj = JSON.parse(see);
// }
// getElement();

// function updatelocalStorage(){ 
//     localStorage.setItem("list", JSON.stringify(new_Obj));
    
// }
// updatelocalStorage();

// function showTodo(){ 
//     let content = "";
//     for(let i = 0; i < new_Obj.length; i++){ 
//         content += `<div class = "shadow bg-primary text-white mt-3 mb-3"> ${new_Obj[i].Task} <br> <br> ${new_Obj[i].Price} <br> <br> ${new_Obj[i].time} </div>`;
//     }

//     document.getElementById("listBox").innerHTML = content;
// }
// showTodo();



// function save(){ 
//     var item = hy.value;
//     var itemObj = {item:hy.value, done:false ,level: "Hard or easy"}
//     my_array.push(itemObj);
//     display_my_array()
// }

// function display_my_array(){ 
//     var todoHTML = "";
//     for(let t = 0; t < my_array.lenght; t++){ 
//         todoHTML += `<div class="shadow p-2"> ${my_array[t].item} <br> <small>${my_array[t].level} </small>`
//     }
//     if(my_array[t].done){ 
//         todoHTML += `<button class= "btn btn-danger btn-sm"> done </button> </div>`
//     }
//     else{ 
//         todoHTML += `<button class= "btn btn-dark btn-sm">  mark as done </button> </div>`        

//     }

     
// }

//student["gender"] = "Male";   adding another key and value pair to the objects

// var students = ["Hammed","Temi","Hosea","Jenny"];
// for(var i =0; i< students.length; i+=2){ 
//     console.log(students[i]);
// }

// let my_list = ["Coke","Fanta","Sprite","Malt"];
// let my_list2 = {drink:"Soft drinks", meal:"Vegetables", time:"Lunch" };





// var marketList = [];
// let item = document.getElementById("itemInput"); 
// let item2 = document.getElementById("itemInput2");
// var date = new Date();
// var my_Array = {Task:item.value, completed:false , time: date.toUTCString(), price: item2.value};
// marketList.push(my_Array);
//localStorage.removeItem("Todo");
//market list = todos



// function getExistingTodos(){
//     let localTodo = localStorage.getItem("Todos") ;
//     if(localTodo){ 
//         let marketList = JSON.parse(localTodo);
//     }else{ 
//         marketList = [];
//     }
//     updatelocalStorage() ;      
//     displayItems();  
    
// }




// var my_list = [];

// function saveItem(){ 
//     let item = document.getElementById("as").value;
//     my_list.push(item);
//     action()
// }

// function action(){ 
//     let content = "";
//     for(let i = 0; i<my_list.length; i++){ 
//         let item = my_list[i];
//         content += "<p class = 'shadow p-3 bg-dark text-white border-rounded-pill>" + item + "</p>";

//     }
//     document.getElementById("showarea").innerHTML = content;
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

// function show(){ 
//     let content = "";

//     for(let i = 1; i<=12; i++){ 
//         console.log(i);
//         for(var c = 1; c<=12; c++){ 
//             var result = (i * c);
//             content += "<p class = 'shadow p-3 w-100 text-white bg-dark'>" + i + "*"+ c + "=" + result + "</p>";
        
//         }
//     }

//     document.getElementById("showarea").innerHTML = content;
// }

//class excercise 1 loop
// for(var i = 1; i<=100; i++){ 
//     if(i % 3 == 0 && i % 5 == 0 ){ 
//         console.log("Fizz buzz");
//     }
//     else if(i % 3 == 0){ 
//         console.log("Fizz")
//     }
//     else if(i % 5 == 0){ 
//         console.log("buzz");
//     }

//     else{ 
//         console.log(i);
//     }
// }


// class excercise 2 loop
// for(var i = 100; i<=100 && i >= 1; i-- ){ 
//     console.log(i) ;
// }


//Array methods
//array.push()   allows you to add into an array
//array.pop()    allows you to remove from an array especially the last index
//array.shift()  allows you to remove from the array especially the first index.
//array.slice()  allows you to completely create another copy of the array.