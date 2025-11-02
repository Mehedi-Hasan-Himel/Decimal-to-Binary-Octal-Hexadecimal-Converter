// Collecting DOM elements
const Binary = document.getElementById("Binary");
const Octal = document.getElementById("octal");
const Hexadecimal = document.getElementById("hexadecimal");
const submit = document.getElementById("submit");
const numberInput = document.getElementById("numberDecimal");

// Function to handle button click

function binary(e) {
  e.preventDefault();

  const numberDecimal = numberInput.value;

  if (numberDecimal === "") {
    alert("Please enter a valid Number");
  } else if (numberDecimal < 0) {
    alert("Enter a positive number");
  }

  // Converting decimal to binary
  let binaryNumber = Number(numberDecimal).toString(2);
  Binary.innerText = binaryNumber;

  // Converting decimal to octal
  let octalNumber = Number(numberDecimal).toString(8);
  Octal.innerText = octalNumber;

  // Converting decimal to hexadecimal
  let hexadecimalNumber = Number(numberDecimal).toString(16);
  Hexadecimal.innerText = hexadecimalNumber;
}

submit.addEventListener("click", binary);
