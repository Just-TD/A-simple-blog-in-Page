function signIn(){ 
    let email = emailInput.value;
    let password = passwordInput.value;
    passwordInput.value = "";
    emailInput.value = "";
  

    if(email && password){ 
        let empty_array = JSON.parse(localStorage.getItem("users"));
        let check = empty_array.findIndex(u => u.email == email && u.password == password);
        if(check < 0){ 
            alert("Wrong input")
        }else{ 
            localStorage.setItem("currentUsers", email);
            window.open("dashboard_fintech.html", "self");
    
        }
        
    }else{ 
        alert("You hav to fill out those forms first");
    }
   
    
}
