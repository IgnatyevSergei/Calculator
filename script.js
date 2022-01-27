let numberButton = document.querySelectorAll(".numbersButton"),
  operatorsButton = document.querySelectorAll(".functionButton"),
  resultButton = document.querySelector(".equals"),
  clearsButton = document.querySelectorAll(".clearButton"),
  decimalButton = document.querySelector(".decimal"),
  displayButton = document.querySelector(".display")
  memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation = "";

const numberPress = (number) => {
  if ((displayButton.value === "")) {
    displayButton.value = number;
  } else displayButton.value += number;
};

numberButton.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
});
