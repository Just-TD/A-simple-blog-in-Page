
let empty_array = [];

function signUp(){ 
    
    let email = emailInput.value;
    let password = passwordInput.value;
    let username = nameInput.value;
    let accountNumber = Math.floor((Math.random() * 100000000) +1);    
    let balance = "0";
    let userObj = {email:email,password:password,username:username, accountNumber:accountNumber, Balance:balance};
 
    emailInput.value = "";
    passwordInput.value = "";
    nameInput.value = "";

    let existingUsers = JSON.parse(localStorage.getItem("users"));
    if(existingUsers){ 
        empty_array = existingUsers;
        
    }
        empty_array.push(userObj);
        localStorage.setItem("users", JSON.stringify(empty_array));

    if(email && password && username){ 
        window.open("Fintech_signIn.html");
        alert("Account created welcome!!");
    }else{ 
        alert("You need to fill in the form space")
    }
  
       

    
    
      
       
    
}

