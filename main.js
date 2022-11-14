let displayValue = "";
let numOne = "";
let numTwo = "";
let op = "";
let clearDisplayBefore = false;

function init() {
  let displayScreen = document.querySelector(".calc-screen");
  displayScreen.innerHTML = "<p>" + displayValue + "</p>";

  let buttonNumbers = document.querySelectorAll(".calc-buttons-numbers button");
  buttonNumbers.forEach((button) => {
    button.addEventListener("click", function () {
      appendDisplay(button.getAttribute("id"));
    });
  });

  let buttonOps = document.querySelectorAll(".calc-buttons-ops button");

  buttonOps.forEach((button) => {
    button.addEventListener("click", function () {
      setOp(button.getAttribute("id"));
    });
  });

  let buttonsControls = document.querySelectorAll(".calc-buttons-controls button");

  buttonsControls.forEach((button) => {
    if (button.getAttribute("id") == "equal") {
      button.addEventListener("click", function () {
        numTwo = displayValue;
        equal(numOne, op);
      });
    } else if (button.getAttribute("id") == "clear") {
      button.addEventListener("click", function () {
        clearDisplay();
        op = "";
      });
    }
  });
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, y, operation) {
  let answer = "";

  if (operation == "add") {
    answer = add(x, y);
  } else if (operation == "subtract") {
    answer = subtract(x, y);
  } else if (operation == "multiply") {
    answer = multiply(x, y);
  } else if (operation == "divide") {
    answer = divide(x, y);
  } else {
    answer = "undefined";
  }

  return answer;
}

function equal(x, operation) {
  if (!displayValue || !operation) {
    return;
  }

  let y = displayValue;

  let answer = operate(x, y, operation);
  setDisplay(answer);
  op = "";
  clearDisplayBefore = true;
}

function appendDisplay(num) {
  let displayScreen = document.querySelector(".calc-screen");
  let displayNumber = displayScreen.firstChild;

  if (!num) {
    return;
  } else if (num == 0 && displayNumber.innerHTML == 0) {
    return;
  } else if (clearDisplayBefore) {
    displayNumber.innerHTML = num;
    displayValue = displayNumber.innerHTML;
    clearDisplayBefore = false;
  } else {
    displayNumber.innerHTML += num;
    displayValue = displayNumber.innerHTML;
  }
}

function clearDisplay() {
  let displayScreen = document.querySelector(".calc-screen");
  let displayNumber = displayScreen.firstChild;

  displayNumber.innerHTML = "";
  displayValue = displayNumber.innerHTML;
}

function setDisplay(number) {
  let displayScreen = document.querySelector(".calc-screen");
  let displayNumber = displayScreen.firstChild;

  displayNumber.innerHTML = number;
  displayValue = displayNumber.innerHTML;
}

function setOp(operation) {
  numOne = displayValue;
  op = operation;
  console.log(op);
  console.log(numOne);

  clearDisplay();
}

init();
