function getInputValue(){
  const depositInput = document.getElementById('deposit-input')
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText)
  // clear input field
  depositInput.value = '';
  return depositAmount;
}





document.getElementById('deposit-button').addEventListener('click',()=>{
  // const depositInput = document.getElementById('deposit-input')
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText)

  const depositAmount = getInputValue();
  // get current deposit

  const depositTotal = document.getElementById('deposit-total')
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText)
  depositTotal.innerText = previousDepositTotal + depositAmount;

  // update balance
const balanceTotal = document.getElementById('balance-total')
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;

  // clear input field
  // depositInput.value = '';
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInput = document.getElementById('withdraw-input')
  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText);

  // update withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previouswithdrawTotalText = withdrawTotal.innerText;
  const previouswithdrawTotal = parseFloat(previouswithdrawTotalText)
 
  withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

  // update balance after withdraw

  const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  // clear withdraw Input field
  withdrawInput.value = '';

})