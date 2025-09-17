function getValues() {
  return [
    parseFloat(document.getElementById('first-number').value),
    parseFloat(document.getElementById('second-number').value)
  ];
}

function displayResult(result) {
  const out = document.getElementById('output');
  out.textContent = String(result);
  if (result < 0) {
    out.classList.add('negative');
  } else {
    out.classList.remove('negative');
  }
}

function addNumbers() {
  const [a, b] = getValues();
  displayResult(a + b);
}

function subtractNumbers() {
  const [a, b] = getValues();
  displayResult(a - b);
}

function multiplyNumbers() {
  const [a, b] = getValues();
  displayResult(a * b);
}

function divideNumbers() {
  const [a, b] = getValues();
  displayResult(a / b);
}

// power using for-loop
function powerNumbers() {
  const [base, exp] = getValues();
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  displayResult(result);
}

function clearCalc() {
  document.getElementById('first-number').value = '';
  document.getElementById('second-number').value = '';
  document.getElementById('output').innerHTML = '';
  document.getElementById('output').classList.remove('negative');
}


