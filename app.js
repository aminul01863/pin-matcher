function generatePin(value) {
  const inputValue = document.getElementById("generate-input");
  const inputValueString = value + "";
  if (inputValueString.length === 4) {
    inputValue.value = inputValueString;
  } else {
    return generate();
  }
}

function generate() {
  const generatePi = Math.round(Math.random() * 10000);
  generatePin(generatePi);
}

document.getElementById("generate-pin").addEventListener("click", function () {
  generate();
});

document
  .getElementById("input-btn")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumber = document.getElementById("type-number");
    const typeNumberValue = typeNumber.value;
    if (isNaN(number)) {
      if (number === "C") {
        typeNumber.value = "";
      } else if (number === "<") {
        const digits = typeNumberValue.split("");
        digits.pop();

        const remaiNingDigit = digits.join("");
        typeNumber.value = remaiNingDigit;
      }
    } else {
      const neWNumber = typeNumberValue + number;
      typeNumber.value = neWNumber;
    }
  });

document.getElementById("submit-btn").addEventListener("click", function () {
  const generatePin = document.getElementById("generate-input");
  const generatePinString = generatePin.value;

  const typeNumber = document.getElementById("type-number");
  const typeNUmberString = typeNumber.value;
  typeNumber.value = "";
  if (generatePinString === typeNUmberString) {
    generatePin.value = "";
    const success = document.getElementById("success");
    success.style.display = "block";
    const error = document.getElementById("error");
    error.style.display = "none";
  } else {
    const error = document.getElementById("error");
    error.style.display = "block";
    const success = document.getElementById("success");
    success.style.display = "none";
  }
});
