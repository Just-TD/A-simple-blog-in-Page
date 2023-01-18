function sign(){ 
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    emailInput.value = "";
    passwordInput.value = "";
    
   
    let user = {email:emailValue, password:passwordValue};
    let content = localStorage.getItem("user");
    if(content){ 
        content = user;
    }
    localStorage.setItem("user", JSON.stringify(user));

}

var mark = window.prompt("Enter your exam mark here>>");

if(mark <= 50){ 
    document.getElementById("td").innerHTML = "YOU DO BANG THIS TEST YOUR GRADE IS" + mark + "WHICH IS F"
}


function check(){ 
    let num = 12;
if(num >= 13 && num <12){ 
    alert("wrong info");
}else{ 
    alert("correct info");
}

}