let displayValue = "";

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
      // TODO need to figure out how to handle operation commands
    });
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

function appendDisplay(num) {
  let displayScreen = document.querySelector(".calc-screen");
  let displayNumber = displayScreen.firstChild;

  if (!num) {
    return;
  } else if (num == 0 && displayNumber.innerHTML == 0) {
    return;
  } else {
    displayNumber.innerHTML += num;
  }
}

init();
