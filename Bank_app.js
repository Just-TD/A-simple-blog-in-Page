


var depositInput = document.getElementById("deposit-input");
var withdrawInput = document.getElementById("withdraw-input");
var balance = document.getElementById("show_balance");
var deposit = document.getElementById("show_deposit");
var withdraw = document.getElementById("show_withdraw");

// const deposit_btn = document.getElementById("dep_btn");
// deposit_btn.addEventListener('click', dep_function);
// function dep_function(){ 
//     var value = depositInput.value;
//    let depositValue =  Number(deposit.innerHTML) + Number(value);
//    let balanceValue = Number(balance.innerHTML) + Number(value);
//    deposit.innerText = depositValue;
//    balance.innerText = balanceValue;
// }
const deposit_btn = document.getElementById("dep_btn");
deposit_btn.addEventListener('click', dep_function);

function dep_function(){ 
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText)  +  Number(value) ;
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';

}

const withdraw_btn = document.getElementById("wit_btn");

withdraw_btn.addEventListener('click', wit_function);

function wit_function(){ 
    const value = withdrawInput.value;
    const balanceValue = Number(balance.innerText) - Number(value);
    withdrawValue = Number(value);
    withdraw.innerText = withdrawValue;
    balance.innerText = balanceValue;
    withdrawInput.value = '';

}



