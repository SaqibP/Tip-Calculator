const bill = document.getElementById('bill');
const people = document.getElementById('people');
const result = document.getElementById('result');
const calculate = document.getElementById('calculate');
let serviceQ = document.getElementById('serviceq');

result.style.display = 'none';

const calculator = document.getElementById('calculator');

calculate.addEventListener('click', calculateTip);

function calculateTip() {
  if (people.value <= 1) {
    result.style.display = 'none';
    alert('Cannot Be Empty/Negative');
  } else {
    result.style.display = 'block';
  }

  let totalTip = bill.value * serviceQ.value;

  let divTip = totalTip / people.value;

  console.log(divTip);

  let totalBill = totalTip + parseInt(bill.value);

  let totalBt = totalTip + totalBill;

  let totalPp = totalBt / people.value;

  document.getElementById('tip').innerText = '₹' + totalTip;
  document.getElementById('tipP').innerText = '₹' + divTip;
  document.getElementById('tb').innerText = '₹' + totalBill;
  document.getElementById('tbwt').innerHTML = '₹' + totalBt;
  document.getElementById('tbpp').innerHTML = '₹' + totalPp;
}
