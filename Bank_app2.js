// var my_number = [];
// var number_item = {item1:depositValue, item2:balanceValue, item3:withdrawValue};
// my_number.push(number_item);
//  localStorage.setItem("cash", my_number);


let showDeposit = document.getElementById("deposit_area");
let showWithdraw = document.getElementById("withdraw_area");
let showBalance = document.getElementById("balance_area");
let deposit = document.getElementById("dep_input");
let withdraw = document.getElementById("wit_input");

// function getExisting_num(){ 
//     let localCash = localStorage.getItem("cash");
    
// }





// const dep_btn = document.getElementById("btn_dep");
// dep_btn.addEventListener('click', dep_function);

function dep_function(){ 
    var value = deposit.value;
    var depositValue = Number(showDeposit.innerText) + Number(value);    
    var balanceValue = Number(showBalance.innerText) + Number(value);
    var value_W = withdraw.value;
    var withdrawValue = Number(showWithdraw.innerText) + Number(value_W);
    var balanceValue_W = Number(showBalance.innerText) - Number(value_W);
    showWithdraw.innerText = withdrawValue;
    showDeposit.innerText = depositValue;
    showBalance.innerText = balanceValue;
    deposit.value = '';
    var money = {depsitMoney:depositValue,balanceMoney:balanceValue, withdrawMoney:withdrawValue};
    var emptMoney = [];
    emptMoney.push(money);
    console.log(emptMoney);
    localStorage.setItem("my_Money", JSON.stringify(emptMoney));
    getMoney();
    
    
    
}



function getMoney(){ 
    var someCash = localStorage.getItem("my_Money");
    var emptMoney = JSON.parse(someCash);

}
dep_function();

getMoney();


var wit_btn = document.getElementById("btn_wit");
wit_btn.addEventListener('click', wit_function);

function wit_function(){ 
    var value_W = withdraw.value;
    var withdrawValue = Number(showWithdraw.innerText) + Number(value_W);
    var balanceValue_W = Number(showBalance.innerText) - Number(value_W);
    showWithdraw.innerText = withdrawValue;
    showBalance.innerText = balanceValue_W;
    withdraw.value = '';
    
}



 

