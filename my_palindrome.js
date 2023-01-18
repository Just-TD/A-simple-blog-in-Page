


function action(){ 
    const filterInput = td.value;
    let see = filterInput.split("").reverse().join("");
    td.value = "";
    //let content = "";
    if(filterInput != see){ 
        console.log("Not a palindrome");
        document.getElementById("check_pal").innerHTML = "Not a palindrome";

    }else{ 
        console.log(" This is a palindrome")
        document.getElementById("check_pal").innerHTML = " a palindrome";

    };

};




