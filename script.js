let numberButton = document.querySelectorAll(".numbersButton"),
  operatorsButton = document.querySelectorAll(".functionButton"),
  clearsButton = document.querySelectorAll(".clearButton"),
  decimalButton = document.querySelector(".decimal"),
  displayButton = document.querySelector(".display");
(memoryCurrentNumber = 0),
  (memoryNewNumber = false),
  (memoryPendingOperation = "");

const numberPress = (number) => {
  if (memoryNewNumber) {
    displayButton.value = number;
    memoryNewNumber = false;
  } else {
    if (displayButton.value === "0") {
      displayButton.value = number;
    } else displayButton.value += number;
  }
};

numberButton.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
});

const operation = (op) => {
  let localOperationMemory = displayButton.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    displayButton.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +localOperationMemory;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +localOperationMemory;
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= +localOperationMemory;
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= +localOperationMemory;
    } else {
      memoryCurrentNumber = +localOperationMemory;
    }
    displayButton.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
};

operatorsButton.forEach((op) => {
  op.addEventListener("click", (e) => {
    operation(e.target.textContent);
  });
});

const decimal = () => {
  let localDecimalMemory = displayButton.value;
  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
    displayButton.value = localDecimalMemory;
  }
};

decimalButton.addEventListener("click", decimal);

clearsButton.forEach((id) => {
  id.addEventListener("click", (e) => {
    clearFunction(e.target.textContent);
  });
});

const clearFunction = (id) => {
  if (id == "C") {
    displayButton.value = 0;
    memoryNewNumber = true;
  } else if (id == "CE") {
    displayButton.value = 0;
    memoryCurrentNumber = 0;
    memoryPendingOperation = 0;
    memoryNewNumber = true;
  }
  };
