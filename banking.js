//handle deposit button Event
document.getElementById('deposit-button').addEventListener('click', function () {
    //Get The Amount Deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const currentDeposit = document.getElementById('deposit-total');
    const preDepositTotal = currentDeposit.innerText;
    const newDepositTotal = parseFloat(preDepositTotal) + parseFloat(depositAmount);

    currentDeposit.innerText = newDepositTotal;
    //clear the deposit input flied
    depositInput.value = '';

    //Update Account Balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const totalBalance = parseFloat(balanceTotalText) + parseFloat(depositAmount);
    balanceTotal.innerText = totalBalance;
})

//handle deposit button Event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //Get The Amount Deposited
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawNewAmount = withdrawInput.value;
    const currentWithdraw = document.getElementById('withdraw-total');
    const preWithdraw = currentWithdraw.innerText;
    const newTotalWithdraw = parseFloat(preWithdraw) + parseFloat(withdrawNewAmount);

    currentWithdraw.innerText = newTotalWithdraw;
    //clear the deposit input flied
    withdrawInput.value = '';

    //Update Account Balance
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const totalBalance = parseFloat(balanceTotalText) - parseFloat(withdrawNewAmount);
    balanceTotal.innerText = totalBalance;
})
