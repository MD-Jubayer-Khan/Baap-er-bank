// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  
  //update deposit total
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalText);
  const newDepositTotal = depositTotalAmount + depositAmount;
  depositTotal.innerText = newDepositTotal;
  depositInput.value = '';

  // update balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  const newBalanceTotal = balanceTotalAmount + depositAmount;
  balanceTotal.innerText = newBalanceTotal;
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
 const withdrawInput = document.getElementById('withdraw-input');
 const withdrawAmountText = withdrawInput.value;
 const withdrawAmount = parseFloat(withdrawAmountText);

// update withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const withdrawTotalText = withdrawTotal.innerText;
const withdrawTotalAmount = parseFloat(withdrawTotalText);
const newWithdrawTotal = withdrawTotalAmount + withdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;
withdrawInput.value = '';

// reduce balance total 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  const newBalanceTotal = balanceTotalAmount - withdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

})
