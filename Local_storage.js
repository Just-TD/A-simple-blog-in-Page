// function countVisit(){ 
//     let currentVisit = localStorage.getItem("visit_count");
//     if(currentVisit){ 
//         let currentVisit = Number(currentVisit) + 1;
//         document.getElementById("count");
//     }
//     else{ 
//         document.getElementById("count").innerHTML = 1;
//     }
//     var num_visit = 0;
//     localStorage.setItem("visit_count" , num_visit);
// }

function countVisit(){ 
    let lastVisit = localstorage.getItem("last_visit");
    if(lastVisit){ 
        document.getElementById("last").innerHTML = lastVisit;

    }
    else{ 
        document.getElementById("last").innerHTML = "Your first time of visiting the page";

    }
    let num_visit = 0;
    let first = localstorage.setItem('visit_count', num_visit);
    let currentVisit = localstorage.getItem('visit_count');
    if(currentVisit){ 
        currentVisit = Number(currentVisit) + 1;       
        document.getElementById('count').innerText = currentVisit;
        localstorage.setItem("visit_count", currentVisit);        
        

    }else{ 
        document.getElementById("count").innerText = 1;
        localstorage.setItem("visit_count", 1);
        

    }
    
    function astVisit(){ 
        let date = new Date();
        localstorage.setItem("last_visit", date.toUTCString());
    }
   
    
}






// localStorage.setItem("MyName", "Favour");
// localStorage.setItem("class", "100 Level");
// //alert(localStorage.getItem("MyName"));
// localStorage.removeItem("class");

// var marketList = [];

// function saveItem(){ 
//     let item = document.getElementById("itemInput").value;
//     marketList.push(item);
//     displayItems()
// }

// function displayItems(){ 
//     let content = "";
//     for(let i = 0; i< marketList.length; i++){ 
//         let item = marketList[i];
//         content += "<p class= 'shadow p-2 bg-danger text-white'>" + item + "</p>";
//         itemInput.value = '';
//     }

//     document.getElementById("listBox").innerHTML = content;
// }