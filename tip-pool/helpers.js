// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;
  for (let key in allPayments) {
    let payment = allPayments[key];
    total += Number(payment[type]);
  }
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';

  newTd.addEventListener('click', function(e) {
    e.target.parentElement.remove();
    if (type === 'server') {
      //console.log(e.target.parentElement.id);
      delete allServers[e.target.parentElement.id];
      updateServerTable();
    } else if (type === 'payment') {
      //console.log(e.target.parentElement.id);
      delete allPayments[e.target.parentElement.id];
      updateServerTable();
      updateSummary();
    }
  })

  tr.append(newTd);
}