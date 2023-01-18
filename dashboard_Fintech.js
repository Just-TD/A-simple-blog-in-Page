function fetchDetails(){ 
    let myUser = localStorage.getItem("currentUsers");
    if(myUser){ 
        let users = JSON.parse (localStorage.getItem("users")) ;
        let details = users.findIndex(u => u.email == myUser);
        document.getElementById("userName").innerHTML = users[details].username;
        document.getElementById("accNumber").innerHTML = users[details].accountNumber;
        document.getElementById("bal").innerHTML = users[details].Balance;
        // print the username on the prompt
    }else{ 
        // take you back to sign in page
        window.open("Fintech_signIn.html");
    }

    let loc_acc = JSON.parse(localStorage.getItem("account"));
    document.getElementById("bal").innerHTML = loc_acc;
    
    

}

fetchDetails();

let signOut_Btn = document.getElementById("out");
signOut_Btn.addEventListener('click', () => { 
    localStorage.clear("currentUsers");
    window.open("fintech_signUp.html");
})



// function deposit(){ 
//     let amount = dptAmount.value;
//     dptAmount.value = "";
//     let currentUsers = localStorage.getItem("currentUsers");
//     if(currentUsers){ 
//         let users = JSON.parse(localStorage.getItem("users"));
//         let details = users.findIndex( u => u.email == currentUsers);
//         let result = parseFloat(users[details].Balance) + parseFloat(amount);
        
//     }

// }

function deposit(){ 
    let amount = dptAmount.value;
    dptAmount.value = "";
    let balance = document.getElementById("bal");
    let result = Number(balance.innerHTML) + Number(amount);
    localStorage.setItem("account",JSON.stringify(result));
    document.getElementById("bal").innerHTML = result;

}

let transfer_Btn = document.getElementById("transfer");
transfer_Btn.addEventListener('click', () => { 
    let tran = amtTransfered.value;
    amtTransfered.value = "";
    let locBal = JSON.parse(localStorage.getItem("account"));
    let final_result = Number(tran) + Number(locBal);
    document.getElementById("bal").innerHTML = final_result;
    let wit = amtWit.value;
    amtWit.value = "";
    let withdrawValue = Number(localBal) - Number(wit);
    document.getElementById("bal").innerHTML = withdrawValue;


})






















































// function fetchDetails(){ 
//     let my_User =  localStorage.getItem("currentUsers") ;
//     if(my_User){ 
//         let users = JSON.parse(localStorage.getItem("users")) ;
//         let details = users.filter(u => u.email == my_User);
//         document.getElementById("userName").innerHTML = details[0].username;
//         document.getElementById("accNumber").innerHTML = details[0].accountNumber;

//     }else{ 
//         window.open("Fintech_signIn.html");
    
//     }
    
// }
// fetchDetails();




