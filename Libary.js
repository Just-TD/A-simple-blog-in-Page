let new_Obj = [];

function saveItem(){ 
    let book = bookName.value;
    let shelve = shelveNumber.value;
    bookName.value = '';
    shelveNumber.value = '';
    let lib_Object = {bookType:book, numberOnShelve:shelve, State:"Science and Fiction"};
    new_Obj.push(lib_Object);
    updatelocalStorage(); 
    doThis();
    display();
      

}

function doThis(){ 
    let see = localStorage.getItem("todos");
    new_Obj = JSON.parse(see);
}

doThis();

function updatelocalStorage(){ 
    localStorage.setItem("todos", JSON.stringify(new_Obj));
}
updatelocalStorage();


function display(){ 
    let content = ""; 
    for(let i = 0; i < new_Obj.length; i++){ 
        content += `<div class = "shadow p-2 bg-dark text-white mb-1 " > <small> Name of the Book: ${new_Obj[i].bookType} </small> <br> <small> Shelve Number: ${new_Obj[i].numberOnShelve} </small>  <br> <small> ${new_Obj[i].State} </small>   </div>` 
        document.getElementById("listBox").innerHTML = content;
    
        

    }
    
}








// function updatelocalStorage(){ 

  
// }
// updatelocalStorage();
// display();

// function getExistingTodos(){ 
//     let localLib = localStorage.getItem("lib");
//     if(localLib){ 
//         let system = JSON.parse(localLib);
//     }else{ 
//         let system = JSON.parse(localLib);        
        
//     }
//     updatelocalStorage();
//     display();
    
// }






