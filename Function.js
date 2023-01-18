var table = document.getElementById("td");
var output = "";
for(var i = 1; i<12; i++){ 

    for(var d = 1; d<12; d++){ 
       output+= "<th>"+ d + "x" + i + "=" +  d*i + "</th>";        
    }
    
    output+= " </tr>"
} 

table.innerHTML = output; 





// var table = document.getElementById("td");
// var output = "";
// for(var i = 1; i<12; i++){ 
//     output+= "<tr>"

//     for(var d = 1; d<12; d++){ 
//         var result = (d + "x" + i + " = " + d*i);
//        output+= "<td>" + d*i + "</td>" 
//     }
//     output+= " </tr>"
// } 

// table.innerHTML = output;   


// let output = "";
// output += `<table class= "table table-bordered bg-dark text-white w-25" > <thead> <tr> <th> ${i} </th>  </tr> </thead>  <tbody> <tr> <th> ${result} </th> </tr> </tbody>  </table>` 
// document.getElementById("text").innerHTML = output;

